# 学习笔记

课程中需要理解的两个地方：
  1. regexp.exec(str)
    返回 str中的regexp匹配项，属性.lastIndex表示紧跟上一次匹配项之后的值

  2. BNF范式的了解对于理解这星期的代码会比较有帮助

  BNF(Backus-Naur Form)是描述编程语言的文法，巴科斯范式。
    * BNF规定是推导规则（产生式）的集合，写为：
      符号 ::= <使用符号的表达式>
      符号表示非终结符

    * BNF范式语法：
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