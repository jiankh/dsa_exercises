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

//initialize random array
let arr = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.randomArray)()
;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.renderTree)(arr)

arrayInput.addEventListener('change', (e) => {
  arr = formatArray(arrayInput.value)
  ;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.renderTree)(arr)
})

function formatArray(arr) {
  const separator = /[,\s]+/
  return arr.split(separator)
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3RDs7Ozs7Ozs7Ozs7O0FDTm9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkRBQVc7QUFDckIsNkRBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFVO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL05vZGUuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9UcmVlLmpzIiwid2VicGFjazovL3kvLi9zcmMvaGVscGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3kvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly95Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vZGV7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxyXG4gICAgICAgIHRoaXMubGVmdCA9IG51bGxcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtOb2RlfSIsImltcG9ydCB7Tm9kZX0gZnJvbSBcIi4vTm9kZVwiXHJcblxyXG5jbGFzcyBUcmVlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFycikge1xyXG4gICAgICBjb25zdCBzb3J0ZWRBcnJheSA9IFsuLi5uZXcgU2V0KGFycildLnNvcnQoKGEsIGIpID0+IGEgLSBiKTsgLy9yZW1vdmVzIGR1cGxpY2F0ZXMgYW5kIHNvcnRzIGl0XHJcbiAgICAgIHRoaXMucm9vdCA9IHRoaXMuYnVpbGRUcmVlKHNvcnRlZEFycmF5KTsgLy9hcyBzb29uIGFzIGFuIG9iaiBpcyBtYWRlIHcvIGNsYXNzIFRyZWUsIHdpbGwgdHJpZ2dlciBidWlsZFRyZWUoKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgYnVpbGRUcmVlKHNvcnRlZEFycmF5KSB7XHJcbiAgICAgIC8vdGFrZXMgYXJyIGFuZCBidWlsZCBhIGJhbGFuY2VkIHRyZWUgZnVsbCBvZiBub2Rlc1xyXG4gIFxyXG4gICAgICBpZiAoc29ydGVkQXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0gLy9jaGVjayBpZiB0aGVyZSBpcyBldmVuIGRhdGFcclxuICAgICAgY29uc3QgbWlkZGxlSW5kZXggPSBNYXRoLmZsb29yKHNvcnRlZEFycmF5Lmxlbmd0aCAvIDIpO1xyXG4gICAgICBjb25zdCBsZWZ0U2lkZUFyciA9IHNvcnRlZEFycmF5LnNsaWNlKDAsIG1pZGRsZUluZGV4KTtcclxuICAgICAgY29uc3QgcmlnaHRTaWRlQXJyID0gc29ydGVkQXJyYXkuc2xpY2UobWlkZGxlSW5kZXggKyAxKTtcclxuICBcclxuICAgICAgY29uc3Qgcm9vdCA9IG5ldyBOb2RlKHNvcnRlZEFycmF5W21pZGRsZUluZGV4XSk7XHJcbiAgICAgIHJvb3QubGVmdCA9IHRoaXMuYnVpbGRUcmVlKGxlZnRTaWRlQXJyKTtcclxuICAgICAgcm9vdC5yaWdodCA9IHRoaXMuYnVpbGRUcmVlKHJpZ2h0U2lkZUFycik7XHJcbiAgXHJcbiAgICAgIHJldHVybiByb290O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW5zZXJ0Tm9kZShkYXRhKSB7XHJcbiAgICAgIGxldCBub2RlID0gbmV3IE5vZGUoZGF0YSk7XHJcbiAgXHJcbiAgICAgIGlmICh0aGlzLnJvb3QgPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMucm9vdCA9IG5vZGU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBwcmV2ID0gbnVsbDtcclxuICAgICAgICBsZXQgdGVtcCA9IHRoaXMucm9vdDtcclxuICBcclxuICAgICAgICB3aGlsZSAodGVtcCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgcHJldiA9IHRlbXA7XHJcbiAgICAgICAgICBpZiAoZGF0YSA8IHRlbXAuZGF0YSkge1xyXG4gICAgICAgICAgICB0ZW1wID0gdGVtcC5sZWZ0O1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhID4gdGVtcC5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wLnJpZ2h0O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRHVwbGljYXRlIHZhbHVlLCBza2lwIGluc2VydGlvblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC8vIE5vdyB0aGF0IHdlJ3ZlIGZvdW5kIHRoZSBjb3JyZWN0IHBvc2l0aW9uLCBpbnNlcnQgdGhlIG5ldyBub2RlLlxyXG4gICAgICAgIGlmIChkYXRhIDwgcHJldi5kYXRhKSB7XHJcbiAgICAgICAgICBwcmV2LmxlZnQgPSBub2RlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcmV2LnJpZ2h0ID0gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGZpbmRNaW5WYWx1ZU5vZGUobm9kZSkge1xyXG4gICAgICBsZXQgY3VycmVudCA9IG5vZGU7XHJcbiAgICAgIHdoaWxlIChjdXJyZW50LmxlZnQgIT09IG51bGwpIHtcclxuICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkZWxldGVOb2RlKHJvb3QsIGspIHtcclxuICAgICAgLy8gQmFzZSBjYXNlLCBubyByb290IHNvIG5vIHRyZWUgc28gbm90aGluZyB0byBkZWxldGVcclxuICAgICAgaWYgKHJvb3QgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcm9vdDtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAvLyBSZWN1cnNpdmUgY2FsbHMgZm9yIGFuY2VzdG9ycywgZ28gdGh1ciB0aGUgdHJlZSB0byBmaW5kIHdoZXJlIGRhdGEgPSBrXHJcbiAgICAgIGlmIChyb290LmRhdGEgPiBrKSB7XHJcbiAgICAgICAgcm9vdC5sZWZ0ID0gdGhpcy5kZWxldGVOb2RlKHJvb3QubGVmdCwgayk7XHJcbiAgICAgICAgcmV0dXJuIHJvb3Q7IC8vaWYgaXQgcmVhY2hlcyBudWxsIGZyb20gbGluZSBhYm92ZSB0aGVuIGlzIG5vdCBpbiB0aGlzIGJyYW5jaCBhbmQgcmV0dXJuIHRoZSBvcmlnaW5hbCByb290XHJcbiAgICAgIH0gZWxzZSBpZiAocm9vdC5kYXRhIDwgaykge1xyXG4gICAgICAgIHJvb3QucmlnaHQgPSB0aGlzLmRlbGV0ZU5vZGUocm9vdC5yaWdodCwgayk7XHJcbiAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgLy8gV2UgcmVhY2ggaGVyZSB3aGVuIHJvb3QgaXMgdGhlIG5vZGVcclxuICAgICAgLy8gdG8gYmUgZGVsZXRlZC4gV2hlbiB0aGUgY2FsbCBnZXRzIGhlcmUgaXQgbWVhbnMgcm9vdC5kYXRhID0ga1xyXG4gICAgIFxyXG4gICAgICAvLyBJZiBvbmUgb2YgdGhlIGNoaWxkcmVuIGlzIGVtcHR5XHJcbiAgICAgIGlmIChyb290LmxlZnQgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcm9vdC5yaWdodCAvL3RoaXMgd2lsbCBzZXQgdGhlIGxlZnQvcmlnaHQgb2YgdGhlIG5vZGUgYWJvdmUgbGV2ZWwgdG8gdGhpcyhEZWxldGluZyB0aGUgY3VycmVudCBub2RlKShjaGVjayB0aGUgcmVjdXJzaXZlIGNhbGwgYWJvdmUgdGhpcylcclxuICAgICAgfSBlbHNlIGlmIChyb290LnJpZ2h0ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvb3QubGVmdFxyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIC8vIElmIGJvdGggY2hpbGRyZW4gZXhpc3RcclxuICAgICAgLy8gTm9kZSB3aXRoIHR3byBjaGlsZHJlbiwgZmluZCB0aGUgaW5vcmRlciBzdWNjZXNzb3IgKHNtYWxsZXN0IGluIHRoZSByaWdodCBzdWJ0cmVlKVxyXG4gICAgICBsZXQgbWluVmFsdWVOb2RlID0gdGhpcy5maW5kTWluVmFsdWVOb2RlKHJvb3QucmlnaHQpO1xyXG4gIFxyXG4gICAgICAvLyBDb3B5IHRoZSBpbm9yZGVyIHN1Y2Nlc3NvcidzIGNvbnRlbnQgdG8gdGhpcyBub2RlXHJcbiAgICAgIHJvb3QuZGF0YSA9IG1pblZhbHVlTm9kZS5kYXRhO1xyXG4gIFxyXG4gICAgICAvLyBEZWxldGUgdGhlIGlub3JkZXIgc3VjY2Vzc29yXHJcbiAgICAgIHJvb3QucmlnaHQgPSB0aGlzLmRlbGV0ZU5vZGUocm9vdC5yaWdodCwgbWluVmFsdWVOb2RlLmRhdGEpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gcm9vdDtcclxuICAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgYnJlYWR0aEZpcnN0VmFsdWVzKCkge1xyXG4gICAgICBjb25zdCByb290ID0gdGhpcy5yb290XHJcbiAgICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gW10gLy9pZiBubyByb290IHRoZW4gbm8gdHJlZSB0aGVuIGp1c3QgcmV0dXJuIGVtcHR5IGFycmF5XHJcbiAgXHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFtdIC8vaW5pdGlhbGl6ZSBhIGFycmF5IHRvIHN0b3JlIGZpbmFsIHZhbHVlc1xyXG4gICAgICBjb25zdCBxdWV1ZSA9W3Jvb3RdIC8vYnJlYWR0aGZpcnN0IHVzZXMgYSBxdWV1ZSBzeXN0ZW1cclxuICBcclxuICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gcXVldWUuc2hpZnQoKSAvL3NoaWZ0IHRha2VzIHRoZSBmaXJzdCBpbmRleCBhbmQgcmV0dXJucyBpdFxyXG4gICAgICAgIHZhbHVlcy5wdXNoKGN1cnJlbnQuZGF0YSlcclxuICBcclxuICAgICAgICAvL3dlIHB1c2ggdGhlIHN1YnRyZWVzIG9mIHRoZSBjdXJyZW50IG5vZGUgaW50byB0aGUgcXVldWVcclxuICAgICAgICBpZiAoY3VycmVudC5sZWZ0ICE9PSBudWxsKSB7cXVldWUucHVzaChjdXJyZW50LmxlZnQpfVxyXG4gICAgICAgIGlmIChjdXJyZW50LnJpZ2h0ICE9PSBudWxsKSB7cXVldWUucHVzaChjdXJyZW50LnJpZ2h0KX1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdmFsdWVzXHJcbiAgICB9XHJcbiAgXHJcbiAgICBwcmVvcmRlcihyb290PXRoaXMucm9vdCkge1xyXG4gICAgICBpZiAocm9vdCA9PT0gbnVsbClcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGxlZnRWYWx1ZXMgPSB0aGlzLnByZW9yZGVyKHJvb3QubGVmdCk7XHJcbiAgICAgIGNvbnN0IHJpZ2h0VmFsdWVzID0gdGhpcy5wcmVvcmRlcihyb290LnJpZ2h0KTtcclxuICAgICAgcmV0dXJuIFsgcm9vdC5kYXRhLCAuLi5sZWZ0VmFsdWVzLCAuLi5yaWdodFZhbHVlcyBdO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW5vcmRlcihyb290PXRoaXMucm9vdCkge1xyXG4gICAgICBpZiAocm9vdCA9PT0gbnVsbClcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGxlZnRWYWx1ZXMgPSB0aGlzLmlub3JkZXIocm9vdC5sZWZ0KTtcclxuICAgICAgY29uc3QgcmlnaHRWYWx1ZXMgPSB0aGlzLmlub3JkZXIocm9vdC5yaWdodCk7XHJcbiAgICAgIHJldHVybiBbIC4uLmxlZnRWYWx1ZXMsIHJvb3QuZGF0YSwgIC4uLnJpZ2h0VmFsdWVzIF07XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwb3N0b3JkZXIocm9vdD10aGlzLnJvb3QpIHtcclxuICAgICAgaWYgKHJvb3QgPT09IG51bGwpXHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIFxyXG4gICAgICBjb25zdCBsZWZ0VmFsdWVzID0gdGhpcy5wb3N0b3JkZXIocm9vdC5sZWZ0KTtcclxuICAgICAgY29uc3QgcmlnaHRWYWx1ZXMgPSB0aGlzLnBvc3RvcmRlcihyb290LnJpZ2h0KTtcclxuICAgICAgcmV0dXJuIFsgLi4ubGVmdFZhbHVlcywgIC4uLnJpZ2h0VmFsdWVzLCByb290LmRhdGFdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuLy8gICAgIC8vIEEgcmVjdXJzaXZlIGZ1bmN0aW9uIHRvIGluc2VydCBhIG5ldyBrZXkgaW4gQlNUXHJcbi8vICAgICBmdW5jdGlvbiBpbnNlcnRSZWMocm9vdCwga2V5KSB7XHJcblxyXG4vLyAgICAgLy8gSWYgdGhlIHRyZWUgaXMgZW1wdHksIHJldHVybiBhIG5ldyBub2RlXHJcbi8vICAgICBpZiAocm9vdCA9PSBudWxsKSB7XHJcbi8vICAgICAgICAgcm9vdCA9IG5ldyBOb2RlKGtleSk7XHJcbi8vICAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLy8gT3RoZXJ3aXNlLCByZWN1ciBkb3duIHRoZSB0cmVlXHJcbi8vICAgICBpZiAoa2V5IDwgcm9vdC5rZXkpXHJcbi8vICAgICAgICAgcm9vdC5sZWZ0ID0gaW5zZXJ0UmVjKHJvb3QubGVmdCwga2V5KTtcclxuLy8gICAgIGVsc2UgaWYgKGtleSA+IHJvb3Qua2V5KVxyXG4vLyAgICAgICAgIHJvb3QucmlnaHQgPSBpbnNlcnRSZWMocm9vdC5yaWdodCwga2V5KTtcclxuXHJcbi8vICAgICAvLyBSZXR1cm4gdGhlICh1bmNoYW5nZWQpIG5vZGUgcG9pbnRlclxyXG4vLyAgICAgcmV0dXJuIHJvb3Q7XHJcbi8vIH1cclxuXHJcblxyXG4gIGV4cG9ydCB7VHJlZX0iLCJpbXBvcnQge1RyZWV9IGZyb20gXCIuL1RyZWVcIlxyXG5cclxuY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcclxuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XHJcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XHJcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgcHJldHR5SFRNTCA9IChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSA9PiB7XHJcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJlc3VsdCArPSBwcmV0dHlIVE1MKG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICByZXN1bHQgKz0gYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1cXG5gO1xyXG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJlc3VsdCArPSBwcmV0dHlIVE1MKG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldEhlaWdodChub2RlKSB7XHJcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBsZWZ0SGVpZ2h0ID0gZ2V0SGVpZ2h0KG5vZGUubGVmdCk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRIZWlnaHQgPSBnZXRIZWlnaHQobm9kZS5yaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KGxlZnRIZWlnaHQsIHJpZ2h0SGVpZ2h0KSArIDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUFycmF5KCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogMTB9LCAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApKTtcclxufTtcclxuXHJcbmNvbnN0IHRyZWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWVcIikgXHJcbmZ1bmN0aW9uIHJlbmRlclRyZWUoYXJyKSB7XHJcbiAgICBjb25zdCB0cmVlID0gbmV3IFRyZWUoYXJyKVxyXG4gICAgY29uc3QgcHJldHR5cHJpbnQgPSBwcmV0dHlIVE1MKHRyZWUucm9vdClcclxuICAgIHRyZWVDb250YWluZXIudGV4dENvbnRlbnQgPSBwcmV0dHlwcmludFxyXG59XHJcblxyXG5leHBvcnQge2dldEhlaWdodCxwcmV0dHlIVE1MLCBwcmV0dHlQcmludCwgcmVuZGVyVHJlZSwgcmFuZG9tQXJyYXl9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2dldEhlaWdodCwgcmVuZGVyVHJlZSwgcmFuZG9tQXJyYXl9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uc1wiXHJcblxyXG5cclxuXHJcbmNvbnN0IGFycmF5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYXJyYXldXCIpXHJcbmNvbnN0IGluc2VydElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWluc2VydF1cIilcclxuY29uc3QgZGVsZXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGVsZXRlXVwiKVxyXG5jb25zdCBkZXB0aElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWRlcHRoXVwiKVxyXG5cclxuLy9pbml0aWFsaXplIHJhbmRvbSBhcnJheVxyXG5sZXQgYXJyID0gcmFuZG9tQXJyYXkoKVxyXG5yZW5kZXJUcmVlKGFycilcclxuXHJcbmFycmF5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICBhcnIgPSBmb3JtYXRBcnJheShhcnJheUlucHV0LnZhbHVlKVxyXG4gIHJlbmRlclRyZWUoYXJyKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoYXJyKSB7XHJcbiAgY29uc3Qgc2VwYXJhdG9yID0gL1ssXFxzXSsvXHJcbiAgcmV0dXJuIGFyci5zcGxpdChzZXBhcmF0b3IpXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9