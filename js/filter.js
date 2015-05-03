/**
 * Created by 1 on 03.05.2015.
 */
//angular.module('app',[]).filter('myfilter',function(){
//    var self = this;
//    self.someWord = "";
//   return self.upperFunc = function(myWord){
//        return self.someWord = myWord.toUpperCase();
//    };
//
//});

var myApp = angular.module('app',[]);

function TestCtrl(){
    var self = this;
    self.people = [
        {
            name: "Don Johnson",
            city: "New York"
        },
        {
            name: "Ben Fellingson",
            city: "New Scotland"
        },
        {
            name: "Stiven Johnson",
            city: "New Jersey"
        }
    ];
}

myApp.controller('TestCtrl', TestCtrl);