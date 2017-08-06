const _ = require('lodash')

const msg = 'Função para contagem da quantidade de vezes que um caracter aparece em uma msg'

function setCountSymbol(txt) {
  return _(txt)
    .chain([...txt])
    .filter(e => e !== ' ')
    .countBy()
    .thru(l => _.zip(_.keys(l), _.values(l)))
    .sort((a, b) => (a[1] > b[1] ? -1 : 1))
    .map(a => ({ symbol: a[0], quantity: a[1] }))
    .value()
}

const resul = setCountSymbol(msg)
console.log(resul)
