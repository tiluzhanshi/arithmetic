// 1,1,2,3,5,8,13,21,34,55
function foo(n) {
    if(n == 1 || n == 2)
      return 1;
    
    return foo(n - 1) + foo(n - 2);
  }
  
  foo(10); // 55=34 + 21;