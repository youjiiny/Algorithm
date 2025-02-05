/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null){
        return 0;
    }
    let max_depth = 0;
    const queue = [];
    queue.push([root, 1]);

    while(queue.length){
        const [cur_node, cur_depth] = queue.shift();
        max_depth = Math.max(max_depth, cur_depth);

        if(cur_node.left){
            queue.push([cur_node.left, cur_depth + 1]);
        }
        if(cur_node.right){
            queue.push([cur_node.right, cur_depth + 1]);
        }
    }
    return max_depth;
};