var app = angular.module('myApp', [])

app.controller('MainController', function($q, $scope){

$scope.test = 'test';

function add(x, y){
  var q = $q.defer();
  setTimeout(function(){
    var result = x + y;
    if (result >= 0){
      q.resolve(x+y)
    } else {
      q.reject('negative value: ' + result)
    }
  }, 100);
  console.log(q)
  return q.promise
};

add(5, 3)
  .then(function(result, error){
    if (error) $scope.q = error
    $scope.q = result
  })
})
