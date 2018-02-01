(function() {
  angular.module('myApp')
    .service('uploadFile', ['$http', function($http) {
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


}())
