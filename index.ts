class Vehicle {
    make: string; // Type for 'make' property is string
    model: string; // Type for 'model' property is string
    wheels: string | number; // Wheels can be a string (e.g., "four") or a number (e.g., 2)
    status: "started" | "stopped" = "stopped"; // 'status' can either be "started" or "stopped" (Literal type)
  
    // Constructor with type-safe parameters
    constructor(make: string, model: string, wheels: string | number) {
      this.make = make; // Initialize make
      this.model = model; // Initialize model
      this.wheels = wheels; // Initialize wheels (string or number)
    }
  
    // Method to start the vehicle
    start() {
      this.status = "started"; // Change status to "started"
    }
  
    // Method to stop the vehicle
    stop() {
      this.status = "stopped"; // Change status to "stopped"
    }
  }
  
  // Subclass for Car, inherits from Vehicle
  class Car extends Vehicle {
    // Constructor with specific properties for cars
    constructor(make: string, model: string) {
      super(make, model, "four"); // Cars always have 4 wheels, so we pass "four"
    }
  }
  
  // Subclass for MotorCycle, inherits from Vehicle
  class MotorCycle extends Vehicle {
    // Constructor with specific properties for motorcycles
    constructor(make: string, model: string) {
      super(make, model, 2); // Motorcycles always have 2 wheels, so we pass 2
    }
  }
  
  function printStatus(vehicle: Vehicle) {
    if (vehicle.status === "started") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  
  console.log(myHarley.make.toUpperCase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = myBuick.wheels - 1;
  console.log(myBuick.wheels);
  
  console.log(myBuick.model);