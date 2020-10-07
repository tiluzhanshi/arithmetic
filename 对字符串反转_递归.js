var str = "abcdefg";
/**
对字符串反转_递归
找重复（子问题）：`reverse(str, --n)`就是问题
找变化：找重复中的变化量->参数
找边界：找出参数变化趋势->设计出口
*/
function reverse(str, n) {
  if(n == 0) {
    return str.charAt(0);
  }
  return str.charAt(n) + reverse(str, --n);
}
reverse(str, str.length-1);
