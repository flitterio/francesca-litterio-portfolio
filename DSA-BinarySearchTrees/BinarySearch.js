class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        // If the tree is empty then this key being inserted is the root node of the tree
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }

        /* If the tree already exists, then start at the root, 
           and compare it to the key you want to insert.
           If the new key is less than the node's key 
           then the new node needs to live in the left-hand branch */
        else if (key < this.key) {
            /* If the existing node does not have a left child, 
               meaning that if the `left` pointer is empty, 
               then we can just instantiate and insert the new node 
               as the left child of that node, passing `this` as the parent */
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            /* If the node has an existing left child, 
               then we recursively call the `insert` method 
               so the node is added further down the tree */
            else {
                this.left.insert(key, value);
            }
        }
        /* Similarly, if the new key is greater than the node's key 
           then you do the same thing, but on the right-hand side */
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        // If the item is found at the root then return that value
        if (this.key == key) {
            return this.value;
        }
        /* If the item you are looking for is less than the root 
           then follow the left child.
           If there is an existing left child, 
           then recursively check its left and/or right child
           until you find the item */
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        /* If the item you are looking for is greater than the root 
           then follow the right child.
           If there is an existing right child, 
           then recursively check its left and/or right child
           until you find the item */
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        // You have searched the tree and the item is not in the tree
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            /* If the node only has a left child, 
               then you replace the node with its left child */
            else if (this.left) {
                this._replaceWith(this.left);
            }
            /* And similarly if the node only has a right child 
               then you replace it with its right child */
            else if (this.right) {
                this._replaceWith(this.right);
            }
            /* If the node has no children then
               simply remove it and any references to it 
               by calling "this._replaceWith(null)" */
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }

    _findMax(){
        if(!this.right){
            return this;
        }
        return this.right._findMax();
    }
}

let heights = [];
let highest = 0; 

function findHeight(tree, currHeight){

    //console.log('findheight called')
    if(tree.key == null){
        //console.log('tree.key == null')
        currHeight = 0;
        return currHeight;
    }

    if(tree.key && !tree.left && !tree.right){
        //console.log('tree.key && !tree.left && !tree.right')
        heights.push(currHeight);
        if (currHeight > highest){
            highest = currHeight;
        }
    }

    if(tree.left !== null){
        //console.log('tree.left')
        findHeight(tree.left, currHeight + 1);
    }

    if(tree.right !== null){
       // console.log('tree.right')
        findHeight(tree.right, currHeight + 1);
    }

    return highest;
    
}



function isBTS(tree){
    if (tree.key == null){
        return 'Empty Tree'
    }
    if(tree.key && !tree.left && !tree.right) {
        return true;
    }
    if(tree.left && tree.left.value < tree.value){
       return isBTS(tree.left)
    }
    if(tree.right && tree.right.value > tree.value){
        return isBTS(tree.right)
     }
     else{
         return false;
     }

}

function thirdLarge(tree){
    let largest = {};
    let second = {};
    let third = {};
    if(tree.key == null){
        return 'Empty tree'
    }
        largest = tree._findMax();
        tree.remove(largest.key);
        
        second = tree._findMax();
        tree.remove(second.key);

        third = tree._findMax();

        if(second == null || third == null){
            return 'Tree not long enough'
        }
        else{
            return third;
        }

}

function isBalanced(tree){
    findHeight(tree, 0);
    console.log('heights', heights)
    for(let i=0; i < heights.length; i++){
        if(heights[i] === heights[i + 1] || heights[i + 1] === null){
            return true;
        } else {
            return false;
        }
    }

}

function areSame(arr1, arr2){
    // if(arr1.length === arr2.length && arr1[0] === arr2[0]){
    // }
    //for every element, the elements in the left and right subtrees appear after it in both arrays, and same is true for the roots of the left and right subtrees

    //check if next smaller and next greater elements are the same in both arrays!!

    let smaller1 = [];
    let smaller2 = [];
    let greater1 = [];
    let greater2 = [];
// push smaller and larget elements into these arrays then compare if arrays are the same
// but this should be recursive shouldn't it?
}



var test = new BinarySearchTree();

test.insert(3, 3);
test.insert(1, 1);
test.insert(4, 4);
test.insert(6, 6);
test.insert(9, 9);
test.insert(2, 2);
test.insert(5, 5);
test.insert(7, 7);

console.log(test);
console.log(isBTS(test));
console.log(thirdLarge(test));

console.log(findHeight(test, 1))

console.log(heights);

console.log(isBalanced(test))