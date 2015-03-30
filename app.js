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

  this.items = ['ABC', 'DEF', 'GHI'];
 
  //note that the callback needs to bind to "this"
  myService.loadNotes().then(function(data){
    this.data = data;
  }.bind(this));

  this.showDetail = function(item) {
    this.singleItem = item;
  };

  this.clearDetail = function() {
   this.singleItem = null; 
  };


}]);
