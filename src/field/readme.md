# cell field 单元格

## 代码展示
### 使用to调转
```javascript
<alice-cell title="返回首页" is-link to="/index" />
```

### 使用field
```javascript
<alice-field title="文本框" v-model="value1"></alice-field>
```

### 输入提示
```javascript
 <alice-field title="输入提示框" :placeholder="'请输入'"></alice-field>
```

### 文本按右边对齐
```javascript
<alice-field title="禁用状态" value="disabled" disabled></alice-field>
```
### 只读
```javascript
<alice-field title="只读" value="readonly" readonly></alice-field>
```
### 使用图标
```javascript
<alice-field title="图标" value="使用图标"iconRight="face" ></alice-field>
```

### 使用textarea
```javascript
 <alice-field title="textarea" type="textarea" ></alice-field>
```
