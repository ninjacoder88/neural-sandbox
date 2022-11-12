module.exports = {
    Edge: function(inputNeuron, neuron, weight){
        const self = this;
        self.inputNeuron = inputNeuron;
        self.neuron = neuron;
        self.weight = weight;
    }
};