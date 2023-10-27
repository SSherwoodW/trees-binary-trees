/** TreeNode: node for a general tree. */

class TreeNode {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    /** sumValues(): add up all of the values in the tree. */

    sumValues() {
        if (!this.root) return 0;

        let sum = this.root.val;

        function sumHelper(node) {
            for (let child of node.children) {
                sum += child.val;
                if (child.children !== null) {
                    sumHelper(child);
                }
            }
        }

        sumHelper(this.root);
        return sum;
    }

    /** countEvens(): count all of the nodes in the tree with even values. */

    countEvens() {
        if (!this.root) return 0;

        let total = 0;

        function evensCounter(node) {
            for (let child of node.children) {
                if (child.val % 2 == 0) total += 1;
                if (child.children !== null) {
                    evensCounter(child);
                }
            }
        }

        evensCounter(this.root);
        return total;
    }

    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */

    numGreater(lowerBound) {
        if (!this.root) return 0;

        let total = 0;

        if (this.root.val > lowerBound) total += 1;

        function compareAll(node) {
            for (let child of node.children) {
                if (child.val > lowerBound) total += 1;
                if (child.children !== null) {
                    compareAll(child);
                }
            }
        }

        compareAll(this.root);
        return total;
    }
}

module.exports = { Tree, TreeNode };
