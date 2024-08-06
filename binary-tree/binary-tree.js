class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const deepthFirstValue = (root) => {
  if (!!root === false) return [];

  const results = [];
  const stack = [root];

  while (stack.length) {
    const curr = stack.pop();
    results.push(curr.val);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  console.log(results);
};

const breadthFirstValuesFirstIdea = (root) => {
  if (!!root === false) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    let curr = queue.length > 1 ? queue.shift() : queue.pop();
    result.push(curr.val);

    if (curr.left && curr.right) {
      queue.push(curr.left, curr.right);
    } else if (curr.left) {
      queue.push(curr.left);
    } else if (curr.right) {
      queue.push(curr.right);
    }
  }
  return result;
};

const breadthFirstValuesOptm = (root) => {
  if (!!root === false) return [];

  const results = [];
  const queue = [root];

  while (queue.length) {
    const curr = queue.shift();
    results.push(curr.val);

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return results;
};

const treeIncludes = (root, value) => {
  if (!!root === false) return false;

  const queue = [root];

  while (queue.length) {
    const curr = queue.shift();
    if (curr.val === value) return true;

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return false;
};

const treeSum = (root) => {
  if (!!root === false) return 0;

  let sum = 0;
  const queue = [root];

  while (queue.length) {
    const curr = queue.shift();
    sum += curr.val;

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return sum;
};

const treeMinValue = (root) => {
  if (!!root === false) return 0;
  let min = Infinity;

  const queue = [root];

  while (queue.length) {
    const curr = queue.shift();

    if (curr.val < min) min = curr.val;

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return min;
};

const treeSumRecursive = (root) => {
  if (!!root === false) return 0;

  return root.val + treeSumRecursive(root.left) + treeSumRecursive(root.right);
};

const deepthFirstValueRecursive = (root) => {
  if (!!root === false) return [];

  const rightVal = deepthFirstValueRecursive(root.right);
  const leftVal = deepthFirstValueRecursive(root.left);

  return [root.val, ...leftVal, ...rightVal];
};

const treeIncludesRecursive = (root, value) => {
  if (!!root === false) return false;
  if (root.val === value) return true;

  return (
    treeIncludes(root.left, value) || treeIncludesRecursive(root.right, value)
  );
};

const treeMinValueRecursive = (root) => {
  if (!!root === false) return Infinity;

  const leftMin = treeMinValueRecursive(root.left);
  const rightMin = treeMinValueRecursive(root.right);

  return Math.min(root.val, leftMin, rightMin);
};

const maxRootToLeafPathSum = (root) => {
  if (!!root === false) return 0;
  if (root.left === null && root.right === null) return root.val;

  const maxChildPathSum = Math.max(
    maxRootToLeafPathSum(root.left),
    maxRootToLeafPathSum(root.right)
  );

  return root.val + maxChildPathSum;
};

const a = new Node(122);
const b = new Node(4);
const c = new Node(3);
const d = new Node(11);
const e = new Node(22);
const f = new Node(33);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// const recursiveDeepth = deepthFirstValue(a);

// const breadthFirstIdea = breadthFirstValuesFirstIdea(a);
// const breadthFirstValOptm = breadthFirstValuesOptm(a);
// const includesF = treeIncludes(null, "d");
// console.log({ includesF });
// console.log(breadthFirstValOptm);
// const includesRecursive = treeIncludesRecursive(a, "k");
// console.log({ includesRecursive });

// const sum = treeSum(k);
// console.log({ sum });
// const sumRecursive = treeSumRecursive(a);
// console.log({ sumRecursive });
// const minVal = treeMinValue(a);
// console.log({ minVal });

// const minValRecursive = treeMinValueRecursive(a);
// console.log({ minValRecursive });
const maxToLeaftPath = maxRootToLeafPathSum(a);
console.log({ maxPathSum: maxToLeaftPath });
