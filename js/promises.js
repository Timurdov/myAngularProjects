/**
 * Created by 1 on 03.05.2015.
 */
function getData($timeout, $q) {
    return function() {
        var defer = $q.defer();

        // simulated async function
        $timeout(function() {
            if(Math.round(Math.random())) {
                defer.resolve('data received!')
            } else {
                defer.reject('oh no an error! try again')
            }
        }, 1000);

        return defer.promise
    }
}

angular.module('promises', [])
    .factory('getData', getData)
    .run(function(getData) {
        var promise = getData()
            .then(function(string){
            console.log(string);
        },function(error) {
                console.error(error)
            })
            .finally(function() {
                console.log('Finished at:', new Date())
            })
    });