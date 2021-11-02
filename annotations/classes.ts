class Vehicle {
  // methods are set to public as default
  // drive(): void {
  //   console.log('chugga chugga');
  // }
  // color: string;

  constructor(public color: string) {
    // this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }
  
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('red');
const car = new Car(4, 'green');
// vehicle.honk();
car.startDrivingProcess();
console.log(car.color);