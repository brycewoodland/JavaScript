class BinaryTree {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    // Max Depth
    maxDepth(root) {
        if (!root) {
            return 0;
        }

        const leftDepth = this.maxDepth(root.left);
        const rightDepth = this.maxDepth(root.right);

        return 1 + Math.max(leftDepth, rightDepth);
    };

    // Path Sum
    pathSum = (root, target) => {
        if (!root) {
            return false;
        }

        if (!root.left && !root.right) {
            return target === root.val;
        }

        target -= root.val;

        return this.pathSum(root.left, target) || this.pathSum(root.right, target);
    };

    // Validate BST
    validateBST(root) {
        const isValid = (root, min, max) => {
            if (!root) {
                return true;
            }

            if (root.val <= min || root.val >= max) {
                return false;
            }

            return isValid(root.left, min, root.val) && isValid(root.right, root.val, max);
        }
        return isValid(root, -Infinity, Infinity);
    };

    // Good Nodes
    goodNodes(root) {
        const isGood = (root, maxSoFar) => {
            if (!root) {
                return 0
            }

            let count = 0;
            if (root.val >= maxSoFar) {
                count += 1;
                maxSoFar = root.val;
            }

            const left = isGood(root.left, maxSoFar);
            const right = isGood(root.right, maxSoFar);

            return count + left + right;
        }
        return isGood(root, -Infinity);
    };
}

const root = new BinaryTree(5);
root.left = new BinaryTree(3);
root.right = new BinaryTree(7);

root.left.left = new BinaryTree(2);
root.left.right = new BinaryTree(4);

root.right.left = null;
root.right.right = new BinaryTree(9);

console.log('Good Nodes Count:', root.goodNodes(root));

console.log('Is Valid BST?', root.validateBST(root));