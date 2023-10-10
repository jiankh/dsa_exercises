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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbkU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDakU7QUFDQSxnQ0FBZ0MsT0FBTyxFQUFFLHlCQUF5QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXHJcbmNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG5cclxuY2xhc3MgTm9kZXtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBUcmVlIHtcclxuICBjb25zdHJ1Y3RvcihhcnIpIHtcclxuICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gWy4uLm5ldyBTZXQoYXJyKV0uc29ydCgoYSwgYikgPT4gYSAtIGIpOyAvL3JlbW92ZXMgZHVwbGljYXRlcyBhbmQgc29ydHMgaXRcclxuICAgIHRoaXMucm9vdCA9IHRoaXMuYnVpbGRUcmVlKHNvcnRlZEFycmF5KTtcclxuICB9XHJcblxyXG4gIGJ1aWxkVHJlZShzb3J0ZWRBcnJheSkge1xyXG4gICAgLy90YWtlcyBhcnIgYW5kIGJ1aWxkIGEgYmFsYW5jZWQgdHJlZSBmdWxsIG9mIG5vZGVzXHJcblxyXG4gICAgaWYgKHNvcnRlZEFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gLy9jaGVjayBpZiB0aGVyZSBpcyBldmVuIGRhdGFcclxuICAgIGNvbnN0IG1pZGRsZUluZGV4ID0gTWF0aC5mbG9vcihzb3J0ZWRBcnJheS5sZW5ndGggLyAyKTtcclxuICAgIGNvbnN0IGxlZnRTaWRlQXJyID0gc29ydGVkQXJyYXkuc2xpY2UoMCwgbWlkZGxlSW5kZXgpO1xyXG4gICAgY29uc3QgcmlnaHRTaWRlQXJyID0gc29ydGVkQXJyYXkuc2xpY2UobWlkZGxlSW5kZXggKyAxKTtcclxuXHJcbiAgICBjb25zdCByb290ID0gbmV3IE5vZGUoc29ydGVkQXJyYXlbbWlkZGxlSW5kZXhdKTtcclxuICAgIHJvb3QubGVmdCA9IHRoaXMuYnVpbGRUcmVlKGxlZnRTaWRlQXJyKTtcclxuICAgIHJvb3QucmlnaHQgPSB0aGlzLmJ1aWxkVHJlZShyaWdodFNpZGVBcnIpO1xyXG5cclxuICAgIHJldHVybiByb290O1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0Tm9kZShkYXRhKSB7XHJcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKGRhdGEpO1xyXG5cclxuICAgIGlmICh0aGlzLnJvb3QgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJvb3QgPSBub2RlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcHJldiA9IG51bGw7XHJcbiAgICAgIGxldCB0ZW1wID0gdGhpcy5yb290O1xyXG5cclxuICAgICAgd2hpbGUgKHRlbXAgIT09IG51bGwpIHtcclxuICAgICAgICBwcmV2ID0gdGVtcDtcclxuICAgICAgICBpZiAoZGF0YSA8IHRlbXAuZGF0YSkge1xyXG4gICAgICAgICAgdGVtcCA9IHRlbXAubGVmdDtcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPiB0ZW1wLmRhdGEpIHtcclxuICAgICAgICAgIHRlbXAgPSB0ZW1wLnJpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBEdXBsaWNhdGUgdmFsdWUsIHNraXAgaW5zZXJ0aW9uXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBOb3cgdGhhdCB3ZSd2ZSBmb3VuZCB0aGUgY29ycmVjdCBwb3NpdGlvbiwgaW5zZXJ0IHRoZSBuZXcgbm9kZS5cclxuICAgICAgaWYgKGRhdGEgPCBwcmV2LmRhdGEpIHtcclxuICAgICAgICBwcmV2LmxlZnQgPSBub2RlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByZXYucmlnaHQgPSBub2RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByYW5kb21BcnJheSA9IChzaXplKSA9PiB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2l6ZSB9LCAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApKTtcclxuICB9XHJcblxyXG5jb25zdCBkZXB0aEZpcnN0VmFsdWVzID0gKHJvb3QpID0+IHtcclxuICAgIGlmIChyb290ID09PSBudWxsKVxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICBcclxuICAgIGNvbnN0IGxlZnRWYWx1ZXMgPSBkZXB0aEZpcnN0VmFsdWVzKHJvb3QubGVmdCk7XHJcbiAgICBjb25zdCByaWdodFZhbHVlcyA9IGRlcHRoRmlyc3RWYWx1ZXMocm9vdC5yaWdodCk7XHJcbiAgICByZXR1cm4gWyByb290LmRhdGEsIC4uLmxlZnRWYWx1ZXMsIC4uLnJpZ2h0VmFsdWVzIF07XHJcbn0gXHJcblxyXG5jb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSA9PiB7XHJcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcclxuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcclxuICAgICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4vLyAgICAgLy8gQSByZWN1cnNpdmUgZnVuY3Rpb24gdG8gaW5zZXJ0IGEgbmV3IGtleSBpbiBCU1RcclxuLy8gICAgIGZ1bmN0aW9uIGluc2VydFJlYyhyb290LCBrZXkpIHtcclxuXHJcbi8vICAgICAvLyBJZiB0aGUgdHJlZSBpcyBlbXB0eSwgcmV0dXJuIGEgbmV3IG5vZGVcclxuLy8gICAgIGlmIChyb290ID09IG51bGwpIHtcclxuLy8gICAgICAgICByb290ID0gbmV3IE5vZGUoa2V5KTtcclxuLy8gICAgICAgICByZXR1cm4gcm9vdDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyBPdGhlcndpc2UsIHJlY3VyIGRvd24gdGhlIHRyZWVcclxuLy8gICAgIGlmIChrZXkgPCByb290LmtleSlcclxuLy8gICAgICAgICByb290LmxlZnQgPSBpbnNlcnRSZWMocm9vdC5sZWZ0LCBrZXkpO1xyXG4vLyAgICAgZWxzZSBpZiAoa2V5ID4gcm9vdC5rZXkpXHJcbi8vICAgICAgICAgcm9vdC5yaWdodCA9IGluc2VydFJlYyhyb290LnJpZ2h0LCBrZXkpO1xyXG5cclxuLy8gICAgIC8vIFJldHVybiB0aGUgKHVuY2hhbmdlZCkgbm9kZSBwb2ludGVyXHJcbi8vICAgICByZXR1cm4gcm9vdDtcclxuLy8gfVxyXG5cclxuXHJcbmNvbnN0IGFycjEgPSBbNjIsIDgsIDE5LCA5MiwgNTEsIDUyLCA4NSwgMjgsIDc0LCAwXVxyXG5jb25zb2xlLmxvZyhhcnIxKVxyXG5jb25zdCB0cmVlID0gbmV3IFRyZWUoYXJyMSlcclxucHJldHR5UHJpbnQodHJlZS5yb290KVxyXG50cmVlLmluc2VydE5vZGUoOSlcclxuc2NyZWVuLmlubmVySFRNTCA9IHByZXR0eVByaW50KHRyZWUucm9vdClcclxubWFpbi5hcHBlbmRDaGlsZChzY3JlZW4pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==