var array = [1,2,3,4,5,6];
/**
对array所有元素求和
找重复（子问题）：`sum(array, ++n)`就是问题
找变化：找重复中的变化量->参数
找边界：找出参数变化趋势->设计出口
*/
function sum(array, n) {
  if(n==array.length-1) {
    return array[n];
  }
  return array[n] + sum(array, ++n);
}

sum(array, 0);
