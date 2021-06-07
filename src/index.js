import _ from 'lodash'
import './style.css'
import icon from './icon.png'

function component() {
  const element = document.createElement('div')
  const array = ['Hello', 'webpack', '!!']
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component())
document.body.classList.add('haikei')

const image = new Image()
image.src = icon
document.body.appendChild(image)