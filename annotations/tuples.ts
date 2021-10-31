const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};
// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 40];


// Lack of meanging of sequential values
const carSpecs: [number, number] = [400, 3354];

// Objects attach keys and values
// Objects >> Tuples
const carStats = {
  horsepower: 400,
  weight: 3354,
}



