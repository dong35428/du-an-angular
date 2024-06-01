window.HomeController = function ($scope, $http) {
  var api = "http://localhost:3000/products/";
  $http
    .get(api)
    .then(function (response) {
      $scope.listSP = response.data;
    })
    .catch(function (error) {
      console.log("Lỗi API");
    });
};
