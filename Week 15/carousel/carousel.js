import { Component } from './framework.js'

export class Carousel extends Component {
  constructor() {
    super()
    this.attributes = Object.create(null) // 存储属性
  }
  // 重写setAttribute
  setAttribute(name, value) {
    this.attributes[name] = value
  }
  render() {
    this.root = document.createElement('div')
    this.root.classList.add('carousel')
    for (let record of this.attributes.src) {
      let child = document.createElement('div')
      child.style.backgroundImage = `url(${record})`
      this.root.appendChild(child)
    }

    let position = 0

    this.root.addEventListener('mousedown', event => {
      let children = this.root.children
      let startX = event.clientX

      let move = event => {
        let x = event.clientX - startX

        let current = position - (x - x % 500) / 500

        for (let offset of [-1, 0, 1]) {
          let pos = current + offset
          pos = (pos + children.length) % children.length // 使得位置始终为正

          children[pos].style.transition = 'none'
          children[pos].style.transform = `translateX(${-pos * 500 + offset * 500 + x % 500}px)`
        }
      }

      let up = event => {
        let x = event.clientX - startX
        position -= Math.round(x / 500)
        for (let offset of [0, - Math.sign(Math.round(x / 500) - x + 250 * Math.sign(x))]) {
          let pos = position + offset
          pos = (pos + children.length) % children.length // 使得位置始终为正

          children[pos].style.transition = ''
          children[pos].style.transform = `translateX(${-pos * 500 + offset * 500}px)`
        }

        // TODO: 当图片拉到正中间250px的时候，两张图片就停止在那里不动了

        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    })

    /*
    // 考虑当前的图和下一站图是什么就可以模拟出一直下一张的效果
    let currentIndex = 0  
    setInterval(() => {
      let children = this.root.children
      let nextIndex = (currentIndex + 1) % children.length

      let current = children[currentIndex]
      let next = children[nextIndex]

      next.style.transition = 'none'
      next.style.transform = `translateX(${100 - nextIndex * 100}%)`

      setTimeout(() => {
        next.style.transition = ''
        current.style.transform = `translateX(${-100 - currentIndex * 100}%)`
        next.style.transform = `translateX(${- nextIndex * 100}%)`

        currentIndex = nextIndex
      }, 16)  // 16ms为一帧
      // for(let child of children) {
      //   child.style.transform = `translateX(-${current * 100}%)`
      // }
    }, 3000);
    */

    return this.root
  }
  mountTo(parent) {
    parent.appendChild(this.render())
  }
}