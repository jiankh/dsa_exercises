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
/* harmony export */   formatArray: () => (/* binding */ formatArray),
/* harmony export */   getHeight: () => (/* binding */ getHeight),
/* harmony export */   prettyHTML: () => (/* binding */ prettyHTML),
/* harmony export */   prettyPrint: () => (/* binding */ prettyPrint),
/* harmony export */   randomArray: () => (/* binding */ randomArray),
/* harmony export */   renderTree: () => (/* binding */ renderTree)
/* harmony export */ });
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree */ "./src/Tree.js");


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
    return Array.from({length: 10}, () => Math.floor(Math.random() * 100));
};

const treeContainer = document.querySelector(".tree") 
function renderTree(arr) {
    const tree = new _Tree__WEBPACK_IMPORTED_MODULE_0__.Tree(arr)
    const prettyprint = prettyHTML(tree.root)
    treeContainer.textContent = prettyprint
}

function formatArray(arr) {
    const separator = /[,\s]+/
    return arr.split(separator)
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




const arrayInput = document.querySelector("[data-array]")
const insertInput = document.querySelector("[data-insert]")
const deleteInput = document.querySelector("[data-delete]")
const depthInput = document.querySelector("[data-depth]")

const insertBtn = document.querySelector(".insert-btn")
const deleteBtn = document.querySelector(".delete-btn")
const depthBtn = document.querySelector(".height-btn")

//initialize random array
let arr = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.randomArray)()
;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.renderTree)(arr)

//Array Input
arrayInput.addEventListener('change', (e) => {
  arr = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.formatArray)(arrayInput.value)
  ;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.renderTree)(arr)
})

//Insert Node
insertBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log("insert")

})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZEQUFXO0FBQ3JCLDZEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBVztBQUNuQixFQUFFLDZEQUFVO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veS8uL3NyYy9Ob2RlLmpzIiwid2VicGFjazovL3kvLi9zcmMvVHJlZS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly95L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8veS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2Rle1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcclxuICAgICAgICB0aGlzLmxlZnQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5yaWdodCA9IG51bGxcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7Tm9kZX0iLCJpbXBvcnQge05vZGV9IGZyb20gXCIuL05vZGVcIlxyXG5cclxuY2xhc3MgVHJlZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcnIpIHtcclxuICAgICAgY29uc3Qgc29ydGVkQXJyYXkgPSBbLi4ubmV3IFNldChhcnIpXS5zb3J0KChhLCBiKSA9PiBhIC0gYik7IC8vcmVtb3ZlcyBkdXBsaWNhdGVzIGFuZCBzb3J0cyBpdFxyXG4gICAgICB0aGlzLnJvb3QgPSB0aGlzLmJ1aWxkVHJlZShzb3J0ZWRBcnJheSk7IC8vYXMgc29vbiBhcyBhbiBvYmogaXMgbWFkZSB3LyBjbGFzcyBUcmVlLCB3aWxsIHRyaWdnZXIgYnVpbGRUcmVlKClcclxuICAgIH1cclxuICBcclxuICAgIGJ1aWxkVHJlZShzb3J0ZWRBcnJheSkge1xyXG4gICAgICAvL3Rha2VzIGFyciBhbmQgYnVpbGQgYSBiYWxhbmNlZCB0cmVlIGZ1bGwgb2Ygbm9kZXNcclxuICBcclxuICAgICAgaWYgKHNvcnRlZEFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9IC8vY2hlY2sgaWYgdGhlcmUgaXMgZXZlbiBkYXRhXHJcbiAgICAgIGNvbnN0IG1pZGRsZUluZGV4ID0gTWF0aC5mbG9vcihzb3J0ZWRBcnJheS5sZW5ndGggLyAyKTtcclxuICAgICAgY29uc3QgbGVmdFNpZGVBcnIgPSBzb3J0ZWRBcnJheS5zbGljZSgwLCBtaWRkbGVJbmRleCk7XHJcbiAgICAgIGNvbnN0IHJpZ2h0U2lkZUFyciA9IHNvcnRlZEFycmF5LnNsaWNlKG1pZGRsZUluZGV4ICsgMSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHJvb3QgPSBuZXcgTm9kZShzb3J0ZWRBcnJheVttaWRkbGVJbmRleF0pO1xyXG4gICAgICByb290LmxlZnQgPSB0aGlzLmJ1aWxkVHJlZShsZWZ0U2lkZUFycik7XHJcbiAgICAgIHJvb3QucmlnaHQgPSB0aGlzLmJ1aWxkVHJlZShyaWdodFNpZGVBcnIpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gcm9vdDtcclxuICAgIH1cclxuICBcclxuICAgIGluc2VydE5vZGUoZGF0YSkge1xyXG4gICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKGRhdGEpO1xyXG4gIFxyXG4gICAgICBpZiAodGhpcy5yb290ID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgcHJldiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHRlbXAgPSB0aGlzLnJvb3Q7XHJcbiAgXHJcbiAgICAgICAgd2hpbGUgKHRlbXAgIT09IG51bGwpIHtcclxuICAgICAgICAgIHByZXYgPSB0ZW1wO1xyXG4gICAgICAgICAgaWYgKGRhdGEgPCB0ZW1wLmRhdGEpIHtcclxuICAgICAgICAgICAgdGVtcCA9IHRlbXAubGVmdDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YSA+IHRlbXAuZGF0YSkge1xyXG4gICAgICAgICAgICB0ZW1wID0gdGVtcC5yaWdodDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIER1cGxpY2F0ZSB2YWx1ZSwgc2tpcCBpbnNlcnRpb25cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAvLyBOb3cgdGhhdCB3ZSd2ZSBmb3VuZCB0aGUgY29ycmVjdCBwb3NpdGlvbiwgaW5zZXJ0IHRoZSBuZXcgbm9kZS5cclxuICAgICAgICBpZiAoZGF0YSA8IHByZXYuZGF0YSkge1xyXG4gICAgICAgICAgcHJldi5sZWZ0ID0gbm9kZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJldi5yaWdodCA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmaW5kTWluVmFsdWVOb2RlKG5vZGUpIHtcclxuICAgICAgbGV0IGN1cnJlbnQgPSBub2RlO1xyXG4gICAgICB3aGlsZSAoY3VycmVudC5sZWZ0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjdXJyZW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGVsZXRlTm9kZShyb290LCBrKSB7XHJcbiAgICAgIC8vIEJhc2UgY2FzZSwgbm8gcm9vdCBzbyBubyB0cmVlIHNvIG5vdGhpbmcgdG8gZGVsZXRlXHJcbiAgICAgIGlmIChyb290ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxzIGZvciBhbmNlc3RvcnMsIGdvIHRodXIgdGhlIHRyZWUgdG8gZmluZCB3aGVyZSBkYXRhID0ga1xyXG4gICAgICBpZiAocm9vdC5kYXRhID4gaykge1xyXG4gICAgICAgIHJvb3QubGVmdCA9IHRoaXMuZGVsZXRlTm9kZShyb290LmxlZnQsIGspO1xyXG4gICAgICAgIHJldHVybiByb290OyAvL2lmIGl0IHJlYWNoZXMgbnVsbCBmcm9tIGxpbmUgYWJvdmUgdGhlbiBpcyBub3QgaW4gdGhpcyBicmFuY2ggYW5kIHJldHVybiB0aGUgb3JpZ2luYWwgcm9vdFxyXG4gICAgICB9IGVsc2UgaWYgKHJvb3QuZGF0YSA8IGspIHtcclxuICAgICAgICByb290LnJpZ2h0ID0gdGhpcy5kZWxldGVOb2RlKHJvb3QucmlnaHQsIGspO1xyXG4gICAgICAgIHJldHVybiByb290O1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIC8vIFdlIHJlYWNoIGhlcmUgd2hlbiByb290IGlzIHRoZSBub2RlXHJcbiAgICAgIC8vIHRvIGJlIGRlbGV0ZWQuIFdoZW4gdGhlIGNhbGwgZ2V0cyBoZXJlIGl0IG1lYW5zIHJvb3QuZGF0YSA9IGtcclxuICAgICBcclxuICAgICAgLy8gSWYgb25lIG9mIHRoZSBjaGlsZHJlbiBpcyBlbXB0eVxyXG4gICAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvb3QucmlnaHQgLy90aGlzIHdpbGwgc2V0IHRoZSBsZWZ0L3JpZ2h0IG9mIHRoZSBub2RlIGFib3ZlIGxldmVsIHRvIHRoaXMoRGVsZXRpbmcgdGhlIGN1cnJlbnQgbm9kZSkoY2hlY2sgdGhlIHJlY3Vyc2l2ZSBjYWxsIGFib3ZlIHRoaXMpXHJcbiAgICAgIH0gZWxzZSBpZiAocm9vdC5yaWdodCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiByb290LmxlZnRcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAvLyBJZiBib3RoIGNoaWxkcmVuIGV4aXN0XHJcbiAgICAgIC8vIE5vZGUgd2l0aCB0d28gY2hpbGRyZW4sIGZpbmQgdGhlIGlub3JkZXIgc3VjY2Vzc29yIChzbWFsbGVzdCBpbiB0aGUgcmlnaHQgc3VidHJlZSlcclxuICAgICAgbGV0IG1pblZhbHVlTm9kZSA9IHRoaXMuZmluZE1pblZhbHVlTm9kZShyb290LnJpZ2h0KTtcclxuICBcclxuICAgICAgLy8gQ29weSB0aGUgaW5vcmRlciBzdWNjZXNzb3IncyBjb250ZW50IHRvIHRoaXMgbm9kZVxyXG4gICAgICByb290LmRhdGEgPSBtaW5WYWx1ZU5vZGUuZGF0YTtcclxuICBcclxuICAgICAgLy8gRGVsZXRlIHRoZSBpbm9yZGVyIHN1Y2Nlc3NvclxyXG4gICAgICByb290LnJpZ2h0ID0gdGhpcy5kZWxldGVOb2RlKHJvb3QucmlnaHQsIG1pblZhbHVlTm9kZS5kYXRhKTtcclxuICBcclxuICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICAgXHJcbiAgICBcclxuICAgIH1cclxuICBcclxuICAgIGJyZWFkdGhGaXJzdFZhbHVlcygpIHtcclxuICAgICAgY29uc3Qgcm9vdCA9IHRoaXMucm9vdFxyXG4gICAgICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIFtdIC8vaWYgbm8gcm9vdCB0aGVuIG5vIHRyZWUgdGhlbiBqdXN0IHJldHVybiBlbXB0eSBhcnJheVxyXG4gIFxyXG4gICAgICBjb25zdCB2YWx1ZXMgPSBbXSAvL2luaXRpYWxpemUgYSBhcnJheSB0byBzdG9yZSBmaW5hbCB2YWx1ZXNcclxuICAgICAgY29uc3QgcXVldWUgPVtyb290XSAvL2JyZWFkdGhmaXJzdCB1c2VzIGEgcXVldWUgc3lzdGVtXHJcbiAgXHJcbiAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHF1ZXVlLnNoaWZ0KCkgLy9zaGlmdCB0YWtlcyB0aGUgZmlyc3QgaW5kZXggYW5kIHJldHVybnMgaXRcclxuICAgICAgICB2YWx1ZXMucHVzaChjdXJyZW50LmRhdGEpXHJcbiAgXHJcbiAgICAgICAgLy93ZSBwdXNoIHRoZSBzdWJ0cmVlcyBvZiB0aGUgY3VycmVudCBub2RlIGludG8gdGhlIHF1ZXVlXHJcbiAgICAgICAgaWYgKGN1cnJlbnQubGVmdCAhPT0gbnVsbCkge3F1ZXVlLnB1c2goY3VycmVudC5sZWZ0KX1cclxuICAgICAgICBpZiAoY3VycmVudC5yaWdodCAhPT0gbnVsbCkge3F1ZXVlLnB1c2goY3VycmVudC5yaWdodCl9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHZhbHVlc1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcHJlb3JkZXIocm9vdD10aGlzLnJvb3QpIHtcclxuICAgICAgaWYgKHJvb3QgPT09IG51bGwpXHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIFxyXG4gICAgICBjb25zdCBsZWZ0VmFsdWVzID0gdGhpcy5wcmVvcmRlcihyb290LmxlZnQpO1xyXG4gICAgICBjb25zdCByaWdodFZhbHVlcyA9IHRoaXMucHJlb3JkZXIocm9vdC5yaWdodCk7XHJcbiAgICAgIHJldHVybiBbIHJvb3QuZGF0YSwgLi4ubGVmdFZhbHVlcywgLi4ucmlnaHRWYWx1ZXMgXTtcclxuICAgIH1cclxuICBcclxuICAgIGlub3JkZXIocm9vdD10aGlzLnJvb3QpIHtcclxuICAgICAgaWYgKHJvb3QgPT09IG51bGwpXHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIFxyXG4gICAgICBjb25zdCBsZWZ0VmFsdWVzID0gdGhpcy5pbm9yZGVyKHJvb3QubGVmdCk7XHJcbiAgICAgIGNvbnN0IHJpZ2h0VmFsdWVzID0gdGhpcy5pbm9yZGVyKHJvb3QucmlnaHQpO1xyXG4gICAgICByZXR1cm4gWyAuLi5sZWZ0VmFsdWVzLCByb290LmRhdGEsICAuLi5yaWdodFZhbHVlcyBdO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcG9zdG9yZGVyKHJvb3Q9dGhpcy5yb290KSB7XHJcbiAgICAgIGlmIChyb290ID09PSBudWxsKVxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICBcclxuICAgICAgY29uc3QgbGVmdFZhbHVlcyA9IHRoaXMucG9zdG9yZGVyKHJvb3QubGVmdCk7XHJcbiAgICAgIGNvbnN0IHJpZ2h0VmFsdWVzID0gdGhpcy5wb3N0b3JkZXIocm9vdC5yaWdodCk7XHJcbiAgICAgIHJldHVybiBbIC4uLmxlZnRWYWx1ZXMsICAuLi5yaWdodFZhbHVlcywgcm9vdC5kYXRhXTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbi8vICAgICAvLyBBIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0byBpbnNlcnQgYSBuZXcga2V5IGluIEJTVFxyXG4vLyAgICAgZnVuY3Rpb24gaW5zZXJ0UmVjKHJvb3QsIGtleSkge1xyXG5cclxuLy8gICAgIC8vIElmIHRoZSB0cmVlIGlzIGVtcHR5LCByZXR1cm4gYSBuZXcgbm9kZVxyXG4vLyAgICAgaWYgKHJvb3QgPT0gbnVsbCkge1xyXG4vLyAgICAgICAgIHJvb3QgPSBuZXcgTm9kZShrZXkpO1xyXG4vLyAgICAgICAgIHJldHVybiByb290O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC8vIE90aGVyd2lzZSwgcmVjdXIgZG93biB0aGUgdHJlZVxyXG4vLyAgICAgaWYgKGtleSA8IHJvb3Qua2V5KVxyXG4vLyAgICAgICAgIHJvb3QubGVmdCA9IGluc2VydFJlYyhyb290LmxlZnQsIGtleSk7XHJcbi8vICAgICBlbHNlIGlmIChrZXkgPiByb290LmtleSlcclxuLy8gICAgICAgICByb290LnJpZ2h0ID0gaW5zZXJ0UmVjKHJvb3QucmlnaHQsIGtleSk7XHJcblxyXG4vLyAgICAgLy8gUmV0dXJuIHRoZSAodW5jaGFuZ2VkKSBub2RlIHBvaW50ZXJcclxuLy8gICAgIHJldHVybiByb290O1xyXG4vLyB9XHJcblxyXG5cclxuICBleHBvcnQge1RyZWV9IiwiaW1wb3J0IHtUcmVlfSBmcm9tIFwiLi9UcmVlXCJcclxuXHJcbmNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcclxuICAgIGlmIChub2RlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xyXG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xyXG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHByZXR0eUhUTUwgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcclxuICAgICAgICByZXN1bHQgKz0gcHJldHR5SFRNTChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcmVzdWx0ICs9IGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9XFxuYDtcclxuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcclxuICAgICAgICByZXN1bHQgKz0gcHJldHR5SFRNTChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRIZWlnaHQobm9kZSkge1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbGVmdEhlaWdodCA9IGdldEhlaWdodChub2RlLmxlZnQpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0SGVpZ2h0ID0gZ2V0SGVpZ2h0KG5vZGUucmlnaHQpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChsZWZ0SGVpZ2h0LCByaWdodEhlaWdodCkgKyAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21BcnJheSgpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IDEwfSwgKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSk7XHJcbn07XHJcblxyXG5jb25zdCB0cmVlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVlXCIpIFxyXG5mdW5jdGlvbiByZW5kZXJUcmVlKGFycikge1xyXG4gICAgY29uc3QgdHJlZSA9IG5ldyBUcmVlKGFycilcclxuICAgIGNvbnN0IHByZXR0eXByaW50ID0gcHJldHR5SFRNTCh0cmVlLnJvb3QpXHJcbiAgICB0cmVlQ29udGFpbmVyLnRleHRDb250ZW50ID0gcHJldHR5cHJpbnRcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoYXJyKSB7XHJcbiAgICBjb25zdCBzZXBhcmF0b3IgPSAvWyxcXHNdKy9cclxuICAgIHJldHVybiBhcnIuc3BsaXQoc2VwYXJhdG9yKVxyXG59XHJcblxyXG5leHBvcnQge2dldEhlaWdodCxwcmV0dHlIVE1MLCBwcmV0dHlQcmludCwgcmVuZGVyVHJlZSwgcmFuZG9tQXJyYXksIGZvcm1hdEFycmF5fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtnZXRIZWlnaHQsIHJlbmRlclRyZWUsIHJhbmRvbUFycmF5LCBmb3JtYXRBcnJheX0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCJcclxuXHJcblxyXG5cclxuY29uc3QgYXJyYXlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1hcnJheV1cIilcclxuY29uc3QgaW5zZXJ0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaW5zZXJ0XVwiKVxyXG5jb25zdCBkZWxldGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kZWxldGVdXCIpXHJcbmNvbnN0IGRlcHRoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGVwdGhdXCIpXHJcblxyXG5jb25zdCBpbnNlcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluc2VydC1idG5cIilcclxuY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtYnRuXCIpXHJcbmNvbnN0IGRlcHRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWlnaHQtYnRuXCIpXHJcblxyXG4vL2luaXRpYWxpemUgcmFuZG9tIGFycmF5XHJcbmxldCBhcnIgPSByYW5kb21BcnJheSgpXHJcbnJlbmRlclRyZWUoYXJyKVxyXG5cclxuLy9BcnJheSBJbnB1dFxyXG5hcnJheUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgYXJyID0gZm9ybWF0QXJyYXkoYXJyYXlJbnB1dC52YWx1ZSlcclxuICByZW5kZXJUcmVlKGFycilcclxufSlcclxuXHJcbi8vSW5zZXJ0IE5vZGVcclxuaW5zZXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICBjb25zb2xlLmxvZyhcImluc2VydFwiKVxyXG5cclxufSlcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=