// Creamos una pila vacía
let pila = [];

// Agregamos elementos a la pila utilizando el método push()
pila.push("elemento1");
pila.push("elemento2");
pila.push("elemento3");

// Mostramos la pila actual
console.log(pila); // Output: ["elemento1", "elemento2", "elemento3"]

// Removemos elementos de la pila utilizando el método pop()
let elementoRemovido = pila.pop();
console.log(elementoRemovido); // Output: "elemento3"

// Mostramos la pila actual después de remover un elemento
console.log(pila); // Output: ["elemento1", "elemento2"]

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

const { push, pop, last, hasElements, size, clear, print } = new Stack();

describe("@Stack", () => {
  describe("#push", () => {
    it("should be a function", () => {
      assert.typeOf(push, "function", "push should be a function");
    });

    it("should add new element(s)", () => {
      // Adding new books to the stack
      push("El Señor de los Anillos"); // [0]
      push("El Código da Vinci"); // [1]
      push("Kain y Abel"); // [2]
      push("El Alquimista"); // [3]
      push("El Hobbit"); // [4]

      // The stack should have 5 elements (length)
      const actualResult = size();
      const expectedResult = 5;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe("#pop", () => {
    it("should be a function", () => {
      assert.typeOf(pop, "function", "pop should be a function");
    });

    it("should remove and return the last element", () => {
      // Removing the last element
      const actualResult = pop();
      const expectedResult = "El Hobbit";

      assert.isTrue(size() === 4); // The size now should be 4
      assert.isTrue(expectedResult === actualResult); // The last element removed is 'El Hobbit'
    });
  });

  describe("#last", () => {
    it("should be a function", () => {
      assert.typeOf(last, "function", "last should be a function");
    });

    it("should return the last element", () => {
      // Getting the last element
      const actualResult = last();
      const expectedResult = "El Alquimista";

      assert.isTrue(expectedResult === actualResult); // The last element is 'El Alquimista'
    });
  });

  describe("#hasElements", () => {
    it("should be a function", () => {
      assert.typeOf(
        hasElements,
        "function",
        "hasElements should be a function"
      );
    });

    it("should return true if the stack has elements", () => {
      // The stack has elements?
      const actualResult = hasElements();
      const expectedResult = true;

      assert.isTrue(expectedResult === actualResult); // The sack has elements!
    });
  });

  describe("#size", () => {
    it("should be a function", () => {
      assert.typeOf(size, "function", "size should be a function");
    });

    it("should return the current size of the stack", () => {
      // Getting the size of the actual stack
      const actualResult = size();
      const expectedResult = 4;

      assert.isTrue(expectedResult === actualResult); // The sack has 4 elements!
    });
  });

  describe("#clear", () => {
    it("should be a function", () => {
      assert.typeOf(clear, "function", "clear should be a function");
    });

    it("should clear the stack", () => {
      // Clear stack
      clear();

      const actualResult = size();
      const expectedResult = 0;

      assert.isTrue(expectedResult === actualResult); // The sack has 0 elements!
    });
  });

  describe("#print", () => {
    it("should be a function", () => {
      assert.typeOf(print, "function", "print should be a function");
    });

    it("should print the current stack", () => {
      // Adding new elements
      push(10);
      push(20);
      push(30);

      const actualResult = print();
      const expectedResult = "10,20,30";
      console.log("10,20,30");
      assert.isTrue(expectedResult === actualResult); // The new stack is [10, 20, 30]
    });
  });
});
