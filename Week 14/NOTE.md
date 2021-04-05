学习笔记

* 组件化  主要目标就是复用，能有效提升团队开发效率和质量，提高代码复用率
* 架构模式 (MVC)

## 对象与组件

组件是与UI强相关的，即是对象又是模块

对象
  Properties
  Methods
  Inherit

组件
  Properties
  Methods
  Inherit
  Attribute
  Config & State (配置和状态)
  Event (组件往外传递数据)
  Lifecycle
  Children ** （形成树形结构的必要条件）

用户输入影响             State
程序员 Markup Code 修改  attribute
程序员 JS Code 修改  Method Property
                   Event(由开发组件的程序员向使用组件的程序员传递数据)

* Attribute 强调描述性
* Property 强调从属关系

Children: Content型Children和Template型Children
