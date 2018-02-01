var app = angular.module('myApp', ['ngAria','ngMaterial']);
// Here we write a custom service for upload file to reuse it in the controller
app.service('uploadFile', ['$http', function($http) {
  this.uploadFiletoServer = function(file, uploadUrl) {
    var fd = new FormData();
    fd.append('file', file);
    $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {
          'Content-Type': undefined,
          'Process-Data': false
        }
      })
      .success(function(data) {
        alert(data);
      })
      .error(function() {
        alert("Error");
      });
  }
}]);

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
