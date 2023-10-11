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
  tree.insertNode(insertInput.value)
  insertInput.value = ""
  ;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.renderTree)(tree)
  ;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.refreshBalance)(tree)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9UcmVlLmpzIiwid2VicGFjazovL3kvLi9zcmMvaGVscGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3kvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly95Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vZGV7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxyXG4gICAgICAgIHRoaXMubGVmdCA9IG51bGxcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtOb2RlfSIsImltcG9ydCB7Tm9kZX0gZnJvbSBcIi4vTm9kZVwiXHJcbmltcG9ydCB7IGdldEhlaWdodCB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uc1wiO1xyXG5cclxuY2xhc3MgVHJlZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcnIpIHtcclxuICAgICAgY29uc3Qgc29ydGVkQXJyYXkgPSBbLi4ubmV3IFNldChhcnIpXS5zb3J0KChhLCBiKSA9PiBhIC0gYik7IC8vcmVtb3ZlcyBkdXBsaWNhdGVzIGFuZCBzb3J0cyBpdFxyXG4gICAgICB0aGlzLnJvb3QgPSB0aGlzLmJ1aWxkVHJlZShzb3J0ZWRBcnJheSk7IC8vYXMgc29vbiBhcyBhbiBvYmogaXMgbWFkZSB3LyBjbGFzcyBUcmVlLCB3aWxsIHRyaWdnZXIgYnVpbGRUcmVlKClcclxuICAgIH1cclxuICBcclxuICAgIGJ1aWxkVHJlZShzb3J0ZWRBcnJheSkge1xyXG4gICAgICAvL3Rha2VzIGFyciBhbmQgYnVpbGQgYSBiYWxhbmNlZCB0cmVlIGZ1bGwgb2Ygbm9kZXNcclxuICBcclxuICAgICAgaWYgKHNvcnRlZEFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9IC8vY2hlY2sgaWYgdGhlcmUgaXMgZXZlbiBkYXRhXHJcbiAgICAgIGNvbnN0IG1pZGRsZUluZGV4ID0gTWF0aC5mbG9vcihzb3J0ZWRBcnJheS5sZW5ndGggLyAyKTtcclxuICAgICAgY29uc3QgbGVmdFNpZGVBcnIgPSBzb3J0ZWRBcnJheS5zbGljZSgwLCBtaWRkbGVJbmRleCk7XHJcbiAgICAgIGNvbnN0IHJpZ2h0U2lkZUFyciA9IHNvcnRlZEFycmF5LnNsaWNlKG1pZGRsZUluZGV4ICsgMSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHJvb3QgPSBuZXcgTm9kZShzb3J0ZWRBcnJheVttaWRkbGVJbmRleF0pO1xyXG4gICAgICByb290LmxlZnQgPSB0aGlzLmJ1aWxkVHJlZShsZWZ0U2lkZUFycik7XHJcbiAgICAgIHJvb3QucmlnaHQgPSB0aGlzLmJ1aWxkVHJlZShyaWdodFNpZGVBcnIpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gcm9vdDtcclxuICAgIH1cclxuICBcclxuICAgIGluc2VydE5vZGUoZGF0YSkge1xyXG4gICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKGRhdGEpO1xyXG4gIFxyXG4gICAgICBpZiAodGhpcy5yb290ID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgcHJldiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHRlbXAgPSB0aGlzLnJvb3Q7XHJcbiAgXHJcbiAgICAgICAgd2hpbGUgKHRlbXAgIT09IG51bGwpIHtcclxuICAgICAgICAgIHByZXYgPSB0ZW1wO1xyXG4gICAgICAgICAgaWYgKGRhdGEgPCB0ZW1wLmRhdGEpIHtcclxuICAgICAgICAgICAgdGVtcCA9IHRlbXAubGVmdDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YSA+IHRlbXAuZGF0YSkge1xyXG4gICAgICAgICAgICB0ZW1wID0gdGVtcC5yaWdodDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIER1cGxpY2F0ZSB2YWx1ZSwgc2tpcCBpbnNlcnRpb25cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAvLyBOb3cgdGhhdCB3ZSd2ZSBmb3VuZCB0aGUgY29ycmVjdCBwb3NpdGlvbiwgaW5zZXJ0IHRoZSBuZXcgbm9kZS5cclxuICAgICAgICBpZiAoZGF0YSA8IHByZXYuZGF0YSkge1xyXG4gICAgICAgICAgcHJldi5sZWZ0ID0gbm9kZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJldi5yaWdodCA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmaW5kTWluVmFsdWVOb2RlKG5vZGUpIHtcclxuICAgICAgbGV0IGN1cnJlbnQgPSBub2RlO1xyXG4gICAgICB3aGlsZSAoY3VycmVudC5sZWZ0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjdXJyZW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGVsZXRlTm9kZShyb290LCBrKSB7XHJcbiAgICAgIC8vIEJhc2UgY2FzZSwgbm8gcm9vdCBzbyBubyB0cmVlIHNvIG5vdGhpbmcgdG8gZGVsZXRlXHJcbiAgICAgIGlmIChyb290ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxzIGZvciBhbmNlc3RvcnMsIGdvIHRodXIgdGhlIHRyZWUgdG8gZmluZCB3aGVyZSBkYXRhID0ga1xyXG4gICAgICBpZiAocm9vdC5kYXRhID4gaykge1xyXG4gICAgICAgIHJvb3QubGVmdCA9IHRoaXMuZGVsZXRlTm9kZShyb290LmxlZnQsIGspO1xyXG4gICAgICAgIHJldHVybiByb290OyAvL2lmIGl0IHJlYWNoZXMgbnVsbCBmcm9tIGxpbmUgYWJvdmUgdGhlbiBpcyBub3QgaW4gdGhpcyBicmFuY2ggYW5kIHJldHVybiB0aGUgb3JpZ2luYWwgcm9vdFxyXG4gICAgICB9IGVsc2UgaWYgKHJvb3QuZGF0YSA8IGspIHtcclxuICAgICAgICByb290LnJpZ2h0ID0gdGhpcy5kZWxldGVOb2RlKHJvb3QucmlnaHQsIGspO1xyXG4gICAgICAgIHJldHVybiByb290O1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIC8vIFdlIHJlYWNoIGhlcmUgd2hlbiByb290IGlzIHRoZSBub2RlXHJcbiAgICAgIC8vIHRvIGJlIGRlbGV0ZWQuIFdoZW4gdGhlIGNhbGwgZ2V0cyBoZXJlIGl0IG1lYW5zIHJvb3QuZGF0YSA9IGtcclxuICAgICBcclxuICAgICAgLy8gSWYgb25lIG9mIHRoZSBjaGlsZHJlbiBpcyBlbXB0eVxyXG4gICAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvb3QucmlnaHQgLy90aGlzIHdpbGwgc2V0IHRoZSBsZWZ0L3JpZ2h0IG9mIHRoZSBub2RlIGFib3ZlIGxldmVsIHRvIHRoaXMoRGVsZXRpbmcgdGhlIGN1cnJlbnQgbm9kZSkoY2hlY2sgdGhlIHJlY3Vyc2l2ZSBjYWxsIGFib3ZlIHRoaXMpXHJcbiAgICAgIH0gZWxzZSBpZiAocm9vdC5yaWdodCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiByb290LmxlZnRcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAvLyBJZiBib3RoIGNoaWxkcmVuIGV4aXN0XHJcbiAgICAgIC8vIE5vZGUgd2l0aCB0d28gY2hpbGRyZW4sIGZpbmQgdGhlIGlub3JkZXIgc3VjY2Vzc29yIChzbWFsbGVzdCBpbiB0aGUgcmlnaHQgc3VidHJlZSlcclxuICAgICAgbGV0IG1pblZhbHVlTm9kZSA9IHRoaXMuZmluZE1pblZhbHVlTm9kZShyb290LnJpZ2h0KTtcclxuICBcclxuICAgICAgLy8gQ29weSB0aGUgaW5vcmRlciBzdWNjZXNzb3IncyBjb250ZW50IHRvIHRoaXMgbm9kZVxyXG4gICAgICByb290LmRhdGEgPSBtaW5WYWx1ZU5vZGUuZGF0YTtcclxuICBcclxuICAgICAgLy8gRGVsZXRlIHRoZSBpbm9yZGVyIHN1Y2Nlc3NvclxyXG4gICAgICByb290LnJpZ2h0ID0gdGhpcy5kZWxldGVOb2RlKHJvb3QucmlnaHQsIG1pblZhbHVlTm9kZS5kYXRhKTtcclxuICBcclxuICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICAgXHJcbiAgICBcclxuICAgIH1cclxuICBcclxuICAgIGJyZWFkdGhGaXJzdFZhbHVlcygpIHtcclxuICAgICAgY29uc3Qgcm9vdCA9IHRoaXMucm9vdFxyXG4gICAgICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIFtdIC8vaWYgbm8gcm9vdCB0aGVuIG5vIHRyZWUgdGhlbiBqdXN0IHJldHVybiBlbXB0eSBhcnJheVxyXG4gIFxyXG4gICAgICBjb25zdCB2YWx1ZXMgPSBbXSAvL2luaXRpYWxpemUgYSBhcnJheSB0byBzdG9yZSBmaW5hbCB2YWx1ZXNcclxuICAgICAgY29uc3QgcXVldWUgPVtyb290XSAvL2JyZWFkdGhmaXJzdCB1c2VzIGEgcXVldWUgc3lzdGVtXHJcbiAgXHJcbiAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHF1ZXVlLnNoaWZ0KCkgLy9zaGlmdCB0YWtlcyB0aGUgZmlyc3QgaW5kZXggYW5kIHJldHVybnMgaXRcclxuICAgICAgICB2YWx1ZXMucHVzaChjdXJyZW50LmRhdGEpXHJcbiAgXHJcbiAgICAgICAgLy93ZSBwdXNoIHRoZSBzdWJ0cmVlcyBvZiB0aGUgY3VycmVudCBub2RlIGludG8gdGhlIHF1ZXVlXHJcbiAgICAgICAgaWYgKGN1cnJlbnQubGVmdCAhPT0gbnVsbCkge3F1ZXVlLnB1c2goY3VycmVudC5sZWZ0KX1cclxuICAgICAgICBpZiAoY3VycmVudC5yaWdodCAhPT0gbnVsbCkge3F1ZXVlLnB1c2goY3VycmVudC5yaWdodCl9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHZhbHVlc1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcHJlb3JkZXIocm9vdD10aGlzLnJvb3QpIHtcclxuICAgICAgaWYgKHJvb3QgPT09IG51bGwpXHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIFxyXG4gICAgICBjb25zdCBsZWZ0VmFsdWVzID0gdGhpcy5wcmVvcmRlcihyb290LmxlZnQpO1xyXG4gICAgICBjb25zdCByaWdodFZhbHVlcyA9IHRoaXMucHJlb3JkZXIocm9vdC5yaWdodCk7XHJcbiAgICAgIHJldHVybiBbIHJvb3QuZGF0YSwgLi4ubGVmdFZhbHVlcywgLi4ucmlnaHRWYWx1ZXMgXTtcclxuICAgIH1cclxuICBcclxuICAgIGlub3JkZXIocm9vdD10aGlzLnJvb3QpIHtcclxuICAgICAgaWYgKHJvb3QgPT09IG51bGwpXHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIFxyXG4gICAgICBjb25zdCBsZWZ0VmFsdWVzID0gdGhpcy5pbm9yZGVyKHJvb3QubGVmdCk7XHJcbiAgICAgIGNvbnN0IHJpZ2h0VmFsdWVzID0gdGhpcy5pbm9yZGVyKHJvb3QucmlnaHQpO1xyXG4gICAgICByZXR1cm4gWyAuLi5sZWZ0VmFsdWVzLCByb290LmRhdGEsICAuLi5yaWdodFZhbHVlcyBdO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcG9zdG9yZGVyKHJvb3Q9dGhpcy5yb290KSB7XHJcbiAgICAgIGlmIChyb290ID09PSBudWxsKVxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICBcclxuICAgICAgY29uc3QgbGVmdFZhbHVlcyA9IHRoaXMucG9zdG9yZGVyKHJvb3QubGVmdCk7XHJcbiAgICAgIGNvbnN0IHJpZ2h0VmFsdWVzID0gdGhpcy5wb3N0b3JkZXIocm9vdC5yaWdodCk7XHJcbiAgICAgIHJldHVybiBbIC4uLmxlZnRWYWx1ZXMsICAuLi5yaWdodFZhbHVlcywgcm9vdC5kYXRhXTtcclxuICAgIH1cclxuXHJcbiAgICBpc0JhbGFuY2VkKHJvb3Q9dGhpcy5yb290KSB7XHJcbiAgICAgIHJldHVybiBNYXRoLmFicyhnZXRIZWlnaHQocm9vdC5sZWZ0KSAtIGdldEhlaWdodChyb290LnJpZ2h0KSkgPCAyXHJcbiAgICB9XHJcbiAgfVxyXG4vLyAgICAgLy8gQSByZWN1cnNpdmUgZnVuY3Rpb24gdG8gaW5zZXJ0IGEgbmV3IGtleSBpbiBCU1RcclxuLy8gICAgIGZ1bmN0aW9uIGluc2VydFJlYyhyb290LCBrZXkpIHtcclxuXHJcbi8vICAgICAvLyBJZiB0aGUgdHJlZSBpcyBlbXB0eSwgcmV0dXJuIGEgbmV3IG5vZGVcclxuLy8gICAgIGlmIChyb290ID09IG51bGwpIHtcclxuLy8gICAgICAgICByb290ID0gbmV3IE5vZGUoa2V5KTtcclxuLy8gICAgICAgICByZXR1cm4gcm9vdDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyBPdGhlcndpc2UsIHJlY3VyIGRvd24gdGhlIHRyZWVcclxuLy8gICAgIGlmIChrZXkgPCByb290LmtleSlcclxuLy8gICAgICAgICByb290LmxlZnQgPSBpbnNlcnRSZWMocm9vdC5sZWZ0LCBrZXkpO1xyXG4vLyAgICAgZWxzZSBpZiAoa2V5ID4gcm9vdC5rZXkpXHJcbi8vICAgICAgICAgcm9vdC5yaWdodCA9IGluc2VydFJlYyhyb290LnJpZ2h0LCBrZXkpO1xyXG5cclxuLy8gICAgIC8vIFJldHVybiB0aGUgKHVuY2hhbmdlZCkgbm9kZSBwb2ludGVyXHJcbi8vICAgICByZXR1cm4gcm9vdDtcclxuLy8gfVxyXG5cclxuXHJcbmV4cG9ydCB7VHJlZX0iLCJcclxuY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcclxuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XHJcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XHJcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgcHJldHR5SFRNTCA9IChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSA9PiB7XHJcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJlc3VsdCArPSBwcmV0dHlIVE1MKG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICByZXN1bHQgKz0gYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1cXG5gO1xyXG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJlc3VsdCArPSBwcmV0dHlIVE1MKG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldEhlaWdodChub2RlKSB7XHJcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBsZWZ0SGVpZ2h0ID0gZ2V0SGVpZ2h0KG5vZGUubGVmdCk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRIZWlnaHQgPSBnZXRIZWlnaHQobm9kZS5yaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KGxlZnRIZWlnaHQsIHJpZ2h0SGVpZ2h0KSArIDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUFycmF5KCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogMTB9LCAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUcmVlKHRyZWUpIHtcclxuICAgIGNvbnN0IHRyZWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWVcIikgXHJcbiAgICBjb25zdCBwcmV0dHlwcmludCA9IHByZXR0eUhUTUwodHJlZS5yb290KVxyXG4gICAgdHJlZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHByZXR0eXByaW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGFycikge1xyXG4gICAgY29uc3Qgc2VwYXJhdG9yID0gL1ssXFxzXSsvXHJcbiAgICByZXR1cm4gYXJyLnNwbGl0KHNlcGFyYXRvcilcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZE5vZGUocm9vdCxrZXkpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBwYXJzZUludChrZXkpXHJcbiAgXHJcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge3JldHVybiBudWxsfVxyXG4gICAgaWYgKHJvb3QuZGF0YSA9PT0gZGF0YSkge1xyXG4gICAgICByZXR1cm4gcm9vdFxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgbGVmdFJlc3VsdCA9IGZpbmROb2RlKHJvb3QubGVmdCwgZGF0YSlcclxuICAgIGNvbnN0IHJpZ2h0UmVzdWx0ID0gZmluZE5vZGUocm9vdC5yaWdodCwgZGF0YSlcclxuICBcclxuICAgIGlmIChsZWZ0UmVzdWx0KSB7XHJcbiAgICAgIHJldHVybiBsZWZ0UmVzdWx0IFxyXG4gICAgfVxyXG4gICAgaWYgKHJpZ2h0UmVzdWx0KSB7XHJcbiAgICAgIHJldHVybiByaWdodFJlc3VsdFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gcmVmcmVzaEJhbGFuY2UodHJlZSkge1xyXG4gIGNvbnN0IGJhbGFuY2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGFuY2VcIilcclxuICBiYWxhbmNlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYFRyZWUgaXMgYmFsYW5jZWQ6ICR7dHJlZS5pc0JhbGFuY2VkKCl9YFxyXG59XHJcblxyXG4gIFxyXG5cclxuZXhwb3J0IHtyZWZyZXNoQmFsYW5jZSxcclxuICAgICAgICBnZXRIZWlnaHQsXHJcbiAgICAgICAgcHJldHR5SFRNTCwgXHJcbiAgICAgICAgcHJldHR5UHJpbnQsIFxyXG4gICAgICAgIHJlbmRlclRyZWUsIFxyXG4gICAgICAgIHJhbmRvbUFycmF5LCBcclxuICAgICAgICBmb3JtYXRBcnJheSxcclxuICAgICAgICBmaW5kTm9kZX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Z2V0SGVpZ2h0LCByZW5kZXJUcmVlLCByYW5kb21BcnJheSwgZm9ybWF0QXJyYXksIGZpbmROb2RlLCByZWZyZXNoQmFsYW5jZX0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCJcclxuaW1wb3J0IHtUcmVlfSBmcm9tIFwiLi9UcmVlXCJcclxuXHJcbmNvbnN0IGFycmF5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYXJyYXldXCIpXHJcbmNvbnN0IGluc2VydElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWluc2VydF1cIilcclxuY29uc3QgZGVsZXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGVsZXRlXVwiKVxyXG5jb25zdCBkZXB0aElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWRlcHRoXVwiKVxyXG5cclxuY29uc3QgaW5zZXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnNlcnQtYnRuXCIpXHJcbmNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLWJ0blwiKVxyXG5jb25zdCBkZXB0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVpZ2h0LWJ0blwiKVxyXG5jb25zdCBoZWlnaHRSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdC1oZWlnaHRcIilcclxuXHJcbmNvbnN0IGhlaWdodENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVpZ2h0XCIpXHJcbmNvbnN0IGJyZWFkdGhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJyZWFkdGhcIilcclxuY29uc3QgcHJlb3JkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZW9yZGVyXCIpXHJcbmNvbnN0IGlub3JkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlub3JkZXJcIilcclxuY29uc3QgcG9zdG9yZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3N0b3JkZXJcIilcclxuY29uc3QgYmFsYW5jZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsYW5jZVwiKVxyXG5cclxuXHJcbi8vaW5pdGlhbGl6ZSByYW5kb20gYXJyYXlcclxubGV0IGFyciA9IHJhbmRvbUFycmF5KClcclxubGV0IHRyZWUgPSBuZXcgVHJlZShhcnIpXHJcbnJlbmRlclRyZWUodHJlZSlcclxuXHJcbi8vQXJyYXkgSW5wdXRcclxuYXJyYXlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gIGFyciA9IGZvcm1hdEFycmF5KGFycmF5SW5wdXQudmFsdWUpXHJcbiAgdHJlZSA9IG5ldyBUcmVlKGFycilcclxuICByZW5kZXJUcmVlKHRyZWUpXHJcbn0pXHJcblxyXG4vL0luc2VydCBOb2RlXHJcbmluc2VydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgdHJlZS5pbnNlcnROb2RlKGluc2VydElucHV0LnZhbHVlKVxyXG4gIGluc2VydElucHV0LnZhbHVlID0gXCJcIlxyXG4gIHJlbmRlclRyZWUodHJlZSlcclxuICByZWZyZXNoQmFsYW5jZSh0cmVlKVxyXG59KVxyXG5cclxuLy9EZWxldGUgTm9kZSBcclxuZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICB0cmVlLmRlbGV0ZU5vZGUodHJlZS5yb290LCBkZWxldGVJbnB1dC52YWx1ZSlcclxuICBkZWxldGVJbnB1dC52YWx1ZSA9IFwiXCJcclxuICByZW5kZXJUcmVlKHRyZWUpXHJcbiAgcmVmcmVzaEJhbGFuY2UodHJlZSlcclxufSlcclxuXHJcbi8vRmluZCBEZXB0aFxyXG5kZXB0aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgY29uc3QgZGF0YSA9IGRlcHRoSW5wdXQudmFsdWVcclxuICBjb25zdCBub2RlID0gZmluZE5vZGUodHJlZS5yb290LCBkYXRhKVxyXG5cclxuICBpZiAobm9kZSAhPT0gbnVsbCkge1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gZ2V0SGVpZ2h0KG5vZGUpXHJcbiAgICBkZXB0aElucHV0LnZhbHVlID0gJydcclxuICAgIGhlaWdodFJlc3VsdC50ZXh0Q29udGVudCA9IGBOb2RlIEhlaWdodDogJHtoZWlnaHR9YFxyXG59IGVsc2Uge1xyXG4gICAgaGVpZ2h0UmVzdWx0LnRleHRDb250ZW50ID0gXCJOb2RlIG5vdCBmb3VuZFwiXHJcbn1cclxufSlcclxuXHJcbi8vSW5mb3JtYXRpb24gRGlzcGxheVxyXG5oZWlnaHRDb250YWluZXIudGV4dENvbnRlbnQgPSBgVHJlZSBIZWlnaHQ6ICR7Z2V0SGVpZ2h0KHRyZWUucm9vdCl9YFxyXG5icmVhZHRoQ29udGFpbmVyLnRleHRDb250ZW50ID0gYExldmVsIE9yZGVyOiAke3RyZWUuYnJlYWR0aEZpcnN0VmFsdWVzKCl9YFxyXG5wcmVvcmRlckNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBQcmUtT3JkZXI6ICR7dHJlZS5wcmVvcmRlcigpfWBcclxuaW5vcmRlckNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBJbi1PcmRlcjogJHt0cmVlLmlub3JkZXIoKX1gXHJcbnBvc3RvcmRlckNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBQb3N0LU9yZGVyOiAke3RyZWUucG9zdG9yZGVyKCl9YFxyXG5iYWxhbmNlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYFRyZWUgaXMgYmFsYW5jZWQ6ICR7dHJlZS5pc0JhbGFuY2VkKCl9YFxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=