function Stack() {
  let items = [];

  this.push = (element) => {
    items.push(element);
  };

  this.pop = () => {
    return this.hasElements() ? items.pop() : false;
  };

  this.last = () => {
    return items[items.length - 1];
  };

  this.hasElements = () => {
    return items.length > 0;
  };

  this.size = () => {
    return items.length;
  };

  this.print = () => {
    return items.toString();
  };

  this.clear = () => {
    items = [];
  };
}

function dec2Bin(dNumber = 24) {
  if (dNumber === 0) {
    return "0";
  }

  stack = new Stack();
  let rem;
  let binaryString = "";

  while (dNumber > 0) {
    // Remaining
    rem = Math.floor(dNumber % 2);

    // Pushing to the stack
    stack.push(rem);

    // Divide by 2
    dNumber = Math.floor(dNumber / 2);
  }

  // While the stack has elements
  while (stack.hasElements()) {
    // Concatenate each element.
    binaryString += stack.pop().toString();
  }

  return binaryString;
}
