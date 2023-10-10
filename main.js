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
/* harmony export */   prettyPrint: () => (/* binding */ prettyPrint)
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
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree */ "./src/Tree.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");






const arr1 = [62, 8, 19, 92, 51, 52, 85, 28, 74, 0]
console.log(arr1)
const tree = new _Tree__WEBPACK_IMPORTED_MODULE_0__.Tree(arr1)
// prettyPrint(tree.root)
// tree.insertNode(9)
// tree.insertNode(999)
// prettyPrint(tree.root)


// main.appendChild(screen)




// tree.deleteNode(tree.root,52)
;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.prettyPrint)(tree.root)
console.log(tree.breadthFirstValues())
console.log(`inorder: ${tree.inorder()}`)
console.log(`preorder: ${tree.preorder()}`)
console.log(`postorder: ${tree.postorder()}`)
console.log(`Height: ${(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.getHeight)(tree.root)}`)



const main = document.querySelector(".tree")
// const screen = document.createElement('div')

const prettyprint = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.prettyHTML)(tree.root)
main.textContent = prettyprint
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBVztBQUNYO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkMseUJBQXlCLGdCQUFnQjtBQUN6QywwQkFBMEIsaUJBQWlCO0FBQzNDLHVCQUF1QiwyREFBUyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBVTtBQUM5Qiw4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3kvLi9zcmMvTm9kZS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL1RyZWUuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTm9kZXtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge05vZGV9IiwiaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi9Ob2RlXCJcclxuXHJcbmNsYXNzIFRyZWUge1xyXG4gICAgY29uc3RydWN0b3IoYXJyKSB7XHJcbiAgICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gWy4uLm5ldyBTZXQoYXJyKV0uc29ydCgoYSwgYikgPT4gYSAtIGIpOyAvL3JlbW92ZXMgZHVwbGljYXRlcyBhbmQgc29ydHMgaXRcclxuICAgICAgdGhpcy5yb290ID0gdGhpcy5idWlsZFRyZWUoc29ydGVkQXJyYXkpOyAvL2FzIHNvb24gYXMgYW4gb2JqIGlzIG1hZGUgdy8gY2xhc3MgVHJlZSwgd2lsbCB0cmlnZ2VyIGJ1aWxkVHJlZSgpXHJcbiAgICB9XHJcbiAgXHJcbiAgICBidWlsZFRyZWUoc29ydGVkQXJyYXkpIHtcclxuICAgICAgLy90YWtlcyBhcnIgYW5kIGJ1aWxkIGEgYmFsYW5jZWQgdHJlZSBmdWxsIG9mIG5vZGVzXHJcbiAgXHJcbiAgICAgIGlmIChzb3J0ZWRBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSAvL2NoZWNrIGlmIHRoZXJlIGlzIGV2ZW4gZGF0YVxyXG4gICAgICBjb25zdCBtaWRkbGVJbmRleCA9IE1hdGguZmxvb3Ioc29ydGVkQXJyYXkubGVuZ3RoIC8gMik7XHJcbiAgICAgIGNvbnN0IGxlZnRTaWRlQXJyID0gc29ydGVkQXJyYXkuc2xpY2UoMCwgbWlkZGxlSW5kZXgpO1xyXG4gICAgICBjb25zdCByaWdodFNpZGVBcnIgPSBzb3J0ZWRBcnJheS5zbGljZShtaWRkbGVJbmRleCArIDEpO1xyXG4gIFxyXG4gICAgICBjb25zdCByb290ID0gbmV3IE5vZGUoc29ydGVkQXJyYXlbbWlkZGxlSW5kZXhdKTtcclxuICAgICAgcm9vdC5sZWZ0ID0gdGhpcy5idWlsZFRyZWUobGVmdFNpZGVBcnIpO1xyXG4gICAgICByb290LnJpZ2h0ID0gdGhpcy5idWlsZFRyZWUocmlnaHRTaWRlQXJyKTtcclxuICBcclxuICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbnNlcnROb2RlKGRhdGEpIHtcclxuICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZShkYXRhKTtcclxuICBcclxuICAgICAgaWYgKHRoaXMucm9vdCA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gbm9kZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHByZXYgPSBudWxsO1xyXG4gICAgICAgIGxldCB0ZW1wID0gdGhpcy5yb290O1xyXG4gIFxyXG4gICAgICAgIHdoaWxlICh0ZW1wICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBwcmV2ID0gdGVtcDtcclxuICAgICAgICAgIGlmIChkYXRhIDwgdGVtcC5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wLmxlZnQ7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPiB0ZW1wLmRhdGEpIHtcclxuICAgICAgICAgICAgdGVtcCA9IHRlbXAucmlnaHQ7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBEdXBsaWNhdGUgdmFsdWUsIHNraXAgaW5zZXJ0aW9uXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLy8gTm93IHRoYXQgd2UndmUgZm91bmQgdGhlIGNvcnJlY3QgcG9zaXRpb24sIGluc2VydCB0aGUgbmV3IG5vZGUuXHJcbiAgICAgICAgaWYgKGRhdGEgPCBwcmV2LmRhdGEpIHtcclxuICAgICAgICAgIHByZXYubGVmdCA9IG5vZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByZXYucmlnaHQgPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZmluZE1pblZhbHVlTm9kZShub2RlKSB7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gbm9kZTtcclxuICAgICAgd2hpbGUgKGN1cnJlbnQubGVmdCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubGVmdDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY3VycmVudDtcclxuICAgIH1cclxuICBcclxuICAgIGRlbGV0ZU5vZGUocm9vdCwgaykge1xyXG4gICAgICAvLyBCYXNlIGNhc2UsIG5vIHJvb3Qgc28gbm8gdHJlZSBzbyBub3RoaW5nIHRvIGRlbGV0ZVxyXG4gICAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiByb290O1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIC8vIFJlY3Vyc2l2ZSBjYWxscyBmb3IgYW5jZXN0b3JzLCBnbyB0aHVyIHRoZSB0cmVlIHRvIGZpbmQgd2hlcmUgZGF0YSA9IGtcclxuICAgICAgaWYgKHJvb3QuZGF0YSA+IGspIHtcclxuICAgICAgICByb290LmxlZnQgPSB0aGlzLmRlbGV0ZU5vZGUocm9vdC5sZWZ0LCBrKTtcclxuICAgICAgICByZXR1cm4gcm9vdDsgLy9pZiBpdCByZWFjaGVzIG51bGwgZnJvbSBsaW5lIGFib3ZlIHRoZW4gaXMgbm90IGluIHRoaXMgYnJhbmNoIGFuZCByZXR1cm4gdGhlIG9yaWdpbmFsIHJvb3RcclxuICAgICAgfSBlbHNlIGlmIChyb290LmRhdGEgPCBrKSB7XHJcbiAgICAgICAgcm9vdC5yaWdodCA9IHRoaXMuZGVsZXRlTm9kZShyb290LnJpZ2h0LCBrKTtcclxuICAgICAgICByZXR1cm4gcm9vdDtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAvLyBXZSByZWFjaCBoZXJlIHdoZW4gcm9vdCBpcyB0aGUgbm9kZVxyXG4gICAgICAvLyB0byBiZSBkZWxldGVkLiBXaGVuIHRoZSBjYWxsIGdldHMgaGVyZSBpdCBtZWFucyByb290LmRhdGEgPSBrXHJcbiAgICAgXHJcbiAgICAgIC8vIElmIG9uZSBvZiB0aGUgY2hpbGRyZW4gaXMgZW1wdHlcclxuICAgICAgaWYgKHJvb3QubGVmdCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiByb290LnJpZ2h0IC8vdGhpcyB3aWxsIHNldCB0aGUgbGVmdC9yaWdodCBvZiB0aGUgbm9kZSBhYm92ZSBsZXZlbCB0byB0aGlzKERlbGV0aW5nIHRoZSBjdXJyZW50IG5vZGUpKGNoZWNrIHRoZSByZWN1cnNpdmUgY2FsbCBhYm92ZSB0aGlzKVxyXG4gICAgICB9IGVsc2UgaWYgKHJvb3QucmlnaHQgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcm9vdC5sZWZ0XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgLy8gSWYgYm90aCBjaGlsZHJlbiBleGlzdFxyXG4gICAgICAvLyBOb2RlIHdpdGggdHdvIGNoaWxkcmVuLCBmaW5kIHRoZSBpbm9yZGVyIHN1Y2Nlc3NvciAoc21hbGxlc3QgaW4gdGhlIHJpZ2h0IHN1YnRyZWUpXHJcbiAgICAgIGxldCBtaW5WYWx1ZU5vZGUgPSB0aGlzLmZpbmRNaW5WYWx1ZU5vZGUocm9vdC5yaWdodCk7XHJcbiAgXHJcbiAgICAgIC8vIENvcHkgdGhlIGlub3JkZXIgc3VjY2Vzc29yJ3MgY29udGVudCB0byB0aGlzIG5vZGVcclxuICAgICAgcm9vdC5kYXRhID0gbWluVmFsdWVOb2RlLmRhdGE7XHJcbiAgXHJcbiAgICAgIC8vIERlbGV0ZSB0aGUgaW5vcmRlciBzdWNjZXNzb3JcclxuICAgICAgcm9vdC5yaWdodCA9IHRoaXMuZGVsZXRlTm9kZShyb290LnJpZ2h0LCBtaW5WYWx1ZU5vZGUuZGF0YSk7XHJcbiAgXHJcbiAgICAgIHJldHVybiByb290O1xyXG4gICAgIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBicmVhZHRoRmlyc3RWYWx1ZXMoKSB7XHJcbiAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLnJvb3RcclxuICAgICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBbXSAvL2lmIG5vIHJvb3QgdGhlbiBubyB0cmVlIHRoZW4ganVzdCByZXR1cm4gZW1wdHkgYXJyYXlcclxuICBcclxuICAgICAgY29uc3QgdmFsdWVzID0gW10gLy9pbml0aWFsaXplIGEgYXJyYXkgdG8gc3RvcmUgZmluYWwgdmFsdWVzXHJcbiAgICAgIGNvbnN0IHF1ZXVlID1bcm9vdF0gLy9icmVhZHRoZmlyc3QgdXNlcyBhIHF1ZXVlIHN5c3RlbVxyXG4gIFxyXG4gICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpIC8vc2hpZnQgdGFrZXMgdGhlIGZpcnN0IGluZGV4IGFuZCByZXR1cm5zIGl0XHJcbiAgICAgICAgdmFsdWVzLnB1c2goY3VycmVudC5kYXRhKVxyXG4gIFxyXG4gICAgICAgIC8vd2UgcHVzaCB0aGUgc3VidHJlZXMgb2YgdGhlIGN1cnJlbnQgbm9kZSBpbnRvIHRoZSBxdWV1ZVxyXG4gICAgICAgIGlmIChjdXJyZW50LmxlZnQgIT09IG51bGwpIHtxdWV1ZS5wdXNoKGN1cnJlbnQubGVmdCl9XHJcbiAgICAgICAgaWYgKGN1cnJlbnQucmlnaHQgIT09IG51bGwpIHtxdWV1ZS5wdXNoKGN1cnJlbnQucmlnaHQpfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2YWx1ZXNcclxuICAgIH1cclxuICBcclxuICAgIHByZW9yZGVyKHJvb3Q9dGhpcy5yb290KSB7XHJcbiAgICAgIGlmIChyb290ID09PSBudWxsKVxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICBcclxuICAgICAgY29uc3QgbGVmdFZhbHVlcyA9IHRoaXMucHJlb3JkZXIocm9vdC5sZWZ0KTtcclxuICAgICAgY29uc3QgcmlnaHRWYWx1ZXMgPSB0aGlzLnByZW9yZGVyKHJvb3QucmlnaHQpO1xyXG4gICAgICByZXR1cm4gWyByb290LmRhdGEsIC4uLmxlZnRWYWx1ZXMsIC4uLnJpZ2h0VmFsdWVzIF07XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbm9yZGVyKHJvb3Q9dGhpcy5yb290KSB7XHJcbiAgICAgIGlmIChyb290ID09PSBudWxsKVxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICBcclxuICAgICAgY29uc3QgbGVmdFZhbHVlcyA9IHRoaXMuaW5vcmRlcihyb290LmxlZnQpO1xyXG4gICAgICBjb25zdCByaWdodFZhbHVlcyA9IHRoaXMuaW5vcmRlcihyb290LnJpZ2h0KTtcclxuICAgICAgcmV0dXJuIFsgLi4ubGVmdFZhbHVlcywgcm9vdC5kYXRhLCAgLi4ucmlnaHRWYWx1ZXMgXTtcclxuICAgIH1cclxuICBcclxuICAgIHBvc3RvcmRlcihyb290PXRoaXMucm9vdCkge1xyXG4gICAgICBpZiAocm9vdCA9PT0gbnVsbClcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGxlZnRWYWx1ZXMgPSB0aGlzLnBvc3RvcmRlcihyb290LmxlZnQpO1xyXG4gICAgICBjb25zdCByaWdodFZhbHVlcyA9IHRoaXMucG9zdG9yZGVyKHJvb3QucmlnaHQpO1xyXG4gICAgICByZXR1cm4gWyAuLi5sZWZ0VmFsdWVzLCAgLi4ucmlnaHRWYWx1ZXMsIHJvb3QuZGF0YV07XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4vLyAgICAgLy8gQSByZWN1cnNpdmUgZnVuY3Rpb24gdG8gaW5zZXJ0IGEgbmV3IGtleSBpbiBCU1RcclxuLy8gICAgIGZ1bmN0aW9uIGluc2VydFJlYyhyb290LCBrZXkpIHtcclxuXHJcbi8vICAgICAvLyBJZiB0aGUgdHJlZSBpcyBlbXB0eSwgcmV0dXJuIGEgbmV3IG5vZGVcclxuLy8gICAgIGlmIChyb290ID09IG51bGwpIHtcclxuLy8gICAgICAgICByb290ID0gbmV3IE5vZGUoa2V5KTtcclxuLy8gICAgICAgICByZXR1cm4gcm9vdDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyBPdGhlcndpc2UsIHJlY3VyIGRvd24gdGhlIHRyZWVcclxuLy8gICAgIGlmIChrZXkgPCByb290LmtleSlcclxuLy8gICAgICAgICByb290LmxlZnQgPSBpbnNlcnRSZWMocm9vdC5sZWZ0LCBrZXkpO1xyXG4vLyAgICAgZWxzZSBpZiAoa2V5ID4gcm9vdC5rZXkpXHJcbi8vICAgICAgICAgcm9vdC5yaWdodCA9IGluc2VydFJlYyhyb290LnJpZ2h0LCBrZXkpO1xyXG5cclxuLy8gICAgIC8vIFJldHVybiB0aGUgKHVuY2hhbmdlZCkgbm9kZSBwb2ludGVyXHJcbi8vICAgICByZXR1cm4gcm9vdDtcclxuLy8gfVxyXG5cclxuXHJcbiAgZXhwb3J0IHtUcmVlfSIsIlxyXG5cclxuY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcclxuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XHJcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XHJcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgcHJldHR5SFRNTCA9IChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSA9PiB7XHJcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJlc3VsdCArPSBwcmV0dHlIVE1MKG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICByZXN1bHQgKz0gYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1cXG5gO1xyXG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJlc3VsdCArPSBwcmV0dHlIVE1MKG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRIZWlnaHQobm9kZSkge1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbGVmdEhlaWdodCA9IGdldEhlaWdodChub2RlLmxlZnQpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0SGVpZ2h0ID0gZ2V0SGVpZ2h0KG5vZGUucmlnaHQpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChsZWZ0SGVpZ2h0LCByaWdodEhlaWdodCkgKyAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge2dldEhlaWdodCxwcmV0dHlIVE1MLCBwcmV0dHlQcmludH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7VHJlZX0gZnJvbSBcIi4vVHJlZVwiXHJcbmltcG9ydCB7Z2V0SGVpZ2h0LHByZXR0eUhUTUwsIHByZXR0eVByaW50fSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIlxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgYXJyMSA9IFs2MiwgOCwgMTksIDkyLCA1MSwgNTIsIDg1LCAyOCwgNzQsIDBdXHJcbmNvbnNvbGUubG9nKGFycjEpXHJcbmNvbnN0IHRyZWUgPSBuZXcgVHJlZShhcnIxKVxyXG4vLyBwcmV0dHlQcmludCh0cmVlLnJvb3QpXHJcbi8vIHRyZWUuaW5zZXJ0Tm9kZSg5KVxyXG4vLyB0cmVlLmluc2VydE5vZGUoOTk5KVxyXG4vLyBwcmV0dHlQcmludCh0cmVlLnJvb3QpXHJcblxyXG5cclxuLy8gbWFpbi5hcHBlbmRDaGlsZChzY3JlZW4pXHJcblxyXG5cclxuXHJcblxyXG4vLyB0cmVlLmRlbGV0ZU5vZGUodHJlZS5yb290LDUyKVxyXG5wcmV0dHlQcmludCh0cmVlLnJvb3QpXHJcbmNvbnNvbGUubG9nKHRyZWUuYnJlYWR0aEZpcnN0VmFsdWVzKCkpXHJcbmNvbnNvbGUubG9nKGBpbm9yZGVyOiAke3RyZWUuaW5vcmRlcigpfWApXHJcbmNvbnNvbGUubG9nKGBwcmVvcmRlcjogJHt0cmVlLnByZW9yZGVyKCl9YClcclxuY29uc29sZS5sb2coYHBvc3RvcmRlcjogJHt0cmVlLnBvc3RvcmRlcigpfWApXHJcbmNvbnNvbGUubG9nKGBIZWlnaHQ6ICR7Z2V0SGVpZ2h0KHRyZWUucm9vdCl9YClcclxuXHJcblxyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlZVwiKVxyXG4vLyBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuY29uc3QgcHJldHR5cHJpbnQgPSBwcmV0dHlIVE1MKHRyZWUucm9vdClcclxubWFpbi50ZXh0Q29udGVudCA9IHByZXR0eXByaW50Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9