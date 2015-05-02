/**
 * Created by 1 on 02.05.2015.
 */
var angularController = angular.module('angularController',[]);

angularController.controller('helloController',['$scope', function($scope){
    $scope.hello = "Hi, there!";
}]);

angularController.controller('MultipleOn5',['$scope',function($scope){
    $scope.fifth = function(value){
        return value * 5;
    };
    $scope.initValue = 25;
}]);

angularController.controller('ButtonController',['$scope',function($scope){
    $scope.drink = "coca-cola";
    $scope.beer = function(){
        $scope.drink = 'beer!';
    };
    $scope.vodka = function(){
        $scope.drink = 'vodka!';
    };
}]);

angularController.controller('FormController', function(){
    var self = this;
    self.titleText = "Hi, there!";
    self.formCont = function(titleText){
        self.titleText = titleText;
    };
});