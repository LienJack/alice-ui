# Icon 图标

## 代码展示
 使用google的material,[图标参考地址（需要科学上网)](https://material.io/tools/icons/?style=baseline)

 ```javascript
<alice-icon name="3d_rotation" color="#10a2f7" size="35px"/>
<alice-icon name="accessibility" color="#10a2f7" size="35px"/>
 ```

 ## API
 | 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 使用的图标 | `String` | - | 
| size | 尺寸  | `String` | `24px` |
| color | 颜色 | `color` | `#fff` | 
| cname | 自定义的class | `String` | - | 
| classPrefix | 自定义的其他图标 | `String` | - | 
| isImg | 是否显示图片 | `Boolean` | `false` | 

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击触发 | - |