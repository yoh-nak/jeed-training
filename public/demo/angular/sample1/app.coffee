app = angular.module("Hello", [])
app.controller "HelloCtrl", ($scope) ->
 $scope.hello = text: "Hello"
 return