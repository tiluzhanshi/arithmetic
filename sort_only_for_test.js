const NodeSort = require("./sort_only_for.js")

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