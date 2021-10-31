const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

// Problem: function annotation is too long 
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}$`);
  console.log(`Year: ${vehicle.year}$`);
  console.log(`Broken?: ${vehicle.broken}$`);
}
printVehicle(oldCivic);

// Solution: interface
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}
const printVehicleWithInterface = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}$`);
  console.log(`Year: ${vehicle.year}$`);
  console.log(`Broken?: ${vehicle.broken}$`);
}
printVehicleWithInterface(oldCivic);


interface Reportable {
  summary(): string;
};
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}
// interface only going to check the listed requirement 
// and does not care about the extra attributes
printSummary(oldCivic);

const coke = {
  color: 'brown',
  carbonated: true,
  sugar: 100,
  summary(): string {
    return `Color ${this.color}`;
  }
};

printSummary(coke);


