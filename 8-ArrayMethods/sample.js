const objects = [
  { objone: "car", takes: "petrol" },
  { objone: "truck", takes: "diesel" },
];
function printobjects(i) {
  this.print = function () {
    console.log(this.objone, "takes", this.takes);
  };
  this.print();
}
for (let i = 0; i < objects.length; i++) {
  printobjects.call(objects[i]);
}
