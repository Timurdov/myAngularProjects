/**
 * Created by 1 on 03.05.2015.
 */
var chapter2 = angular.module('chapter2',[]);

chapter2.
    controller('myController', ['$scope', function($scope){
        //var self = this;
        //self.students = {};
        //self.students.startName = "enter name";
        //self.students.dontShow = false;
        //self.students.names = [{name: "Tim", id:1},
        //    {name: "Tom", id:2},
        //    {name: "Richard", id:3}];
        //self.students.addName = function(student){
        //    self.students.names.push({name: student, id: (self.students.names.length+1)});
        //    self.students.startName = "";
        //};
        //
        //self.students.removeName = function(index){
        //    self.students.names.splice(index, 1);
        //};
        //
        //self.students.toggle = function(){
        //    self.students.dontShow = !(self.students.dontShow);
        //};

            $scope.bill = {};
            $scope.items = [
                {title: 'Paint pots', quantity: 8, price: 3.95},
                {title: 'Polka dots', quantity: 17, price: 12.95},
                {title: 'Pebbles', quantity: 5, price: 6.95}
            ];
            $scope.totalCart = function() {
                var total = 0;
                for (var i = 0, len = $scope.items.length; i < len; i++) {
                    total = total + $scope.items[i].price * $scope.items[i].quantity;
                }
                return total;
            };
            $scope.subtotal = function() {
                return $scope.totalCart() - $scope.discount;
            };
            function calculateDiscount(newValue, oldValue, scope) {
                $scope.bill.discount = newValue > 100 ? 10 : 0;
            }
            $scope.$watch($scope.totalCart, calculateDiscount);


    }]);