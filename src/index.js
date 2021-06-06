import _ from 'lodash'
import Cat from './utilities'

console.log(Cat.say())

function component() {
  const element = document.createElement('div')
  const array = ['Hello', 'webpack', '!!']
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component())