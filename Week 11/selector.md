## 选择器语法

* 简单选择器
  *
  div svg|a
  .cls
  #id
  [attr=value]
  :hover
  ::before

* 复合选择器
  * <简单选择器><简单选择器><简单选择器>
  * *或者div必须写在最前面，伪类或者伪元素在最后面
* 复杂选择器
  复合选择器与复合选择器之间用特殊字符链接：
    <sp>  空格
    >
    ~
    +
    ||  CSS Level4才有，表示表格中选中某一个列

## 选择器优先级

  优先级定义
  [行内样式, id, cls|伪类|属性选择器, 标签选择器|伪元素选择器]

  优先级计算方式
  s = 0*N^3 + 0*N^2 + 0*N^1 + 0*N^0
  NOTE: 这里的N一般使用256*256两个字节大小表示足够大的进制  N:65536

## 伪类

* 链接/行为
  :any-link
  :link :visited
  :hover
  :active
  :focus
  :target  a链接中锚链接使用
* 树结构
  :empty
  :nth-child()
  :nth-last-child()
  :first-child :last-child :only-child
* 逻辑型
  :not 伪类
  :where :has

## 伪元素

  ::before
  ::after
  ::first-line
  ::first-letter

* ::first-line元素可用属性
  font系列
  color系列
  background系列
  word-spacing
  letter-spacing
  text-decoration
  text-transform
  line-height
* ::first-letter元素可用属性
  font系列
  color系列
  background系列
  text-decoration
  text-transform
  letter-spacing
  word-spacing
  line-height
  float
  vertical-align
  盒模型系列: margin, padding, border

