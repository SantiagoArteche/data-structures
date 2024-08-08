const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const breadthFirstPrint = (graph, source) => {
  if (!!source === false) return;

  const queue = [source];

  while (queue.length > 0) {
    const curr = queue.shift();
    console.log(curr);

    for (let neighbor of graph[curr]) {
      queue.push(neighbor);
    }
  }
};

const depthFirstPrint = (graph, source) => {
  if (!!source === false) return;
  const stack = [source];

  while (stack.length > 0) {
    const curr = stack.pop();
    console.log(curr);

    for (let neighbor of graph[curr]) {
      stack.push(neighbor); //Recorre siempre el nodo de la derecha primero: En A empieza en "b" => a,b,d,f,c,e cambiando de pos c y b en a seria => a,c,e,b,d,f
    }
  }
};

const depthFirstPrintRecursive = (graph, source) => {
  console.log(source);

  for (let neighbor of graph[source]) {
    if (neighbor) depthFirstPrintRecursive(graph, neighbor); //Recorre siempre el nodo de la izq: En A empieza en "c" => a,c,e,b,d,f cambiando de pos c y b en a seria => a,b,d,f,c,e
  }
};

const hasGraph = (graph, source, val) => {
  if (!!source === false) return false;

  const queue = [source];

  while (queue.length) {
    const curr = queue.shift();

    for (let neighbor of graph[curr]) {
      if (neighbor === val) return true;
      queue.push(neighbor);
    }
  }

  return false;
};

const hasPath = (graph, src, dst) => {
  if (!!src === false || !!dst === false) return false;
  if (src === dst) return true;

  const queue = [src];

  while (queue.length) {
    const curr = queue.shift();

    for (let neighbor of graph[curr]) {
      if (neighbor === dst) return true;
      queue.push(neighbor);
    }
  }
  return false;
};

const hasPathRecursive = (graph, src, dst) => {
  if (!!src === false || !!dst === false) return false;
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPathRecursive(graph, neighbor, dst) === true) return true;
  }
  return false;
};

// depthFirstPrint(graph, "a");
// depthFirstPrintRecursive(graph, "a");
// breadthFirstPrint(graph, "a");
// console.log(hasGraph(graph, "a", "z"));
// console.log(hasPathRecursive(graph, "a", "x"));

