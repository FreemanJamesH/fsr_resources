app.controller('mainController', function($scope, signupService){

  $scope.text = 'test'

  $scope.submit = function(){
    let userObj = {}
    userObj.username = $scope.username
    userObj.password = $scope.password
    signupService.signup(userObj).then(function(results){
      console.log(results.data)
      $scope.usersList = results.data
    })
  }

})
