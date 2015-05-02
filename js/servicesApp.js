/**
 * Created by 1 on 02.05.2015.
 */
angular.module('servicesApp',[]).
    config(['$provide', function($provide) {
    $provide.
        factory('notify', ['$window', function (win) {
            var msgs = [];
            return function (msg) {
                msgs.push(msg);
                if (msgs.length == 3) {
                    win.alert(msgs.join("\n"));
                    msgs = [];
                }
            };
        }])
}]).controller('MyController', ['$scope', 'notify', function ($scope, notify) {
    $scope.callNotify = function (msg) {
        notify(msg);
    };
}]);