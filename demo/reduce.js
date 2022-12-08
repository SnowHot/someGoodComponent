const arr = [{ price: 1 }, { price: 2 }, { price: 3 }];

const a = arr.reduce((calc, current) => (calc += current.price), 0);

const b = arr.reduce(
  (calc, current) => {
    return {
      y: (calc.y += current.price),
      d: (calc.d += current.price * 0.12),
    };
  },
  { y: 0, d: 0 }
);

console.log(b);
