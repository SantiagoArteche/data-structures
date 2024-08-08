const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const edgesB = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const graphB = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const undirectedGraph = (edges, nodeA, nodeB, edgesB) => {
  const graph = buildGraph(edges),
    graphB = buildGraph(edgesB);

  const start = "w",
    end = "y";

  return {
    hasPath: hasPathUnd(graph, nodeA, nodeB, new Set()),
    hasPathRecursive: hasPathUndRec(graph, nodeA, nodeB, new Set()),
    connectedComponentsCount: connectedComponentsCount(graphB),
    largestComponent: largestComponent(graphB),
    shortPath: shortPath(graphB, start, end),
    islandCount: islandCount(grid),
    minimumIsland: minimumIsland(grid),
  };
};

const hasPathUndRec = (graph, start, dest, visited) => {
  if (start === dest) return true;
  if (visited.has(start)) return false;
  visited.add(start);

  for (let neighbor of graph[start]) {
    if (hasPathUnd(graph, neighbor, dest, visited) === true) return true;
  }

  return false;
};

const hasPathUnd = (graph, start, dest, visited) => {
  if (start === dest) return true;

  visited.add(start);

  const stack = [start];

  while (stack.length) {
    const curr = stack.pop();

    for (let neighbor of graph[curr]) {
      if (visited.has(neighbor)) return false;
      if (neighbor === dest) return true;

      stack.push(curr);
      visited.add(neighbor);
    }
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let [a, b] of edges) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let n = 0;
  for (let node in graph) {
    if (explore(graph, node, visited)) n++;
  }

  return n;
};

const explore = (graph, current, visited) => {
  if (visited.has(+current)) return false;
  visited.add(Number(current));

  for (neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }

  return true;
};

const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;
  for (let node in graph) {
    const size = exploreLargest(graph, node, visited);

    if (size > longest) longest = size;
  }
  return longest;
};

const exploreLargest = (graph, curr, visited) => {
  if (visited.has(curr)) return 0;
  visited.add(curr);

  let size = 1;
  for (let neighbor of graph[curr]) {
    size += exploreLargest(graph, neighbor, visited);
  }

  return size;
};

const shortPath = (graph, start, end) => {
  const visited = new Set([start]);
  const queue = [[start, 0]];

  while (queue.length) {
    let [node, distance] = queue.shift();
    if (node === end) return distance;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};

const minimumIsland = (grid) => {
  const visited = new Set();

  let minSize = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = searchMinimum(grid, r, c, visited);
      if (size > 0 && size < minSize) minSize = size;
    }
  }
  return minSize;
};

const searchMinimum = (grid, r, c, visited) => {
  const columnInbound = 0 <= c && c < grid[0].length;
  const rowsInbound = 0 <= r && r < grid.length;

  if (!rowsInbound || !columnInbound) return 0;
  if (grid[r][c] === "W") return 0;

  const position = r + "," + c;
  if (visited.has(position)) return 0;
  visited.add(position);

  let size = 1;
  size += searchMinimum(grid, r - 1, c, visited);
  size += searchMinimum(grid, r + 1, c, visited);
  size += searchMinimum(grid, r, c - 1, visited);
  size += searchMinimum(grid, r, c + 1, visited);

  return size;
};

const islandCount = (grid) => {
  const visited = new Set();

  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (exploreIsland(grid, r, c, visited)) count++;
    }
  }
  return count;
};

const exploreIsland = (grid, rows, columns, visited) => {
  const rowInbounds = 0 <= rows && rows < grid.length;
  const columnInbounds = 0 <= columns && columns < grid[0].length;

  if (!rowInbounds || !columnInbounds) return false;
  if (grid[rows][columns] === "W") return false;

  const position = `${rows},${columns}`;

  if (visited.has(position)) return false;
  visited.add(position);

  exploreIsland(grid, rows - 1, columns, visited);
  exploreIsland(grid, rows + 1, columns, visited);
  exploreIsland(grid, rows, columns - 1, visited);
  exploreIsland(grid, rows, columns + 1, visited);

  return true;
};
console.log(undirectedGraph(edges, "n", "o", edgesB));
