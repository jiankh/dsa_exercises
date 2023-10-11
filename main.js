/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node{
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

}



/***/ }),

/***/ "./src/Tree.js":
/*!*********************!*\
  !*** ./src/Tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tree: () => (/* binding */ Tree)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/Node.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");



class Tree {
    constructor(arr) {
      const sortedArray = [...new Set(arr)].sort((a, b) => a - b); //removes duplicates and sorts it
      this.root = this.buildTree(sortedArray); //as soon as an obj is made w/ class Tree, will trigger buildTree()
    }
  
    buildTree(sortedArray) {
      //takes arr and build a balanced tree full of nodes
  
      if (sortedArray.length === 0) {
        return null;
      } //check if there is even data
      const middleIndex = Math.floor(sortedArray.length / 2);
      const leftSideArr = sortedArray.slice(0, middleIndex);
      const rightSideArr = sortedArray.slice(middleIndex + 1);
  
      const root = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(sortedArray[middleIndex]);
      root.left = this.buildTree(leftSideArr);
      root.right = this.buildTree(rightSideArr);
  
      return root;
    }
  
    insertNode(data) {
      let node = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(data);
  
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
  
    findMinValueNode(node) {
      let current = node;
      while (current.left !== null) {
          current = current.left;
      }
      return current;
    }
  
    deleteNode(root, k) {
      // Base case, no root so no tree so nothing to delete
      if (root === null) {
        return root;
      }
     
      // Recursive calls for ancestors, go thur the tree to find where data = k
      if (root.data > k) {
        root.left = this.deleteNode(root.left, k);
        return root; //if it reaches null from line above then is not in this branch and return the original root
      } else if (root.data < k) {
        root.right = this.deleteNode(root.right, k);
        return root;
      }
     
      // We reach here when root is the node
      // to be deleted. When the call gets here it means root.data = k
     
      // If one of the children is empty
      if (root.left === null) {
        return root.right //this will set the left/right of the node above level to this(Deleting the current node)(check the recursive call above this)
      } else if (root.right === null) {
        return root.left
      }
     
      // If both children exist
      // Node with two children, find the inorder successor (smallest in the right subtree)
      let minValueNode = this.findMinValueNode(root.right);
  
      // Copy the inorder successor's content to this node
      root.data = minValueNode.data;
  
      // Delete the inorder successor
      root.right = this.deleteNode(root.right, minValueNode.data);
  
      return root;
     
    
    }
  
    breadthFirstValues() {
      const root = this.root
      if (root === null) return [] //if no root then no tree then just return empty array
  
      const values = [] //initialize a array to store final values
      const queue =[root] //breadthfirst uses a queue system
  
      while (queue.length > 0) {
        const current = queue.shift() //shift takes the first index and returns it
        values.push(current.data)
  
        //we push the subtrees of the current node into the queue
        if (current.left !== null) {queue.push(current.left)}
        if (current.right !== null) {queue.push(current.right)}
      }
      return values
    }
  
    preorder(root=this.root) {
      if (root === null)
      return [];
    
      const leftValues = this.preorder(root.left);
      const rightValues = this.preorder(root.right);
      return [ root.data, ...leftValues, ...rightValues ];
    }
  
    inorder(root=this.root) {
      if (root === null)
      return [];
    
      const leftValues = this.inorder(root.left);
      const rightValues = this.inorder(root.right);
      return [ ...leftValues, root.data,  ...rightValues ];
    }
  
    postorder(root=this.root) {
      if (root === null)
      return [];
    
      const leftValues = this.postorder(root.left);
      const rightValues = this.postorder(root.right);
      return [ ...leftValues,  ...rightValues, root.data];
    }

    isBalanced(root=this.root) {
      return Math.abs((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.getHeight)(root.left) - (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.getHeight)(root.right)) < 2
    }

    reBalance() {
      const treeArray = this.breadthFirstValues()
      const sortedArray = [...new Set(treeArray)].sort((a, b) => a - b)
      return new Tree(sortedArray)
    }

  }
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




/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findNode: () => (/* binding */ findNode),
/* harmony export */   formatArray: () => (/* binding */ formatArray),
/* harmony export */   getHeight: () => (/* binding */ getHeight),
/* harmony export */   prettyHTML: () => (/* binding */ prettyHTML),
/* harmony export */   prettyPrint: () => (/* binding */ prettyPrint),
/* harmony export */   randomArray: () => (/* binding */ randomArray),
/* harmony export */   refreshBalance: () => (/* binding */ refreshBalance),
/* harmony export */   renderTree: () => (/* binding */ renderTree)
/* harmony export */ });

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

const prettyHTML = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return "";
    }
    let result = "";
    if (node.right !== null) {
        result += prettyHTML(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    result += `${prefix}${isLeft ? "└── " : "┌── "}${node.data}\n`;
    if (node.left !== null) {
        result += prettyHTML(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
    return result;
};

function getHeight(node) {
    if (node === null) {
        return 0;
    } else {
        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

function randomArray() {
    return Array.from({length: 10}, () => Math.floor(Math.random() * 100))
}

function renderTree(tree) {
    const treeContainer = document.querySelector(".tree") 
    const prettyprint = prettyHTML(tree.root)
    treeContainer.textContent = prettyprint
}

function formatArray(arr) {
    const separator = /[,\s]+/
    return arr.split(separator)
}

function findNode(root,key) {
    const data = parseInt(key)
  
    if (root === null) {return null}
    if (root.data === data) {
      return root
    }
  
    const leftResult = findNode(root.left, data)
    const rightResult = findNode(root.right, data)
  
    if (leftResult) {
      return leftResult 
    }
    if (rightResult) {
      return rightResult
    }
    return null
}

function refreshBalance(tree) {
  const balanceContainer = document.querySelector(".balance")
  balanceContainer.textContent = `Tree is balanced: ${tree.isBalanced()}`
}

  



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tree */ "./src/Tree.js");



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
const reBalanceBtn = document.querySelector(".balance-btn")


//initialize random array
let arr = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.randomArray)()
let tree = new _Tree__WEBPACK_IMPORTED_MODULE_1__.Tree(arr)
;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.renderTree)(tree)

//Array Input
arrayInput.addEventListener('change', (e) => {
  arr = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.formatArray)(arrayInput.value)
  tree = new _Tree__WEBPACK_IMPORTED_MODULE_1__.Tree(arr)
  ;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.renderTree)(tree)
})

//Insert Node
insertBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (insertInput.value) {
    tree.insertNode(insertInput.value)
    insertInput.value = ""
    ;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.renderTree)(tree)
    ;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.refreshBalance)(tree)
  } else {return}
  
})

//Delete Node 
deleteBtn.addEventListener('click', (e) => {
  e.preventDefault()
  tree.deleteNode(tree.root, deleteInput.value)
  deleteInput.value = ""
  ;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.renderTree)(tree)
  ;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.refreshBalance)(tree)
})

//Find Depth
depthBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const data = depthInput.value
  const node = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.findNode)(tree.root, data)

  if (node !== null) {
    const height = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.getHeight)(node)
    depthInput.value = ''
    heightResult.textContent = `Node Height: ${height}`
} else {
    heightResult.textContent = "Node not found"
}
})

//Re-balance tree
reBalanceBtn.addEventListener("click", (e) => {
  e.preventDefault()
  tree = tree.reBalance() //reblance returns the new tree and we set it to our old var tree.
  ;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.renderTree)(tree)
})


//Information Display
heightContainer.textContent = `Tree Height: ${(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.getHeight)(tree.root)}`
breadthContainer.textContent = `Level Order: ${tree.breadthFirstValues()}`
preorderContainer.textContent = `Pre-Order: ${tree.preorder()}`
inorderContainer.textContent = `In-Order: ${tree.inorder()}`
postorderContainer.textContent = `Post-Order: ${tree.postorder()}`
balanceContainer.textContent = `Tree is balanced: ${tree.isBalanced()}`




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QThDLGdCQUFnQjtBQUM5RCw0Q0FBNEMsZUFBZTtBQUMzRCxnREFBZ0QsaUJBQWlCO0FBQ2pFLG9EQUFvRCxrQkFBa0I7QUFDdEU7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veS8uL3NyYy9Ob2RlLmpzIiwid2VicGFjazovL3kvLi9zcmMvVHJlZS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly95L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8veS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2Rle1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcclxuICAgICAgICB0aGlzLmxlZnQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5yaWdodCA9IG51bGxcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7Tm9kZX0iLCJpbXBvcnQge05vZGV9IGZyb20gXCIuL05vZGVcIlxyXG5pbXBvcnQgeyBnZXRIZWlnaHQgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuXHJcbmNsYXNzIFRyZWUge1xyXG4gICAgY29uc3RydWN0b3IoYXJyKSB7XHJcbiAgICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gWy4uLm5ldyBTZXQoYXJyKV0uc29ydCgoYSwgYikgPT4gYSAtIGIpOyAvL3JlbW92ZXMgZHVwbGljYXRlcyBhbmQgc29ydHMgaXRcclxuICAgICAgdGhpcy5yb290ID0gdGhpcy5idWlsZFRyZWUoc29ydGVkQXJyYXkpOyAvL2FzIHNvb24gYXMgYW4gb2JqIGlzIG1hZGUgdy8gY2xhc3MgVHJlZSwgd2lsbCB0cmlnZ2VyIGJ1aWxkVHJlZSgpXHJcbiAgICB9XHJcbiAgXHJcbiAgICBidWlsZFRyZWUoc29ydGVkQXJyYXkpIHtcclxuICAgICAgLy90YWtlcyBhcnIgYW5kIGJ1aWxkIGEgYmFsYW5jZWQgdHJlZSBmdWxsIG9mIG5vZGVzXHJcbiAgXHJcbiAgICAgIGlmIChzb3J0ZWRBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSAvL2NoZWNrIGlmIHRoZXJlIGlzIGV2ZW4gZGF0YVxyXG4gICAgICBjb25zdCBtaWRkbGVJbmRleCA9IE1hdGguZmxvb3Ioc29ydGVkQXJyYXkubGVuZ3RoIC8gMik7XHJcbiAgICAgIGNvbnN0IGxlZnRTaWRlQXJyID0gc29ydGVkQXJyYXkuc2xpY2UoMCwgbWlkZGxlSW5kZXgpO1xyXG4gICAgICBjb25zdCByaWdodFNpZGVBcnIgPSBzb3J0ZWRBcnJheS5zbGljZShtaWRkbGVJbmRleCArIDEpO1xyXG4gIFxyXG4gICAgICBjb25zdCByb290ID0gbmV3IE5vZGUoc29ydGVkQXJyYXlbbWlkZGxlSW5kZXhdKTtcclxuICAgICAgcm9vdC5sZWZ0ID0gdGhpcy5idWlsZFRyZWUobGVmdFNpZGVBcnIpO1xyXG4gICAgICByb290LnJpZ2h0ID0gdGhpcy5idWlsZFRyZWUocmlnaHRTaWRlQXJyKTtcclxuICBcclxuICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbnNlcnROb2RlKGRhdGEpIHtcclxuICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZShkYXRhKTtcclxuICBcclxuICAgICAgaWYgKHRoaXMucm9vdCA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gbm9kZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHByZXYgPSBudWxsO1xyXG4gICAgICAgIGxldCB0ZW1wID0gdGhpcy5yb290O1xyXG4gIFxyXG4gICAgICAgIHdoaWxlICh0ZW1wICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBwcmV2ID0gdGVtcDtcclxuICAgICAgICAgIGlmIChkYXRhIDwgdGVtcC5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wLmxlZnQ7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPiB0ZW1wLmRhdGEpIHtcclxuICAgICAgICAgICAgdGVtcCA9IHRlbXAucmlnaHQ7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBEdXBsaWNhdGUgdmFsdWUsIHNraXAgaW5zZXJ0aW9uXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLy8gTm93IHRoYXQgd2UndmUgZm91bmQgdGhlIGNvcnJlY3QgcG9zaXRpb24sIGluc2VydCB0aGUgbmV3IG5vZGUuXHJcbiAgICAgICAgaWYgKGRhdGEgPCBwcmV2LmRhdGEpIHtcclxuICAgICAgICAgIHByZXYubGVmdCA9IG5vZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByZXYucmlnaHQgPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZmluZE1pblZhbHVlTm9kZShub2RlKSB7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gbm9kZTtcclxuICAgICAgd2hpbGUgKGN1cnJlbnQubGVmdCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubGVmdDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY3VycmVudDtcclxuICAgIH1cclxuICBcclxuICAgIGRlbGV0ZU5vZGUocm9vdCwgaykge1xyXG4gICAgICAvLyBCYXNlIGNhc2UsIG5vIHJvb3Qgc28gbm8gdHJlZSBzbyBub3RoaW5nIHRvIGRlbGV0ZVxyXG4gICAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiByb290O1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIC8vIFJlY3Vyc2l2ZSBjYWxscyBmb3IgYW5jZXN0b3JzLCBnbyB0aHVyIHRoZSB0cmVlIHRvIGZpbmQgd2hlcmUgZGF0YSA9IGtcclxuICAgICAgaWYgKHJvb3QuZGF0YSA+IGspIHtcclxuICAgICAgICByb290LmxlZnQgPSB0aGlzLmRlbGV0ZU5vZGUocm9vdC5sZWZ0LCBrKTtcclxuICAgICAgICByZXR1cm4gcm9vdDsgLy9pZiBpdCByZWFjaGVzIG51bGwgZnJvbSBsaW5lIGFib3ZlIHRoZW4gaXMgbm90IGluIHRoaXMgYnJhbmNoIGFuZCByZXR1cm4gdGhlIG9yaWdpbmFsIHJvb3RcclxuICAgICAgfSBlbHNlIGlmIChyb290LmRhdGEgPCBrKSB7XHJcbiAgICAgICAgcm9vdC5yaWdodCA9IHRoaXMuZGVsZXRlTm9kZShyb290LnJpZ2h0LCBrKTtcclxuICAgICAgICByZXR1cm4gcm9vdDtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAvLyBXZSByZWFjaCBoZXJlIHdoZW4gcm9vdCBpcyB0aGUgbm9kZVxyXG4gICAgICAvLyB0byBiZSBkZWxldGVkLiBXaGVuIHRoZSBjYWxsIGdldHMgaGVyZSBpdCBtZWFucyByb290LmRhdGEgPSBrXHJcbiAgICAgXHJcbiAgICAgIC8vIElmIG9uZSBvZiB0aGUgY2hpbGRyZW4gaXMgZW1wdHlcclxuICAgICAgaWYgKHJvb3QubGVmdCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiByb290LnJpZ2h0IC8vdGhpcyB3aWxsIHNldCB0aGUgbGVmdC9yaWdodCBvZiB0aGUgbm9kZSBhYm92ZSBsZXZlbCB0byB0aGlzKERlbGV0aW5nIHRoZSBjdXJyZW50IG5vZGUpKGNoZWNrIHRoZSByZWN1cnNpdmUgY2FsbCBhYm92ZSB0aGlzKVxyXG4gICAgICB9IGVsc2UgaWYgKHJvb3QucmlnaHQgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcm9vdC5sZWZ0XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgLy8gSWYgYm90aCBjaGlsZHJlbiBleGlzdFxyXG4gICAgICAvLyBOb2RlIHdpdGggdHdvIGNoaWxkcmVuLCBmaW5kIHRoZSBpbm9yZGVyIHN1Y2Nlc3NvciAoc21hbGxlc3QgaW4gdGhlIHJpZ2h0IHN1YnRyZWUpXHJcbiAgICAgIGxldCBtaW5WYWx1ZU5vZGUgPSB0aGlzLmZpbmRNaW5WYWx1ZU5vZGUocm9vdC5yaWdodCk7XHJcbiAgXHJcbiAgICAgIC8vIENvcHkgdGhlIGlub3JkZXIgc3VjY2Vzc29yJ3MgY29udGVudCB0byB0aGlzIG5vZGVcclxuICAgICAgcm9vdC5kYXRhID0gbWluVmFsdWVOb2RlLmRhdGE7XHJcbiAgXHJcbiAgICAgIC8vIERlbGV0ZSB0aGUgaW5vcmRlciBzdWNjZXNzb3JcclxuICAgICAgcm9vdC5yaWdodCA9IHRoaXMuZGVsZXRlTm9kZShyb290LnJpZ2h0LCBtaW5WYWx1ZU5vZGUuZGF0YSk7XHJcbiAgXHJcbiAgICAgIHJldHVybiByb290O1xyXG4gICAgIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBicmVhZHRoRmlyc3RWYWx1ZXMoKSB7XHJcbiAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLnJvb3RcclxuICAgICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBbXSAvL2lmIG5vIHJvb3QgdGhlbiBubyB0cmVlIHRoZW4ganVzdCByZXR1cm4gZW1wdHkgYXJyYXlcclxuICBcclxuICAgICAgY29uc3QgdmFsdWVzID0gW10gLy9pbml0aWFsaXplIGEgYXJyYXkgdG8gc3RvcmUgZmluYWwgdmFsdWVzXHJcbiAgICAgIGNvbnN0IHF1ZXVlID1bcm9vdF0gLy9icmVhZHRoZmlyc3QgdXNlcyBhIHF1ZXVlIHN5c3RlbVxyXG4gIFxyXG4gICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpIC8vc2hpZnQgdGFrZXMgdGhlIGZpcnN0IGluZGV4IGFuZCByZXR1cm5zIGl0XHJcbiAgICAgICAgdmFsdWVzLnB1c2goY3VycmVudC5kYXRhKVxyXG4gIFxyXG4gICAgICAgIC8vd2UgcHVzaCB0aGUgc3VidHJlZXMgb2YgdGhlIGN1cnJlbnQgbm9kZSBpbnRvIHRoZSBxdWV1ZVxyXG4gICAgICAgIGlmIChjdXJyZW50LmxlZnQgIT09IG51bGwpIHtxdWV1ZS5wdXNoKGN1cnJlbnQubGVmdCl9XHJcbiAgICAgICAgaWYgKGN1cnJlbnQucmlnaHQgIT09IG51bGwpIHtxdWV1ZS5wdXNoKGN1cnJlbnQucmlnaHQpfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2YWx1ZXNcclxuICAgIH1cclxuICBcclxuICAgIHByZW9yZGVyKHJvb3Q9dGhpcy5yb290KSB7XHJcbiAgICAgIGlmIChyb290ID09PSBudWxsKVxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICBcclxuICAgICAgY29uc3QgbGVmdFZhbHVlcyA9IHRoaXMucHJlb3JkZXIocm9vdC5sZWZ0KTtcclxuICAgICAgY29uc3QgcmlnaHRWYWx1ZXMgPSB0aGlzLnByZW9yZGVyKHJvb3QucmlnaHQpO1xyXG4gICAgICByZXR1cm4gWyByb290LmRhdGEsIC4uLmxlZnRWYWx1ZXMsIC4uLnJpZ2h0VmFsdWVzIF07XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbm9yZGVyKHJvb3Q9dGhpcy5yb290KSB7XHJcbiAgICAgIGlmIChyb290ID09PSBudWxsKVxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICBcclxuICAgICAgY29uc3QgbGVmdFZhbHVlcyA9IHRoaXMuaW5vcmRlcihyb290LmxlZnQpO1xyXG4gICAgICBjb25zdCByaWdodFZhbHVlcyA9IHRoaXMuaW5vcmRlcihyb290LnJpZ2h0KTtcclxuICAgICAgcmV0dXJuIFsgLi4ubGVmdFZhbHVlcywgcm9vdC5kYXRhLCAgLi4ucmlnaHRWYWx1ZXMgXTtcclxuICAgIH1cclxuICBcclxuICAgIHBvc3RvcmRlcihyb290PXRoaXMucm9vdCkge1xyXG4gICAgICBpZiAocm9vdCA9PT0gbnVsbClcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGxlZnRWYWx1ZXMgPSB0aGlzLnBvc3RvcmRlcihyb290LmxlZnQpO1xyXG4gICAgICBjb25zdCByaWdodFZhbHVlcyA9IHRoaXMucG9zdG9yZGVyKHJvb3QucmlnaHQpO1xyXG4gICAgICByZXR1cm4gWyAuLi5sZWZ0VmFsdWVzLCAgLi4ucmlnaHRWYWx1ZXMsIHJvb3QuZGF0YV07XHJcbiAgICB9XHJcblxyXG4gICAgaXNCYWxhbmNlZChyb290PXRoaXMucm9vdCkge1xyXG4gICAgICByZXR1cm4gTWF0aC5hYnMoZ2V0SGVpZ2h0KHJvb3QubGVmdCkgLSBnZXRIZWlnaHQocm9vdC5yaWdodCkpIDwgMlxyXG4gICAgfVxyXG5cclxuICAgIHJlQmFsYW5jZSgpIHtcclxuICAgICAgY29uc3QgdHJlZUFycmF5ID0gdGhpcy5icmVhZHRoRmlyc3RWYWx1ZXMoKVxyXG4gICAgICBjb25zdCBzb3J0ZWRBcnJheSA9IFsuLi5uZXcgU2V0KHRyZWVBcnJheSldLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxyXG4gICAgICByZXR1cm4gbmV3IFRyZWUoc29ydGVkQXJyYXkpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuLy8gICAgIC8vIEEgcmVjdXJzaXZlIGZ1bmN0aW9uIHRvIGluc2VydCBhIG5ldyBrZXkgaW4gQlNUXHJcbi8vICAgICBmdW5jdGlvbiBpbnNlcnRSZWMocm9vdCwga2V5KSB7XHJcblxyXG4vLyAgICAgLy8gSWYgdGhlIHRyZWUgaXMgZW1wdHksIHJldHVybiBhIG5ldyBub2RlXHJcbi8vICAgICBpZiAocm9vdCA9PSBudWxsKSB7XHJcbi8vICAgICAgICAgcm9vdCA9IG5ldyBOb2RlKGtleSk7XHJcbi8vICAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLy8gT3RoZXJ3aXNlLCByZWN1ciBkb3duIHRoZSB0cmVlXHJcbi8vICAgICBpZiAoa2V5IDwgcm9vdC5rZXkpXHJcbi8vICAgICAgICAgcm9vdC5sZWZ0ID0gaW5zZXJ0UmVjKHJvb3QubGVmdCwga2V5KTtcclxuLy8gICAgIGVsc2UgaWYgKGtleSA+IHJvb3Qua2V5KVxyXG4vLyAgICAgICAgIHJvb3QucmlnaHQgPSBpbnNlcnRSZWMocm9vdC5yaWdodCwga2V5KTtcclxuXHJcbi8vICAgICAvLyBSZXR1cm4gdGhlICh1bmNoYW5nZWQpIG5vZGUgcG9pbnRlclxyXG4vLyAgICAgcmV0dXJuIHJvb3Q7XHJcbi8vIH1cclxuXHJcblxyXG5leHBvcnQge1RyZWV9IiwiXHJcbmNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcclxuICAgIGlmIChub2RlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xyXG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xyXG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHByZXR0eUhUTUwgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcclxuICAgICAgICByZXN1bHQgKz0gcHJldHR5SFRNTChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcmVzdWx0ICs9IGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9XFxuYDtcclxuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcclxuICAgICAgICByZXN1bHQgKz0gcHJldHR5SFRNTChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRIZWlnaHQobm9kZSkge1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbGVmdEhlaWdodCA9IGdldEhlaWdodChub2RlLmxlZnQpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0SGVpZ2h0ID0gZ2V0SGVpZ2h0KG5vZGUucmlnaHQpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChsZWZ0SGVpZ2h0LCByaWdodEhlaWdodCkgKyAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21BcnJheSgpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IDEwfSwgKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVHJlZSh0cmVlKSB7XHJcbiAgICBjb25zdCB0cmVlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVlXCIpIFxyXG4gICAgY29uc3QgcHJldHR5cHJpbnQgPSBwcmV0dHlIVE1MKHRyZWUucm9vdClcclxuICAgIHRyZWVDb250YWluZXIudGV4dENvbnRlbnQgPSBwcmV0dHlwcmludFxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRBcnJheShhcnIpIHtcclxuICAgIGNvbnN0IHNlcGFyYXRvciA9IC9bLFxcc10rL1xyXG4gICAgcmV0dXJuIGFyci5zcGxpdChzZXBhcmF0b3IpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmROb2RlKHJvb3Qsa2V5KSB7XHJcbiAgICBjb25zdCBkYXRhID0gcGFyc2VJbnQoa2V5KVxyXG4gIFxyXG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtyZXR1cm4gbnVsbH1cclxuICAgIGlmIChyb290LmRhdGEgPT09IGRhdGEpIHtcclxuICAgICAgcmV0dXJuIHJvb3RcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGxlZnRSZXN1bHQgPSBmaW5kTm9kZShyb290LmxlZnQsIGRhdGEpXHJcbiAgICBjb25zdCByaWdodFJlc3VsdCA9IGZpbmROb2RlKHJvb3QucmlnaHQsIGRhdGEpXHJcbiAgXHJcbiAgICBpZiAobGVmdFJlc3VsdCkge1xyXG4gICAgICByZXR1cm4gbGVmdFJlc3VsdCBcclxuICAgIH1cclxuICAgIGlmIChyaWdodFJlc3VsdCkge1xyXG4gICAgICByZXR1cm4gcmlnaHRSZXN1bHRcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hCYWxhbmNlKHRyZWUpIHtcclxuICBjb25zdCBiYWxhbmNlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxhbmNlXCIpXHJcbiAgYmFsYW5jZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBUcmVlIGlzIGJhbGFuY2VkOiAke3RyZWUuaXNCYWxhbmNlZCgpfWBcclxufVxyXG5cclxuICBcclxuXHJcbmV4cG9ydCB7cmVmcmVzaEJhbGFuY2UsXHJcbiAgICAgICAgZ2V0SGVpZ2h0LFxyXG4gICAgICAgIHByZXR0eUhUTUwsIFxyXG4gICAgICAgIHByZXR0eVByaW50LCBcclxuICAgICAgICByZW5kZXJUcmVlLCBcclxuICAgICAgICByYW5kb21BcnJheSwgXHJcbiAgICAgICAgZm9ybWF0QXJyYXksXHJcbiAgICAgICAgZmluZE5vZGV9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2dldEhlaWdodCwgcmVuZGVyVHJlZSwgcmFuZG9tQXJyYXksIGZvcm1hdEFycmF5LCBmaW5kTm9kZSwgcmVmcmVzaEJhbGFuY2V9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uc1wiXHJcbmltcG9ydCB7VHJlZX0gZnJvbSBcIi4vVHJlZVwiXHJcblxyXG5jb25zdCBhcnJheUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWFycmF5XVwiKVxyXG5jb25zdCBpbnNlcnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pbnNlcnRdXCIpXHJcbmNvbnN0IGRlbGV0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWRlbGV0ZV1cIilcclxuY29uc3QgZGVwdGhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kZXB0aF1cIilcclxuXHJcbmNvbnN0IGluc2VydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5zZXJ0LWJ0blwiKVxyXG5jb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1idG5cIilcclxuY29uc3QgZGVwdGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlaWdodC1idG5cIilcclxuY29uc3QgaGVpZ2h0UmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHQtaGVpZ2h0XCIpXHJcblxyXG5jb25zdCBoZWlnaHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlaWdodFwiKVxyXG5jb25zdCBicmVhZHRoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5icmVhZHRoXCIpXHJcbmNvbnN0IHByZW9yZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVvcmRlclwiKVxyXG5jb25zdCBpbm9yZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbm9yZGVyXCIpXHJcbmNvbnN0IHBvc3RvcmRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9zdG9yZGVyXCIpXHJcbmNvbnN0IGJhbGFuY2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGFuY2VcIilcclxuY29uc3QgcmVCYWxhbmNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxhbmNlLWJ0blwiKVxyXG5cclxuXHJcbi8vaW5pdGlhbGl6ZSByYW5kb20gYXJyYXlcclxubGV0IGFyciA9IHJhbmRvbUFycmF5KClcclxubGV0IHRyZWUgPSBuZXcgVHJlZShhcnIpXHJcbnJlbmRlclRyZWUodHJlZSlcclxuXHJcbi8vQXJyYXkgSW5wdXRcclxuYXJyYXlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gIGFyciA9IGZvcm1hdEFycmF5KGFycmF5SW5wdXQudmFsdWUpXHJcbiAgdHJlZSA9IG5ldyBUcmVlKGFycilcclxuICByZW5kZXJUcmVlKHRyZWUpXHJcbn0pXHJcblxyXG4vL0luc2VydCBOb2RlXHJcbmluc2VydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgaWYgKGluc2VydElucHV0LnZhbHVlKSB7XHJcbiAgICB0cmVlLmluc2VydE5vZGUoaW5zZXJ0SW5wdXQudmFsdWUpXHJcbiAgICBpbnNlcnRJbnB1dC52YWx1ZSA9IFwiXCJcclxuICAgIHJlbmRlclRyZWUodHJlZSlcclxuICAgIHJlZnJlc2hCYWxhbmNlKHRyZWUpXHJcbiAgfSBlbHNlIHtyZXR1cm59XHJcbiAgXHJcbn0pXHJcblxyXG4vL0RlbGV0ZSBOb2RlIFxyXG5kZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKVxyXG4gIHRyZWUuZGVsZXRlTm9kZSh0cmVlLnJvb3QsIGRlbGV0ZUlucHV0LnZhbHVlKVxyXG4gIGRlbGV0ZUlucHV0LnZhbHVlID0gXCJcIlxyXG4gIHJlbmRlclRyZWUodHJlZSlcclxuICByZWZyZXNoQmFsYW5jZSh0cmVlKVxyXG59KVxyXG5cclxuLy9GaW5kIERlcHRoXHJcbmRlcHRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICBjb25zdCBkYXRhID0gZGVwdGhJbnB1dC52YWx1ZVxyXG4gIGNvbnN0IG5vZGUgPSBmaW5kTm9kZSh0cmVlLnJvb3QsIGRhdGEpXHJcblxyXG4gIGlmIChub2RlICE9PSBudWxsKSB7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBnZXRIZWlnaHQobm9kZSlcclxuICAgIGRlcHRoSW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgaGVpZ2h0UmVzdWx0LnRleHRDb250ZW50ID0gYE5vZGUgSGVpZ2h0OiAke2hlaWdodH1gXHJcbn0gZWxzZSB7XHJcbiAgICBoZWlnaHRSZXN1bHQudGV4dENvbnRlbnQgPSBcIk5vZGUgbm90IGZvdW5kXCJcclxufVxyXG59KVxyXG5cclxuLy9SZS1iYWxhbmNlIHRyZWVcclxucmVCYWxhbmNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKVxyXG4gIHRyZWUgPSB0cmVlLnJlQmFsYW5jZSgpIC8vcmVibGFuY2UgcmV0dXJucyB0aGUgbmV3IHRyZWUgYW5kIHdlIHNldCBpdCB0byBvdXIgb2xkIHZhciB0cmVlLlxyXG4gIHJlbmRlclRyZWUodHJlZSlcclxufSlcclxuXHJcblxyXG4vL0luZm9ybWF0aW9uIERpc3BsYXlcclxuaGVpZ2h0Q29udGFpbmVyLnRleHRDb250ZW50ID0gYFRyZWUgSGVpZ2h0OiAke2dldEhlaWdodCh0cmVlLnJvb3QpfWBcclxuYnJlYWR0aENvbnRhaW5lci50ZXh0Q29udGVudCA9IGBMZXZlbCBPcmRlcjogJHt0cmVlLmJyZWFkdGhGaXJzdFZhbHVlcygpfWBcclxucHJlb3JkZXJDb250YWluZXIudGV4dENvbnRlbnQgPSBgUHJlLU9yZGVyOiAke3RyZWUucHJlb3JkZXIoKX1gXHJcbmlub3JkZXJDb250YWluZXIudGV4dENvbnRlbnQgPSBgSW4tT3JkZXI6ICR7dHJlZS5pbm9yZGVyKCl9YFxyXG5wb3N0b3JkZXJDb250YWluZXIudGV4dENvbnRlbnQgPSBgUG9zdC1PcmRlcjogJHt0cmVlLnBvc3RvcmRlcigpfWBcclxuYmFsYW5jZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBUcmVlIGlzIGJhbGFuY2VkOiAke3RyZWUuaXNCYWxhbmNlZCgpfWBcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9