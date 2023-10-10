import {getHeight, renderTree, randomArray} from "./helperFunctions"



const arrayInput = document.querySelector("[data-array]")
const insertInput = document.querySelector("[data-insert]")
const deleteInput = document.querySelector("[data-delete]")
const depthInput = document.querySelector("[data-depth]")

//initialize random array
let arr = randomArray()
renderTree(arr)

arrayInput.addEventListener('change', (e) => {
  arr = formatArray(arrayInput.value)
  renderTree(arr)
})

function formatArray(arr) {
  const separator = /[,\s]+/
  return arr.split(separator)
}
