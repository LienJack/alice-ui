/**
 * 向上找到最近的指定组件
 * @param {Object} context
 * @param {String} componetName
 */

export function findComponentUpward(context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name

  while(parent && (!name || ![componentName].includes(name))) {
    parent = parent.$parent
    if(parent) name = parent.$options.name
  }
  return parent
}

/**
* 由一个组件，向上找到所有的指定组件
* @param {Object} context
* @param {String} componetName
*/
export function findComponentsUpward(context, componentName) {
 let parents = []
 const parent = context.$parent

 if(parent) {
   if(parent.$options.name === componentName) parents.push(parent)
   return parents.concat(findComponentsUpward(parent, componentName))
 } else {
   return []
 }
}

/**
* 向下找到最近的指定组件
* @param {Object} context
* @param {String} componetName
*/
export function findComponentDownward (context, componentName) {
 const childrens = context.$children
 let children = null
 if(childrens.length) {
   for(const child of childrens) {
     const name = child.$options.name
     if(name === componentName) {
       children = child
       break
     } else {
       children = findComponentDownward(child,componentName)
       if(children) break // 找到一个之后全部停止遍历
     }
   }
 }
 return children
}

/**
* 向下找到所有指定的组件
* @param {Object} context
* @param {String} componetName
*/

export function findComponentsDownward (context, componentName) {
 return context.$children.reduce((components, child) => {
   if (child.$options.name === componentName) components.push(child);
   const foundChilds = findComponentsDownward(child, componentName);
   return components.concat(foundChilds);
 }, []);
}

/**
* 找到指定组件的兄弟组件
* @param {Object} context
* @param {String} componetName
*/
export function findBrothersComponents (context, componentName, exceptMe = true) {
 let res = context.$parent.$children.filter(item => {
   return item.$options.name === componentName;
 });
 let index = res.findIndex(item => item._uid === context._uid);
 if (exceptMe) res.splice(index, 1);
 return res;
}