# collapse 手风琴

## 代码展示

### 显示一个
```JavaScript
<alice-collapse  :selected="list1" single>
  <alice-collapse-item title="手风琴1" name="collapse1">
    <alice-cell title="元素1" is-link />
    <alice-cell title="元素2" is-link />
    <alice-cell title="元素3" is-link/>
  </alice-collapse-item>
  <alice-collapse-item title="手风琴2" name="collapse2">
    <alice-cell title="元素1" is-link />
    <alice-cell title="元素2" is-link />
    <alice-cell title="元素3" is-link/>
  </alice-collapse-item>
</alice-collapse>
```
### 显示多多个
```JavaScript
<alice-collapse  :selected="list2" >
  <alice-collapse-item title="手风琴1" name="collapse1">
    <alice-cell title="元素1" is-link />
    <alice-cell title="元素2" is-link />
    <alice-cell title="元素3" is-link/>
  </alice-collapse-item>
  <alice-collapse-item title="手风琴2" name="collapse2">
    <alice-cell title="元素1" is-link />
    <alice-cell title="元素2" is-link />
    <alice-cell title="元素3" is-link/>
  </alice-collapse-item>
</alice-collapse>
```