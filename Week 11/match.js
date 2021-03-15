
/**
 * 编写一个 match 函数。它接收两个参数，第一个参数是一个选择器字符串性质，第二个是一个 HTML 元素。这个元素你可以认为它一定会在一棵 DOM 树里面。通过选择器和 DOM 元素来判断，当前的元素是否能够匹配到我们的选择器。（不能使用任何内置的浏览器的函数，仅通过 DOM 的 parent 和 children 这些 API，来判断一个元素是否能够跟一个选择器相匹配。）
 * 
 * NOTE: 不考虑  伪类/伪元素, ||连接符， [attr=value] 不考虑其他情况
 * 
 * @param {*} selector 
 * @param {*} element 
 * @returns 
 */
function match(selector, element) {
  if (!selector || !element.attributes) return false

  // 1. > 分割，从右到左匹配
  {
    const rules = selector.split('')
  }
  // 2. 空格分割，从右到左匹配
  {
    const rules = selector.split(' ')
  }
  
  // 3.在空格和> 分隔符匹配项里再匹配一下 「~ +」 兄弟分隔符
  return true
}

/**
 * 处理复合选择器
 * @param {*} rule 
 */
function matchCombinedRule(rule) {
  const re1 = /^[A-Za-z]*/g,                       // 匹配元素
  re2 = /#[A-Za-z0-9$_-]+/g,                       // 匹配id
  re3 = /\.[A-Za-z0-9$_-]+/g,                      // 匹配class
  re4 = /\[([A-Za-z0-9_-]+)=([A-Za-z0-9_-]+)\]/g   // 匹配属性
}

match('div #id.class', document.getElementById('id'))