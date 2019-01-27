# dialog 弹框

## 代码展示

使用函数调用
### Alert
```javascript
this.$alert('这是提示框', 
          ()=>{ window.alert('你按了确定') 
        })
```

### confirm
```javascript
this.$confirm('这是提示框', 
          ()=>{ window.alert('你按了确定') },
          () => { window.alert('你按了取消') 
        })
```