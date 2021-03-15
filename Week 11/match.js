
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
    const rules = selector.split('>')
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
 * 处理逻辑：
 *   1. 先解析rule
 *   2. 元素和解析好的结果进行匹配，有一个匹配不上就false了
 * @param {*} rule 
 */
function matchCombinedRule(rule, el) {
  const re1 = /#[A-Za-z0-9$_-]+/g,                    // 解析id
    re2 = /\.[A-Za-z0-9$_-]+/g,                       // 解析class
    re3 = /\[([A-Za-z0-9_-]+)=([A-Za-z0-9_-]+)\]/g,   // 解析属性
    re4 = /^[A-Za-z]+/g                               // 解析元素


  const result1 = rule.match(re1),
      result2 = rule.match(re2),
      result4 = rule.match(re4)

  if (result1) {
    // rule存在id
    if (result1[0].replace('#', '') !== el.getAttribute('id')) return false
  }

  if (result2) {
    // rule存在class，有一个class没有，就算不匹配
    for(let i=0; i < result2.length; i++) {
      if (el.getAttribute('class').indexOf(result2[i].replace('.', '')) === -1) return false
    }
  }

  // rule存在属性选择器 [attr=value]
  let array
  while((array = re3.exec(rule)) !== null) {
    if(el.getAttribute(array[1]) !== array[1]) return false
  }


  return true
}

match('div #id.class', document.getElementById('id'))