var app = angular.module('myApp', ['gm']);

app.controller('location', function($scope) {
  $scope.lat = undefined;
  $scope.lng = undefined;
  $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
      var location = $scope.autocomplete.getPlace().geometry.location;
      $scope.lat = location.lat();
      $scope.lng = location.lng();
      $scope.$apply();
  });
  $scope.getloc = function() {
    console.log("Ini init function");
    navigator.geolocation.getCurrentPosition(function (pos) {
      //console.log('Got pos', JSON.stringify(pos));
  
       
      //$scope.src = JSON.stringify(pos);
      //  $scope.src = 'abcd';
    }, function (error) {
      console.log('Unable to get location: ' + error.message);
    });
        };
});


app.controller('destination', function($scope) {
  $scope.lat = undefined;
  $scope.lng = undefined;
  
  $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
      var location = $scope.autocomplete.getPlace().geometry.location;
      $scope.lat = location.lat();
      $scope.lng = location.lng();
      $scope.$apply();
  });
});


                