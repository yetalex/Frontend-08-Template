function createElement(type, attributes, ...children) {
  let element = document.createElement(type)
  for(let name in attributes) {
    element.setAttribute(name, attributes[name])
  }
  for(let child of children) {
    if (typeof child === 'string') {
      child = document.createTextNode(child)
    }
    element.appendChild(child)
  }
  return element
}

let a = <div id="a">
  <span>a</span>
  <span>b</span>
  <span>c</span>
</div>
document.body.appendChild(a)

// 文本节点
let b = <div id="b">Hello World!</div>
document.body.appendChild(b)