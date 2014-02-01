define(function(require, exports, module) {
    "use strict";

    //var $ = require('jquery');

    var Mortgage = {
        mortgage_values: {
            loan_amount: null,
            interest_rate: null,
            start_date: null,
            term: null,
            payment_schedule: []
        },
        update_payment_schedule: function() {
            console.log(this.mortgage_values);
            if(!this.mortgage_values.payment_schedule) {
                //$('#payment_schedule').css('display', 'none');
            } else {
                this.mortgage_values.payment_schedule = [];


                var term_start = new Date(this.mortgage_values.start_date);

                for(var i = 1; i <= (this.mortgage_values.term * 12); i++) {
                    term_start.setMonth(term_start.getMonth()+(i - 2))
                    this.mortgage_values.payment_schedule[i] =
                        {num: i,
                         date: term_start.getFullYear()+'-'+term_start.getMonth()+'-'+term_start.getDay()};
                }
            }
        }
    };

    module.exports = Mortgage;

});