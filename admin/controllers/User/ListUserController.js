window.ListUserController = function ($scope, $http) {
  var api = "http://localhost:3000/users/";
  $http
    .get(api)
    .then(function (response) {
      $scope.listUser = response.data;
    })
    .catch(function (error) {
      console.log("Lỗi API");
    });
  $scope.delete = function (id) {
    $scope.delID = id;
  };
  $scope.confimDelete = function () {
    $http
      .delete(api + $scope.delID)
      .then(function (response) {
        
      })
      .catch(function (error) {
        console.log("Lỗi Api");
      });
  };
};
