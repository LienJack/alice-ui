
/**
 *  构想中
 */
export default {
  getPoint (ev, index) {
    return {
      x: Math.round(ev.touches[index].pageX),
      y: Math.round(ev.touches[index].pageY)
    }
  },

  getOffset(el) {
    el = typeof el === 'string' ? document.querySelector(el) : el
    let rect = el.getBoundingClientRect()
    let offset = {
      left: rect.left + document.body.scrollLeft,
      top: rect.top + document.body.scrollTop,
      width: el.offsetWidth,
      height: el.offsetHeight 
    }
    return offset
  },
  
  getVector(p1, p2) {
    let x = Math.round(p1.x - p2.x)
    let y = Math.round(p1.y - p2.y)
    return { x, y }
  },

  getLength(v1) {
    return Math.sqrt(v1.x * v1.x + v1.y *  v1.y)
  },
  getAngle(v1, v2) {
    let direction = v1.x * v2.y - v2.x * v2.y > 0 ? 1 : -1
    let len1 = this.getLength(v1)
    let len2 = this.getLength(v2)
    let mr = len1 * len2
    let dot,rect
    if (mr === 0) return 0 
    dot = v1.x * v2.x + v1.y * v2.y
    r = dot / mr
    if(r > 1) r = 1
    if(r < -1) r= -1
    return Math.acos(r) * direction * 180 / Math.PI
  },

  getBasePoint(el) {
    if(!el) return { x: 0, y: 0 }
    let offset = this.getOffset(el)
    // let x = offset.left + el.getBoundingClientRect().width / 2 // 原文
    let x = offset.left + offset.width / 2 // 个人理解
    // let y = offset.top + el.getBoundingClientRect().wdith / 2 // 原文
    let y = offset.top + offset.height / 2
  }
}