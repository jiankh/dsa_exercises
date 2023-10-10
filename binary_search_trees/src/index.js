const main = document.querySelector("body")
const screen = document.createElement('div')


class Node{
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

}

class Tree {
  constructor(arr) {
    const sortedArray = [...new Set(arr)].sort((a, b) => a - b); //removes duplicates and sorts it
    this.root = this.buildTree(sortedArray);
  }

  buildTree(sortedArray) {
    //takes arr and build a balanced tree full of nodes

    if (sortedArray.length === 0) {
      return null;
    } //check if there is even data
    const middleIndex = Math.floor(sortedArray.length / 2);
    const leftSideArr = sortedArray.slice(0, middleIndex);
    const rightSideArr = sortedArray.slice(middleIndex + 1);

    const root = new Node(sortedArray[middleIndex]);
    root.left = this.buildTree(leftSideArr);
    root.right = this.buildTree(rightSideArr);

    return root;
  }

  insertNode(data) {
    let node = new Node(data);

    if (this.root == null) {
      this.root = node;
      return;
    } else {
      let prev = null;
      let temp = this.root;

      while (temp !== null) {
        prev = temp;
        if (data < temp.data) {
          temp = temp.left;
        } else if (data > temp.data) {
          temp = temp.right;
        } else {
          // Duplicate value, skip insertion
          return;
        }
      }

      // Now that we've found the correct position, insert the new node.
      if (data < prev.data) {
        prev.left = node;
      } else {
        prev.right = node;
      }
    }
  }
}

const randomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
  }

const depthFirstValues = (root) => {
    if (root === null)
      return [];
    
    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);
    return [ root.data, ...leftValues, ...rightValues ];
} 

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };


//     // A recursive function to insert a new key in BST
//     function insertRec(root, key) {

//     // If the tree is empty, return a new node
//     if (root == null) {
//         root = new Node(key);
//         return root;
//     }

//     // Otherwise, recur down the tree
//     if (key < root.key)
//         root.left = insertRec(root.left, key);
//     else if (key > root.key)
//         root.right = insertRec(root.right, key);

//     // Return the (unchanged) node pointer
//     return root;
// }


const arr1 = [62, 8, 19, 92, 51, 52, 85, 28, 74, 0]
console.log(arr1)
const tree = new Tree(arr1)
prettyPrint(tree.root)
tree.insertNode(9)
screen.innerHTML = prettyPrint(tree.root)
main.appendChild(screen)
