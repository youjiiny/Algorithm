let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();
let result = '';

const tree = {};
for(element of input) {
   const [item,left,right] = element.split(' ');
   tree[item] = [left,right];   
}

const preorder = (node) => {
   if(node === '.') return;
   const [left,right] = tree[node];
   result += node;
   preorder(left); 
   preorder(right);	
}

const inorder = (node) => {
   if(node === '.') return;
   const [left,right] = tree[node];
   inorder(left); 
   result += node;
   inorder(right);	
}

const postorder = (node) => {
   if(node === '.') return;
   const [left,right] = tree[node];
   postorder(left); 
   postorder(right);
   result += node;
}

preorder('A');
result += '\n';
inorder('A');
result += '\n';
postorder('A');
console.log(result);
