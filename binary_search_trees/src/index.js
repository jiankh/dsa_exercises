import {getHeight, renderTree, randomArray, formatArray, findNode} from "./helperFunctions"
import {Tree} from "./Tree"

const arrayInput = document.querySelector("[data-array]")
const insertInput = document.querySelector("[data-insert]")
const deleteInput = document.querySelector("[data-delete]")
const depthInput = document.querySelector("[data-depth]")

const insertBtn = document.querySelector(".insert-btn")
const deleteBtn = document.querySelector(".delete-btn")
const depthBtn = document.querySelector(".height-btn")
const heightResult = document.querySelector(".result-height")

const


//initialize random array
let arr = randomArray()
let tree = new Tree(arr)
renderTree(tree)

//Array Input
arrayInput.addEventListener('change', (e) => {
  arr = formatArray(arrayInput.value)
  tree = new Tree(arr)
  renderTree(tree)
})

//Insert Node
insertBtn.addEventListener('click', (e) => {
  e.preventDefault()
  tree.insertNode(insertInput.value)
  insertInput.value = ""
  renderTree(tree)
})

//Delete Node 
deleteBtn.addEventListener('click', (e) => {
  e.preventDefault()
  tree.deleteNode(tree.root, deleteInput.value)
  deleteInput.value = ""
  renderTree(tree)
})

//Find Depth
depthBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const data = depthInput.value
  const node = findNode(tree.root, data)

  if (node !== null) {
    const height = getHeight(node)
    depthInput.value = ''
    heightResult.textContent = `Node Height: ${height}`
} else {
    heightResult.textContent = "Node not found"
}
})

//Information Display




