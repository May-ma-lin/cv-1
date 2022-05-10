// querySelector: 匹配指定 CSS 选择器的一个元素
let demo = document.querySelector('#demo');
let string = `你好，我是一名前端新人`;
let n = 0;

demo.innerHTML = string[n];

let step = () => {
  setTimeout(() => {
    // 如果你不清楚要 n+1 还是 n 或 n-1 的话，就一个个试
    n = n + 1;
    demo.innerHTML = string.substring(0, n);
    if (n < string.length) {
      step();
    }
  }, 1000);
};

step();
