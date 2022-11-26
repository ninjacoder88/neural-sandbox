module.exports = {
    Network: function(){
        const self = this;
        const layers = [];
        
        self.initialize = function(startingValues){
            const layer = [];
            startingValues.forEach(v => {
                layer.push(new Neuron(v));
            });
            layers.push(layer);
        };

        self.addLayer = function(data){
            
        };
    }
};