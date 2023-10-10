import {Tree} from "./Tree"
import {getHeight,prettyHTML, prettyPrint} from "./helperFunctions"




const arr1 = [62, 8, 19, 92, 51, 52, 85, 28, 74, 0]
console.log(arr1)
const tree = new Tree(arr1)
// prettyPrint(tree.root)
// tree.insertNode(9)
// tree.insertNode(999)
// prettyPrint(tree.root)


// main.appendChild(screen)




// tree.deleteNode(tree.root,52)
prettyPrint(tree.root)
console.log(tree.breadthFirstValues())
console.log(`inorder: ${tree.inorder()}`)
console.log(`preorder: ${tree.preorder()}`)
console.log(`postorder: ${tree.postorder()}`)
console.log(`Height: ${getHeight(tree.root)}`)



const main = document.querySelector(".tree")
// const screen = document.createElement('div')

const prettyprint = prettyHTML(tree.root)
main.textContent = prettyprint