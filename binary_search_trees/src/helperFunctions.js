
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

  

export {refreshBalance,
        getHeight,
        prettyHTML, 
        prettyPrint, 
        renderTree, 
        randomArray, 
        formatArray,
        findNode}