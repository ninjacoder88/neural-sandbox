const { Neuron } = require("./neuron");

const in1 = new Neuron(-1.0);
const in2 = new Neuron(1.0);
const in3 = new Neuron(1.0);
const in4 = new Neuron(-1.0);


const l1n1 = new Neuron();
l1n1.addInputNeuron(in1, 1.0).addInputNeuron(in2, 0.0).addInputNeuron(in3, 1.0).addInputNeuron(in4, 0.0).applyHyberbolicTangent();

const l1n2 = new Neuron();
l1n2.addInputNeuron(in1, 0.0).addInputNeuron(in2, 1.0).addInputNeuron(in3, 0.0).addInputNeuron(in4, 1.0).applyHyberbolicTangent();

const l1n3 = new Neuron();
l1n3.addInputNeuron(in1, 1.0).addInputNeuron(in2, 0.0).addInputNeuron(in3, -1.0).addInputNeuron(in4, 0.0).applyHyberbolicTangent();

const l1n4 = new Neuron();
l1n4.addInputNeuron(in1, 0.0).addInputNeuron(in2, 1.0).addInputNeuron(in3, 0.0).addInputNeuron(in4, -1.0).applyHyberbolicTangent();

console.log(l1n1.data);
console.log(l1n2.data);
console.log(l1n3.data);
console.log(l1n4.data);
console.log("");

const l2n1 = new Neuron();
l2n1.addInputNeuron(l1n1, 1.0).addInputNeuron(l1n2, 1.0).addInputNeuron(l1n3, 0.0).addInputNeuron(l1n4, 0.0).applyHyberbolicTangent();

const l2n2 = new Neuron();
l2n2.addInputNeuron(l1n1, -1.0).addInputNeuron(l1n2, 1.0).addInputNeuron(l1n3, 0.0).addInputNeuron(l1n4, 0.0).applyHyberbolicTangent();

const l2n3 = new Neuron();
l2n3.addInputNeuron(l1n1, 0.0).addInputNeuron(l1n2, 0.0).addInputNeuron(l1n3, 1.0).addInputNeuron(l1n4, -1.0).applyHyberbolicTangent();

const l2n4 = new Neuron();
l2n4.addInputNeuron(l1n1, 0.0).addInputNeuron(l1n2, 0.0).addInputNeuron(l1n3, 1.0).addInputNeuron(l1n4, 1.0).applyHyberbolicTangent();


console.log(l2n1.data);
console.log(l2n2.data);
console.log(l2n3.data);
console.log(l2n4.data);
console.log("");

const l3n1 = new Neuron();
l3n1.addInputNeuron(l2n1, 1.0).addInputNeuron(l2n2, 0.0).addInputNeuron(l2n3, 0.0).addInputNeuron(l2n4, 0.0).applyRectifiedLinearUnit();

const l3n2 = new Neuron();
l3n2.addInputNeuron(l2n1, -1.0).addInputNeuron(l2n2, 0.0).addInputNeuron(l2n3, 0.0).addInputNeuron(l2n4, 0.0).applyRectifiedLinearUnit();

const l3n3 = new Neuron();
l3n3.addInputNeuron(l2n1, 0.0).addInputNeuron(l2n2, 1.0).addInputNeuron(l2n3, 0.0).addInputNeuron(l2n4, 0.0).applyRectifiedLinearUnit();

const l3n4 = new Neuron();
l3n4.addInputNeuron(l2n1, 0.0).addInputNeuron(l2n2, -1.0).addInputNeuron(l2n3, 0.0).addInputNeuron(l2n4, 0.0).applyRectifiedLinearUnit();

const l3n5 = new Neuron();
l3n5.addInputNeuron(l2n1, 0.0).addInputNeuron(l2n2, 0.0).addInputNeuron(l2n3, 1.0).addInputNeuron(l2n4, 0.0).applyRectifiedLinearUnit();

const l3n6 = new Neuron();
l3n6.addInputNeuron(l2n1, 0.0).addInputNeuron(l2n2, 0.0).addInputNeuron(l2n3, -1.0).addInputNeuron(l2n4, 0.0).applyRectifiedLinearUnit();

const l3n7 = new Neuron();
l3n7.addInputNeuron(l2n1, 0.0).addInputNeuron(l2n2, 0.0).addInputNeuron(l2n3, 0.0).addInputNeuron(l2n4, 1.0).applyRectifiedLinearUnit();

const l3n8 = new Neuron();
l3n8.addInputNeuron(l2n1, 0.0).addInputNeuron(l2n2, 0.0).addInputNeuron(l2n3, 0.0).addInputNeuron(l2n4, -1.0).applyRectifiedLinearUnit();


console.log(l3n1.data);
console.log(l3n2.data);
console.log(l3n3.data);
console.log(l3n4.data);
console.log(l3n5.data);
console.log(l3n6.data);
console.log(l3n7.data);
console.log(l3n8.data);