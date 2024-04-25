function commonPrefix(arr) {
  if (!arr || !arr.length || arr.length > 10) {
    throw 'Array is empty or greater than 10'
  }

  const prefixCalc = (str) => {
    if (
      !str.length ||
      !/^[a-z]+$/.test(str) ||
      str.length > Math.pow(10, 5)
    ) {
      throw 'Invalid string in array'
    }

    let result = str.length

    for (let i = 1; i < str.length; i++) {
      let shadowI = i
      for (let j = 0; j < str.length; j++) {
        if (j > shadowI) {
          break
        }

        if (str[shadowI] === str[j]) {
          result++
          shadowI++
        } else {
          break
        }
      }
    }

    return result
  }

  try {
    return arr.map(str => prefixCalc(str))
  } catch(error) {
    return error
  }
}

console.log(commonPrefix(['abcabcd', 'ababaa', 'aa']))