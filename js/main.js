const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

const attrsToString = (obj = {}) => {
const keys = Object.keys(obj)
const attrs = []

  for(let i=0;i<keys.length; i++){
    let attr = keys[i]
    attrs.push(`${attr}='${obj[attr]}'`)
  }
  const string = attrs.join('')
  return string
}
const tagAttrs = obj => (content = '') => `<${obj.tag}${obj.attrs ? ' ' :''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`
const tag = t => {
  if(typeof t === 'string'){
    tagAttrs({tag: t})
  }else{
    tagAttrs(t)
  }
}

const tableRowTag = tag('tr')
// const tableRow = items => tableRowTag(tableCells(items))
const tableRow = items => compose(tableRowTag,tableCells)(items)

const tableCell = tag('td')
const tableCells = items => item.map(tableCell).join('')

// console.log(tag('h1')('Title'))

let description = $('#description')
let carbs = $('#carbs')
let calories = $('#calories')
let protein = $('#protein')

let list = []

// Object.assign({},"Objeto_a_copiar")  
// Esto es para copiar un objeto, 
// no la referencia sino el valor del objeto aunq solo sirve para un objeto de primer nivel
 
//JSON.parse() y JSON.stringify()  
// Esto funciona de la siguiente forma
//JSON.parse(JSON.stringify("OBJETO_A_COPIAR"))
//Ej. let new Car = JSON.parse(JSON.stringify(car))

description.keypress(()=>{
  description.removeClass('is-invalid')
})
calories.keypress(()=>{
  calories.removeClass('is-invalid')
})
carbs.keypress(()=>{
  carbs.removeClass('is-invalid')
})
protein.keypress(()=>{
  protein.removeClass('is-invalid')
})

const validateInputs = () =>{

  description.val() ? '' : description.addClass('is-invalid')
  calories.val() ? '' : calories.addClass('is-invalid')
  carbs.val() ? '' : carbs.addClass('is-invalid')
  protein.val() ? '' : protein.addClass('is-invalid')

  if(
    description.val() &&
    calories.val() && 
    carbs.val() && 
    protein.val()
    ) add()
}

const add = () =>{
  const newItem = {
    description: description.val(),
    calories: parseInt(calories.val()),
    carbs: parseInt(carbs.val()),
    protein: parseInt(protein.val())
  }

  list.push(newItem)
  cleanInputs()
  updateTotals()

  console.log(list)
}

const updateTotals = () => {
  let calories = 0, carbs = 0, protein=0
  list.map(item => {
    calories += item.calories,
    carbs += item.carbs,
    protein += item.protein
  }) 

  $('#totalCalories').text(calories)
  $('#totalCarbs').text(carbs)
  $('#totalProtein').text(protein)


}

const cleanInputs = () => {
  description.val(''),
  calories.val(''),
  carbs.val(''),
  protein.val('')
}

