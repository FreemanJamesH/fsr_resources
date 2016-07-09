app.service('signupService', ['$resource', function($resource){
  let resultsArr = []
  return {
    signup: function(obj){
      console.log('service sending ', obj);
      return $resource('//localhost:3000/signup').save(obj).$promise.then(function(results){
        return results
      })
    },
    usersListGetter: function(){
      return usersList
    }
  }
}])
