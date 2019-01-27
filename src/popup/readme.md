# popup 弹出
## 代码展示
```javascript
<alice-popup v-model="popup1">
  <div class="p20">中间弹出</div>
</alice-popup>
<alice-popup v-model="popup2"  transiton="left">
  <div class="p20">左边弹出</div>
</alice-popup>
<alice-popup v-model="popup3"  transiton="right">
  <div class="p20">右边弹出</div>
</alice-popup>
<alice-popup v-model="popup4"  transiton="top">
  <div class="p20">上边弹出</div>
</alice-popup>
<alice-popup v-model="popup5"  transiton="bottom">
  <div class="p20">下边弹出</div>
</alice-popup>
```