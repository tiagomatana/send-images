var app = angular.module('myApp', ['ngAria','ngMaterial']);
app.controller('ImageController', ['$scope', 'uploadFile', function($scope, uploadFile) {
  $scope.uploadFile = function() {
    $scope.myFile = $scope.files[0];
    var file = $scope.myFile;
    var url = "https://tiagomatana.com/send-images/upload.php";
    uploadFile.uploadFiletoServer(file, url);
  };
  $scope.uploadedFile = function(element) {
    var reader = new FileReader();
    reader.onload = function(event) {
      $scope.$apply(function($scope) {
        $scope.files = element.files;
        $scope.src = event.target.result
      });
    }
    reader.readAsDataURL(element.files[0]);
  }
}]);
