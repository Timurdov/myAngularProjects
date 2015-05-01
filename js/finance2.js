/**
 * Created by 1 on 01.05.2015.
 */
angular.module('finance2',[])
    .factory('currencyConverter',function(){
        var currencies = ['USD','EUR','CNY'];
        var usdToForeignRates = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };
        var convert = function(amount, inCurr, outCur){
            return amount * usdToForeignRates[outCur]/usdToForeignRates[inCurr];
        };

        return{
          currencies: currencies,
          convert: convert
        };
    });