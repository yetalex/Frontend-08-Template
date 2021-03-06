// 7. 状态机|使用状态机处理字符串（二）
// 处理 'abababx' 这样的pattern
function match(str) {
  let state = start
  for (let c of str) {
    state = state(c)
  }
  return state === end
}

function start(c) {
  if (c === 'a') return foundA
  else return start
}

function foundA(c) {
  if (c === 'b') return foundB
  else return start(c)
}

function foundB(c) {
  if (c === 'a') return foundA1
  else return start(c)
}

function foundA1(c) {
  if (c === 'b') return foundB1
  else return start(c)
}

function foundB1(c) {
  if (c === 'a') return foundA2
  else return start(c)
}

function foundA2(c) {
  if (c === 'b') return foundB2
  else return start(c)
}

function foundB2(c) {
  if (c === 'x') return end
  else return foundB1(c)
}


function end() {
  return end
}

console.log(match('cabababxds'))