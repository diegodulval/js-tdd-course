const msg = 'algoritmo para contagem do numero de caracter em uma msg'
const arrayMsg = msg.split('').filter(e => e !== ' ')

const resultMsg = arrayMsg.map((symbol) => {
  let number = 0
  arrayMsg.forEach((s) => { (s === symbol) && (number += 1) })
  return {
    symbol,
    qtd: number,
  }
})

const resulOrder = resultMsg.filter(x => x.qtd > 0).sort((a, b) => b.qtd - a.qtd)

const uniq = (a, param) => (
  a.filter((item, pos, array) => (
    array.map(mapItem => mapItem[param]).indexOf(item[param]) === pos),
  )
)

const result = uniq(resulOrder, 'symbol')
console.log(result)
