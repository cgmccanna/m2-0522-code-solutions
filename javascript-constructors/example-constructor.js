function ExampleConstructor() {

}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var newExample = new ExampleConstructor();
console.log(newExample);

var instance = newExample instanceof ExampleConstructor;
console.log(instance);
