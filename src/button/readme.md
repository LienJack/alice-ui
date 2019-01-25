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