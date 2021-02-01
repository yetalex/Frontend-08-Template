# 学习笔记

## 泛用语言分类方法

***乔姆斯基谱系***

- 0-型文法（无限制文法或短语结构文法）
- 1-型文法 （上下文相关文法）
- 2-型文法 （上下文无关文法）
- 3-型文法（正规文法）生成正则语言

### BNF范式

巴科斯范式是一种用于表示上下文无关文法的语言

- 终结符：是一个形式语言的基本符号，不能被分解为更小的单位
- 非终结符：是可以被取代的符号。在上下文无关文法中，每个推导规则的左边只能有一个非终结符而不能有两个以上的非终结符

#### BNF范式的语法

符号 ::= <使用符号的表达式>

``` text
< >     : 内包含的为必选项。
[ ]     : 内包含的为可选项。
{ }     : 内包含的为可重复0至无数次的项。
|       : 表示在其左右两边任选一项，相当于"OR"的意思。
::=     : 是“被定义为”的意思
"..."   : 术语符号
[...]   : 选项，最多出现一次
{...}   : 重复项，任意次数，包括 0 次
(...)   : 分组
|       : 并列选项，只能选一个
```

## 现代语言的分类

大部分编程语言主体都是上下文无关文法；
现代语言一般都有特列，并没有完全按照乔姆斯基谱系去分。

### 形式语言-用途分类

- 数据描述语言 JSON, HTML
- 编程语言  Java

### 形式语言-表达方式

- 声明式语言：只告诉你结果是怎么样的  Haskell, JSON
- 命令式语言：会告诉你一步步怎么到达结果  C, C++, Java Python VB

## 编程语言的性质

- 图灵完备性
- 静态语言：  本机编译运行
- 动态语言：  客户环境运行
- 强类型语言：无隐式类型转换
- 弱类型语言：有隐式类型转换

## JS Number

## JS String

## Object in JavaScript

Object的属性可以使用 Symbol和String作为Key。
  属性分为 Data Property 和 Accessor Property，即数据属性和访问器属性

- 数据属性：用于描述状态，但是如果存储的是函数，也可以描述行为
  [[value]]  writable  enumerable  configurable
- 访问器属性：用于描述行为
  get  set  enumerable  configurable

### Object API/Grammar

- {} . []  Object.defineProperty  基础方式
- Object.create / Object.setPrototypeOf / Object.getPrototypeOf 基于原型的对象API
- new / class / extends  基于分类的方式描述对象
- new / function / prototype  历史包袱 （不推荐使用）

### Fucntion Object

Object [[call]]  双中括号表示内置行为，函数对象包含一个call行为

### Special Object

- Array [[length]]
- Object.prototype [[setPrototypeOf]]

### Host Object

Object [[call]] [[construct]]  宿主相关的对象
