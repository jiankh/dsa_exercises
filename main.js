/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

function getHeight(node) {
  if (node === null) {
      return 0;
  } else {
      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
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
// prettyPrint(tree.root)
// tree.insertNode(9)
// tree.insertNode(999)
// prettyPrint(tree.root)
main.appendChild(screen)

// tree.deleteNode(tree.root,52)
prettyPrint(tree.root)
console.log(tree.breadthFirstValues())
console.log(`inorder: ${tree.inorder()}`)
console.log(`preorder: ${tree.preorder()}`)
console.log(`postorder: ${tree.postorder()}`)
console.log(`Height: ${getHeight(tree.root)}`)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTyxFQUFFLHlCQUF5QjtBQUNuRTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVTtBQUNqRTtBQUNBLGdDQUFnQyxPQUFPLEVBQUUseUJBQXlCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDLHlCQUF5QixnQkFBZ0I7QUFDekMsMEJBQTBCLGlCQUFpQjtBQUMzQyx1QkFBdUIscUJBQXFCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG5jb25zdCBzY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuXHJcbmNsYXNzIE5vZGV7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxyXG4gICAgICAgIHRoaXMubGVmdCA9IG51bGxcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgVHJlZSB7XHJcbiAgY29uc3RydWN0b3IoYXJyKSB7XHJcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IFsuLi5uZXcgU2V0KGFycildLnNvcnQoKGEsIGIpID0+IGEgLSBiKTsgLy9yZW1vdmVzIGR1cGxpY2F0ZXMgYW5kIHNvcnRzIGl0XHJcbiAgICB0aGlzLnJvb3QgPSB0aGlzLmJ1aWxkVHJlZShzb3J0ZWRBcnJheSk7IC8vYXMgc29vbiBhcyBhbiBvYmogaXMgbWFkZSB3LyBjbGFzcyBUcmVlLCB3aWxsIHRyaWdnZXIgYnVpbGRUcmVlKClcclxuICB9XHJcblxyXG4gIGJ1aWxkVHJlZShzb3J0ZWRBcnJheSkge1xyXG4gICAgLy90YWtlcyBhcnIgYW5kIGJ1aWxkIGEgYmFsYW5jZWQgdHJlZSBmdWxsIG9mIG5vZGVzXHJcblxyXG4gICAgaWYgKHNvcnRlZEFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gLy9jaGVjayBpZiB0aGVyZSBpcyBldmVuIGRhdGFcclxuICAgIGNvbnN0IG1pZGRsZUluZGV4ID0gTWF0aC5mbG9vcihzb3J0ZWRBcnJheS5sZW5ndGggLyAyKTtcclxuICAgIGNvbnN0IGxlZnRTaWRlQXJyID0gc29ydGVkQXJyYXkuc2xpY2UoMCwgbWlkZGxlSW5kZXgpO1xyXG4gICAgY29uc3QgcmlnaHRTaWRlQXJyID0gc29ydGVkQXJyYXkuc2xpY2UobWlkZGxlSW5kZXggKyAxKTtcclxuXHJcbiAgICBjb25zdCByb290ID0gbmV3IE5vZGUoc29ydGVkQXJyYXlbbWlkZGxlSW5kZXhdKTtcclxuICAgIHJvb3QubGVmdCA9IHRoaXMuYnVpbGRUcmVlKGxlZnRTaWRlQXJyKTtcclxuICAgIHJvb3QucmlnaHQgPSB0aGlzLmJ1aWxkVHJlZShyaWdodFNpZGVBcnIpO1xyXG5cclxuICAgIHJldHVybiByb290O1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0Tm9kZShkYXRhKSB7XHJcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKGRhdGEpO1xyXG5cclxuICAgIGlmICh0aGlzLnJvb3QgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJvb3QgPSBub2RlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcHJldiA9IG51bGw7XHJcbiAgICAgIGxldCB0ZW1wID0gdGhpcy5yb290O1xyXG5cclxuICAgICAgd2hpbGUgKHRlbXAgIT09IG51bGwpIHtcclxuICAgICAgICBwcmV2ID0gdGVtcDtcclxuICAgICAgICBpZiAoZGF0YSA8IHRlbXAuZGF0YSkge1xyXG4gICAgICAgICAgdGVtcCA9IHRlbXAubGVmdDtcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPiB0ZW1wLmRhdGEpIHtcclxuICAgICAgICAgIHRlbXAgPSB0ZW1wLnJpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBEdXBsaWNhdGUgdmFsdWUsIHNraXAgaW5zZXJ0aW9uXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBOb3cgdGhhdCB3ZSd2ZSBmb3VuZCB0aGUgY29ycmVjdCBwb3NpdGlvbiwgaW5zZXJ0IHRoZSBuZXcgbm9kZS5cclxuICAgICAgaWYgKGRhdGEgPCBwcmV2LmRhdGEpIHtcclxuICAgICAgICBwcmV2LmxlZnQgPSBub2RlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByZXYucmlnaHQgPSBub2RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaW5kTWluVmFsdWVOb2RlKG5vZGUpIHtcclxuICAgIGxldCBjdXJyZW50ID0gbm9kZTtcclxuICAgIHdoaWxlIChjdXJyZW50LmxlZnQgIT09IG51bGwpIHtcclxuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgfVxyXG5cclxuICBkZWxldGVOb2RlKHJvb3QsIGspIHtcclxuICAgIC8vIEJhc2UgY2FzZSwgbm8gcm9vdCBzbyBubyB0cmVlIHNvIG5vdGhpbmcgdG8gZGVsZXRlXHJcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gcm9vdDtcclxuICAgIH1cclxuICAgXHJcbiAgICAvLyBSZWN1cnNpdmUgY2FsbHMgZm9yIGFuY2VzdG9ycywgZ28gdGh1ciB0aGUgdHJlZSB0byBmaW5kIHdoZXJlIGRhdGEgPSBrXHJcbiAgICBpZiAocm9vdC5kYXRhID4gaykge1xyXG4gICAgICByb290LmxlZnQgPSB0aGlzLmRlbGV0ZU5vZGUocm9vdC5sZWZ0LCBrKTtcclxuICAgICAgcmV0dXJuIHJvb3Q7IC8vaWYgaXQgcmVhY2hlcyBudWxsIGZyb20gbGluZSBhYm92ZSB0aGVuIGlzIG5vdCBpbiB0aGlzIGJyYW5jaCBhbmQgcmV0dXJuIHRoZSBvcmlnaW5hbCByb290XHJcbiAgICB9IGVsc2UgaWYgKHJvb3QuZGF0YSA8IGspIHtcclxuICAgICAgcm9vdC5yaWdodCA9IHRoaXMuZGVsZXRlTm9kZShyb290LnJpZ2h0LCBrKTtcclxuICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLy8gV2UgcmVhY2ggaGVyZSB3aGVuIHJvb3QgaXMgdGhlIG5vZGVcclxuICAgIC8vIHRvIGJlIGRlbGV0ZWQuIFdoZW4gdGhlIGNhbGwgZ2V0cyBoZXJlIGl0IG1lYW5zIHJvb3QuZGF0YSA9IGtcclxuICAgXHJcbiAgICAvLyBJZiBvbmUgb2YgdGhlIGNoaWxkcmVuIGlzIGVtcHR5XHJcbiAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiByb290LnJpZ2h0IC8vdGhpcyB3aWxsIHNldCB0aGUgbGVmdC9yaWdodCBvZiB0aGUgbm9kZSBhYm92ZSBsZXZlbCB0byB0aGlzKERlbGV0aW5nIHRoZSBjdXJyZW50IG5vZGUpKGNoZWNrIHRoZSByZWN1cnNpdmUgY2FsbCBhYm92ZSB0aGlzKVxyXG4gICAgfSBlbHNlIGlmIChyb290LnJpZ2h0ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiByb290LmxlZnRcclxuICAgIH1cclxuICAgXHJcbiAgICAvLyBJZiBib3RoIGNoaWxkcmVuIGV4aXN0XHJcbiAgICAvLyBOb2RlIHdpdGggdHdvIGNoaWxkcmVuLCBmaW5kIHRoZSBpbm9yZGVyIHN1Y2Nlc3NvciAoc21hbGxlc3QgaW4gdGhlIHJpZ2h0IHN1YnRyZWUpXHJcbiAgICBsZXQgbWluVmFsdWVOb2RlID0gdGhpcy5maW5kTWluVmFsdWVOb2RlKHJvb3QucmlnaHQpO1xyXG5cclxuICAgIC8vIENvcHkgdGhlIGlub3JkZXIgc3VjY2Vzc29yJ3MgY29udGVudCB0byB0aGlzIG5vZGVcclxuICAgIHJvb3QuZGF0YSA9IG1pblZhbHVlTm9kZS5kYXRhO1xyXG5cclxuICAgIC8vIERlbGV0ZSB0aGUgaW5vcmRlciBzdWNjZXNzb3JcclxuICAgIHJvb3QucmlnaHQgPSB0aGlzLmRlbGV0ZU5vZGUocm9vdC5yaWdodCwgbWluVmFsdWVOb2RlLmRhdGEpO1xyXG5cclxuICAgIHJldHVybiByb290O1xyXG4gICBcclxuICBcclxuICB9XHJcblxyXG4gIGJyZWFkdGhGaXJzdFZhbHVlcygpIHtcclxuICAgIGNvbnN0IHJvb3QgPSB0aGlzLnJvb3RcclxuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gW10gLy9pZiBubyByb290IHRoZW4gbm8gdHJlZSB0aGVuIGp1c3QgcmV0dXJuIGVtcHR5IGFycmF5XHJcblxyXG4gICAgY29uc3QgdmFsdWVzID0gW10gLy9pbml0aWFsaXplIGEgYXJyYXkgdG8gc3RvcmUgZmluYWwgdmFsdWVzXHJcbiAgICBjb25zdCBxdWV1ZSA9W3Jvb3RdIC8vYnJlYWR0aGZpcnN0IHVzZXMgYSBxdWV1ZSBzeXN0ZW1cclxuXHJcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gcXVldWUuc2hpZnQoKSAvL3NoaWZ0IHRha2VzIHRoZSBmaXJzdCBpbmRleCBhbmQgcmV0dXJucyBpdFxyXG4gICAgICB2YWx1ZXMucHVzaChjdXJyZW50LmRhdGEpXHJcblxyXG4gICAgICAvL3dlIHB1c2ggdGhlIHN1YnRyZWVzIG9mIHRoZSBjdXJyZW50IG5vZGUgaW50byB0aGUgcXVldWVcclxuICAgICAgaWYgKGN1cnJlbnQubGVmdCAhPT0gbnVsbCkge3F1ZXVlLnB1c2goY3VycmVudC5sZWZ0KX1cclxuICAgICAgaWYgKGN1cnJlbnQucmlnaHQgIT09IG51bGwpIHtxdWV1ZS5wdXNoKGN1cnJlbnQucmlnaHQpfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlc1xyXG4gIH1cclxuXHJcbiAgcHJlb3JkZXIocm9vdD10aGlzLnJvb3QpIHtcclxuICAgIGlmIChyb290ID09PSBudWxsKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIFxyXG4gICAgY29uc3QgbGVmdFZhbHVlcyA9IHRoaXMucHJlb3JkZXIocm9vdC5sZWZ0KTtcclxuICAgIGNvbnN0IHJpZ2h0VmFsdWVzID0gdGhpcy5wcmVvcmRlcihyb290LnJpZ2h0KTtcclxuICAgIHJldHVybiBbIHJvb3QuZGF0YSwgLi4ubGVmdFZhbHVlcywgLi4ucmlnaHRWYWx1ZXMgXTtcclxuICB9XHJcblxyXG4gIGlub3JkZXIocm9vdD10aGlzLnJvb3QpIHtcclxuICAgIGlmIChyb290ID09PSBudWxsKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIFxyXG4gICAgY29uc3QgbGVmdFZhbHVlcyA9IHRoaXMuaW5vcmRlcihyb290LmxlZnQpO1xyXG4gICAgY29uc3QgcmlnaHRWYWx1ZXMgPSB0aGlzLmlub3JkZXIocm9vdC5yaWdodCk7XHJcbiAgICByZXR1cm4gWyAuLi5sZWZ0VmFsdWVzLCByb290LmRhdGEsICAuLi5yaWdodFZhbHVlcyBdO1xyXG4gIH1cclxuXHJcbiAgcG9zdG9yZGVyKHJvb3Q9dGhpcy5yb290KSB7XHJcbiAgICBpZiAocm9vdCA9PT0gbnVsbClcclxuICAgIHJldHVybiBbXTtcclxuICBcclxuICAgIGNvbnN0IGxlZnRWYWx1ZXMgPSB0aGlzLnBvc3RvcmRlcihyb290LmxlZnQpO1xyXG4gICAgY29uc3QgcmlnaHRWYWx1ZXMgPSB0aGlzLnBvc3RvcmRlcihyb290LnJpZ2h0KTtcclxuICAgIHJldHVybiBbIC4uLmxlZnRWYWx1ZXMsICAuLi5yaWdodFZhbHVlcywgcm9vdC5kYXRhXTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhlaWdodChub2RlKSB7XHJcbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbGVmdEhlaWdodCA9IGdldEhlaWdodChub2RlLmxlZnQpO1xyXG4gICAgICBjb25zdCByaWdodEhlaWdodCA9IGdldEhlaWdodChub2RlLnJpZ2h0KTtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KGxlZnRIZWlnaHQsIHJpZ2h0SGVpZ2h0KSArIDE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgcmFuZG9tQXJyYXkgPSAoc2l6ZSkgPT4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHNpemUgfSwgKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSk7XHJcbiAgfVxyXG5cclxuY29uc3QgZGVwdGhGaXJzdFZhbHVlcyA9IChyb290KSA9PiB7XHJcbiAgICBpZiAocm9vdCA9PT0gbnVsbClcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgXHJcbiAgICBjb25zdCBsZWZ0VmFsdWVzID0gZGVwdGhGaXJzdFZhbHVlcyhyb290LmxlZnQpO1xyXG4gICAgY29uc3QgcmlnaHRWYWx1ZXMgPSBkZXB0aEZpcnN0VmFsdWVzKHJvb3QucmlnaHQpO1xyXG4gICAgcmV0dXJuIFsgcm9vdC5kYXRhLCAuLi5sZWZ0VmFsdWVzLCAuLi5yaWdodFZhbHVlcyBdO1xyXG59IFxyXG5cclxuY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcclxuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XHJcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XHJcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuLy8gICAgIC8vIEEgcmVjdXJzaXZlIGZ1bmN0aW9uIHRvIGluc2VydCBhIG5ldyBrZXkgaW4gQlNUXHJcbi8vICAgICBmdW5jdGlvbiBpbnNlcnRSZWMocm9vdCwga2V5KSB7XHJcblxyXG4vLyAgICAgLy8gSWYgdGhlIHRyZWUgaXMgZW1wdHksIHJldHVybiBhIG5ldyBub2RlXHJcbi8vICAgICBpZiAocm9vdCA9PSBudWxsKSB7XHJcbi8vICAgICAgICAgcm9vdCA9IG5ldyBOb2RlKGtleSk7XHJcbi8vICAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLy8gT3RoZXJ3aXNlLCByZWN1ciBkb3duIHRoZSB0cmVlXHJcbi8vICAgICBpZiAoa2V5IDwgcm9vdC5rZXkpXHJcbi8vICAgICAgICAgcm9vdC5sZWZ0ID0gaW5zZXJ0UmVjKHJvb3QubGVmdCwga2V5KTtcclxuLy8gICAgIGVsc2UgaWYgKGtleSA+IHJvb3Qua2V5KVxyXG4vLyAgICAgICAgIHJvb3QucmlnaHQgPSBpbnNlcnRSZWMocm9vdC5yaWdodCwga2V5KTtcclxuXHJcbi8vICAgICAvLyBSZXR1cm4gdGhlICh1bmNoYW5nZWQpIG5vZGUgcG9pbnRlclxyXG4vLyAgICAgcmV0dXJuIHJvb3Q7XHJcbi8vIH1cclxuXHJcblxyXG5jb25zdCBhcnIxID0gWzYyLCA4LCAxOSwgOTIsIDUxLCA1MiwgODUsIDI4LCA3NCwgMF1cclxuY29uc29sZS5sb2coYXJyMSlcclxuY29uc3QgdHJlZSA9IG5ldyBUcmVlKGFycjEpXHJcbi8vIHByZXR0eVByaW50KHRyZWUucm9vdClcclxuLy8gdHJlZS5pbnNlcnROb2RlKDkpXHJcbi8vIHRyZWUuaW5zZXJ0Tm9kZSg5OTkpXHJcbi8vIHByZXR0eVByaW50KHRyZWUucm9vdClcclxubWFpbi5hcHBlbmRDaGlsZChzY3JlZW4pXHJcblxyXG4vLyB0cmVlLmRlbGV0ZU5vZGUodHJlZS5yb290LDUyKVxyXG5wcmV0dHlQcmludCh0cmVlLnJvb3QpXHJcbmNvbnNvbGUubG9nKHRyZWUuYnJlYWR0aEZpcnN0VmFsdWVzKCkpXHJcbmNvbnNvbGUubG9nKGBpbm9yZGVyOiAke3RyZWUuaW5vcmRlcigpfWApXHJcbmNvbnNvbGUubG9nKGBwcmVvcmRlcjogJHt0cmVlLnByZW9yZGVyKCl9YClcclxuY29uc29sZS5sb2coYHBvc3RvcmRlcjogJHt0cmVlLnBvc3RvcmRlcigpfWApXHJcbmNvbnNvbGUubG9nKGBIZWlnaHQ6ICR7Z2V0SGVpZ2h0KHRyZWUucm9vdCl9YCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=