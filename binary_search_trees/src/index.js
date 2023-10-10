import {getHeight, renderTree, randomArray, formatArray} from "./helperFunctions"



const arrayInput = document.querySelector("[data-array]")
const insertInput = document.querySelector("[data-insert]")
const deleteInput = document.querySelector("[data-delete]")
const depthInput = document.querySelector("[data-depth]")

const insertBtn = document.querySelector(".insert-btn")
const deleteBtn = document.querySelector(".delete-btn")
const depthBtn = document.querySelector(".height-btn")

//initialize random array
let arr = randomArray()
renderTree(arr)

//Array Input
arrayInput.addEventListener('change', (e) => {
  arr = formatArray(arrayInput.value)
  renderTree(arr)
})

//Insert Node
insertBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log("insert")

})


