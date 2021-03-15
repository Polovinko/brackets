module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 === 1){
    return false
  }
  let stack = []
  let char
  for(let i = 0; i < str.length; i++){
    char = stack[stack.length - 1]
    for(let brackets of bracketsConfig){
      if(brackets[0] !== brackets[1]){
        if(str[i] === brackets[0]){
          stack.push(str[i])
        }
        else if(str[i] === brackets[1] && char === brackets[0]){
          stack.pop()
        }
      }
      else if(brackets[0] === brackets[1]){
        if(str[i] === brackets[0]){
          if(!stack.length || char !== brackets[0]){
            stack.push(str[i])
          }
          else if(char === brackets[0]){
            stack.pop()
          }
        }
      }
    }
  }
  return stack.length ? false : true
}
