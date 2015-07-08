var FluxCartActions = require('../actions/FluxCartActions');

module.exports = {

    // Load course data from localStorage into Store via Action
    getProductData: function () {
        var data = JSON.parse(localStorage.getItem('Courses'));
        FluxCartActions.receiveProduct(data);
    }

};