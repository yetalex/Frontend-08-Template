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
