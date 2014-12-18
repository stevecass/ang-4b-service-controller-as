var app = angular.module('notesApp', []);

app.factory('myService', ['$http', function($http){
  var service = {
    loadNotes: function() {
    var promise = $http.get('/notes.json').then(function(response){
      return response.data;
    });
    return promise;
    }
  };
  return service;
}]);

app.controller('SimpleController', ['$scope', 'myService', function($scope, myService){

  $scope.items = ['ABC', 'DEF', 'GHI'];

  myService.loadNotes().then(function(data){
    $scope.data = data;
  });
}]);
