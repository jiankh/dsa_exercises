import {getHeight, renderTree, randomArray, formatArray, findNode, refreshBalance} from "./helperFunctions"
import {Tree} from "./Tree"

const arrayInput = document.querySelector("[data-array]")
const insertInput = document.querySelector("[data-insert]")
const deleteInput = document.querySelector("[data-delete]")
const depthInput = document.querySelector("[data-depth]")

const insertBtn = document.querySelector(".insert-btn")
const deleteBtn = document.querySelector(".delete-btn")
const depthBtn = document.querySelector(".height-btn")
const heightResult = document.querySelector(".result-height")

const heightContainer = document.querySelector(".height")
const breadthContainer = document.querySelector(".breadth")
const preorderContainer = document.querySelector(".preorder")
const inorderContainer = document.querySelector(".inorder")
const postorderContainer = document.querySelector(".postorder")
const balanceContainer = document.querySelector(".balance")


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
  refreshBalance(tree)
})

//Delete Node 
deleteBtn.addEventListener('click', (e) => {
  e.preventDefault()
  tree.deleteNode(tree.root, deleteInput.value)
  deleteInput.value = ""
  renderTree(tree)
  refreshBalance(tree)
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
heightContainer.textContent = `Tree Height: ${getHeight(tree.root)}`
breadthContainer.textContent = `Level Order: ${tree.breadthFirstValues()}`
preorderContainer.textContent = `Pre-Order: ${tree.preorder()}`
inorderContainer.textContent = `In-Order: ${tree.inorder()}`
postorderContainer.textContent = `Post-Order: ${tree.postorder()}`
balanceContainer.textContent = `Tree is balanced: ${tree.isBalanced()}`



