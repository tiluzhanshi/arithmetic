# 如何实现只用一个for循环对数组排序？

先引入模块
```javascript
const  NodeSort  = require("./sort_only_for.js")
```
调用它
```javascript

var arr = [324, 6316, 425, 1192, 211, 1733, 6841, 1982, 329, 339, 324, 6836, 4625, 1392, 211, 733, 684, 982, 3291, 339, ];

var n = null;
arr.forEach(number => {
  (n ? n.pipe(number) : n = new NodeSort(number));
})

function getSortDown(node) {
  var first = node.getFirst();
  while (first && first.next) {
    console.log(first.value);
    first = first.next;
  }
  console.log(first.value)
}
getSortDown(n);

console.log("*".repeat(10))

function getSortUp(node) {
  var last = node.getLast();
  while (last && last.pre) {
    console.log(last.value);
    last = last.pre;
  }
  console.log(last.value)
}

getSortUp(n);
```

# 原理
使用链表存储，并在节点中增加一个pip方法进行对比，像管道一样向下流或向上流动，直到找到存储它的位置进行把上一个节点和下一个节点关连起来；
`node.pip(3)`像这样的，把这个值`3`传给node,如果3比node的值大，就和上一个节点对比，如果还比它大就把值传给上一个节点的pipe；否则就在当前节点把新创建一个节点，把上一个节点、新节点、当前节点连接起来；如果3比node的值小，则相反；