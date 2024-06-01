window.CuaHangController = function ($scope, $http) {
  var api = "http://localhost:3000/products/";
  var api2 = "http://localhost:3000/category/";
  //lấy dữ liệu sản phẩm
  $http
    .get(api)
    .then(function (response) {
      $scope.listSP = response.data;
    })
    .catch(function (error) {
      console.log("Lỗi API");
    });

  //lấy dữ liệu danh mục
  $http
    .get(api2)
    .then(function (response) {
      $scope.listDM = response.data;
    })
    .catch(function (error) {
      console.log("Lỗi API");
    });
};
