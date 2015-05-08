/**
 * Created by 1 on 04.05.2015.
 */
var myApp = angular.module('app',[]);

//myApp.directive("welcome",function(){
//    return{
//        //restrict: "E",
//        //template: "<div>Howdy there! You look splendid</div>"
//        restrict: "A",
//        link: function(){
//            alert("Howdy!");
//        }
//    }
//}).directive("goodbye",function(){
//    return{
//        restrict: "A",
//        link: function(){
//            alert("See ya later!");
//        }
//    }
//});


//myApp.directive("entering", function(){
//    return function(scope, element, attrs){
//        element.bind("mouseenter", function(){
//            //console.log("Mouse has entered the div");
//            element.addClass(attrs.entering);
//        })
//    }
//}).directive("leaving", function(){
//    return function(scope, element, attrs){
//        element.bind("mouseleave", function(){
//            //console.log("Mouse has left the div");
//            element.removeClass(attrs.entering);
//        })
//    }
//});

//function FunCtrl(){
//    var self = this;
//
//    self.start = function(){
//        alert("Fun times have been started!");
//    }
//
//    self.end = function(){
//        alert("Fun times is over!");
//    }
//}
//
//myApp.controller("FunCtrl",FunCtrl)
//    .directive("entering", function(){
//        return function(scope, element, attrs){
//            element.bind("mouseenter", function(){
//                scope.$apply(attrs.entering);
//            })
//        }
//    });

//myApp.directive("welcome", function(){
//    return{
//        restrict: "E",
//        scope: {},
//        controller: function($scope){
//            $scope.words = [];
//
//            this.sayHello = function(){
//                $scope.words.push("hello");
//            };
//
//            this.sayHowdy = function(){
//                $scope.words.push("howdy");
//            };
//
//            this.sayHi = function(){
//                $scope.words.push("hi");
//            };
//        },
//
//        link: function(scope, element){
//            element.bind("mouseenter", function(){
//                console.log(scope.words)
//            });
//        }
//    }
//}).directive("hello", function(){
//    return{
//        require: "welcome",
//        link: function(scope, element, attrs, welcomeCtrl){
//            welcomeCtrl.sayHello();
//        }
//    };
//}).directive("howdy", function(){
//    return{
//        require: "welcome",
//        link: function(scope, element, attrs, welcomeCtrl){
//            welcomeCtrl.sayHowdy();
//        }
//    };
//}).directive("hi", function(){
//    return{
//        require: "welcome",
//        link: function(scope, element, attrs, welcomeCtrl){
//            welcomeCtrl.sayHi();
//        }
//    };
//});

myApp.directive("welcome", function(){
    return{
        restrict: "E",
        scope: {},
        transclude: true,
        template: "<div>This is the welcome component</div><ng-transclude></ng-transclude>"
    }
});







