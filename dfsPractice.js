// Max Depth
const maxDepth = (root) => {
    if (!root) {
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
};

// Path Sum
const pathSum = (root, target) => {
    if (!root) {
        return false;
    }

    if (!root.left && !root.right) {
        return target === root.val;
    }

    target -= root.val;

    return pathSum(root.left, target) || pathSum(root.right, target);
};

// Validate BST
function validateBST(root) {
    function isValid(root, min, max) {
        if (!root) {
            return true;
        }

        if (root.val <= min || root.val >= max) {
            return false;
        }

        return isValid(root.left, min, root.val) && isValid(root.right, root.val, max);
    }
    return isValid(root, -Infinity, Infinity);
}