# 学习笔记

## JS表达式 | 运算符与表达式

new Foo()  Member优先级

new Foo - new 表达式，优先级更低

## 类型转换

### Unboxing

``` javascript
var o = {
  toString() {},
  valueOf(){},
  [Symbol.toPremitive](){return 3}
}
```

### boxing

- new Number(1)
- new String('a')
- new Boolean(true)
- new Object(Symbol('a'))

## 简单语句和复合语句

### 简单语句

- ExpressionStatement
- EmptyStatement
- DebuggerStatement

- ThrowStatement
- ContinueStatement
- BreakStatement
- ReturnStatement

### 复合语句

- BlockStatement
- IfStatement
- SwitchStatement  不建议使用
- IterationStatement 循环语句
- WithStatement  一般不实用with 
- LabelledStatement
- TryStatement

## JS结构化（宏任务和微任务）

- 宏任务: jsc运行的一段代码
- 微任务：Promise产生

## JS结构化 （JS函数调用）

- JSContext 执行上下文
- Realm  每个执行环境都会有一个Realm用来存储内置对象

### JavaScript引擎中的内置对象

根据mozilla.org中的参考，[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects]

- Value properties
- Function properties
- Fundamental objects
- Error objects
- Numbers and dates
- Text processing
- Indexed collections
- Keyed collections
- Structrued data
- Control abstraction objects
- Refection
- Internationalization
- WebAssembly
- Other
  - arguments
