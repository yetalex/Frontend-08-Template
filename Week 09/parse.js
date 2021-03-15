/**
 * 只实现简单选择器：
 *   #id
 *   .cls
 *   div
 * 未考虑  div.cls#id  这种复合选择器
 * 也为考虑 div #id.cls  这种复杂选择器
 * @param {*} element 
 * @param {*} selector 
 */
function match(element, selector) {
  if (!selector || !element.attributes) return false

  if (selector.charAt(0) === '#') {
    var attr = element.attributes.filter(attr => attr.name === 'id')[0]
    if (attr && attr.value === selector.replace('#', '')) return true
  } else if (selector.charAt(0) === '.') {
    var attr = element.attributes.filter(attr => attr.name === 'class')[0]
    if (attr && attr.value === selector.replace('.', '')) return true
  } else {
    if (element.tagName === selector) {
      return true
    }
  }

  return false
}