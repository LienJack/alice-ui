# Button 按钮
## 代码演示

### 按钮种类
支持`default`、`primary`、`danger`三种类型，默认为`default`
```javascript
<alice-button type="default">按钮default</alice-button>
<alice-button type="primary">按钮primary</alice-button>
<alice-button type="danger">按钮danger</alice-button>
```

### 按钮大小
支持`large`、`normal`、`small`三种尺寸，默认为`normal`
```javascript
<alice-button type="default">按钮default</alice-button>
<alice-button type="primary">按钮primary</alice-button>
<alice-button type="danger">按钮danger</alice-button>
```

### 左右显示图标
左右各有`slot`插槽
```javascript
<alice-button  text="左边"><alice-icon name="face" slot="btn-left"/></alice-button>
<alice-button text="右边"><alice-icon name="face" slot="btn-right"/></alice-button> 
```

### 禁用状态

```javascript
<alice-button disabled>禁用状态</alice-button>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 类型，可选值为 `primary` `danger` | `String` | `default` | 
| size | 尺寸，可选值为 `large` `normal` `small`  | `String` | `normal` |
| text | 文字 | `String` | - | 
| tag | HTML 标签 | `String` | `button` | 
| disabled | 是否禁用按钮 | `Boolean` | `false` | 
| block | 是否为块级元素 | `Boolean` | `false` | 
| round | 是否为圆形按钮 | `Boolean` | `false` |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击触发 | - |

### Slot
| 名称 | 说明 |
|------|------|
| - | button`text`显示内容 |
| btn-left | 插入到`text`左边 |
| btn-right | 插入到`text`右边|