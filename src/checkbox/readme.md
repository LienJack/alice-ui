# checkbox 多选

## 代码展示
### 一个使用
```javascript
<alice-checkbox v-model="value1">选中状态 {{ value1 }}</alice-checkbox>
```

### 多个使用
要使用`alice-checkbox-group`作为父级组件，并把数据绑定在`alice-checkbox-group`上面
```javascript
<alice-checkbox-group v-model="options1">
  <alice-checkbox label="value1">value1</alice-checkbox>
  <alice-checkbox label="value2">value2</alice-checkbox>
  <alice-checkbox label="value3">value3</alice-checkbox>
  <alice-checkbox label="value4">value4</alice-checkbox>
</alice-checkbox-group>
```

### 禁用某个元素
```javascript
<alice-checkbox-group v-model="options2">
  <alice-checkbox label="value1">value1</alice-checkbox>
  <alice-checkbox label="value2" disabled>value2</alice-checkbox>
  <alice-checkbox label="value3">value3</alice-checkbox>
  <alice-checkbox label="value4">value4</alice-checkbox>
</alice-checkbox-group>
```

### 设置最大选择个数
```javascript
<alice-checkbox-group v-model="options3" :max="2">
  <alice-checkbox label="value1">value1</alice-checkbox>
  <alice-checkbox label="value2">value2</alice-checkbox>
  <alice-checkbox label="value3">value3</alice-checkbox>
  <alice-checkbox label="value4">value4</alice-checkbox>
</alice-checkbox-group>
```
