const { Edge } = require("./edge");

module.exports = {
    Neuron: function(data){
        const self = this;
        self.edges = [];
        self.inputNeurons = [];
        self.data = data;
        self.total = 0;

        self.addInputNeuron = function(neuron, weight){
            self.inputNeurons.push(neuron);
            self.edges.push(new Edge(neuron, self, weight));
            const edgeTotal = neuron.data * weight
            self.total += edgeTotal;
            return self;
        };

        self.applyLogisticFunction = function(){
            // 1 / 1+e^-x
            self.data = 1 / (1 + (Math.pow(Math.E, self.total * -1)));
        };

        self.applyRectifiedLinearUnit = function(){
            if(self.total < 0){
                self.data = 0;
                return;
            }
            self.data = self.total;
        };

        self.applyHyberbolicTangent = function(){
            self.data = Math.tanh(self.total);
        };
    }
};