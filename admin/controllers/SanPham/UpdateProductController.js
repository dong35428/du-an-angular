window.UpdateProductController = function (
  $scope,
  $http,
  $location,
  $routeParams
) {
  var api = "http://localhost:3000/products/";
  var api2 = "http://localhost:3000/category/";

  //lấy dữ liệu danh mục
  $http
    .get(api2)
    .then(function (response) {
      $scope.listDM = response.data;
    })
    .catch(function (error) {
      console.log("Lỗi API");
    });
  $http
    .get(api + $routeParams.id)
    .then(function (response) {
      $scope.data = response.data;
    })
    .catch(function (error) {
      console.log("Lỗi Api");
    });
  $scope.update = function () {
    if (
      $scope.data.nameSP == "" ||
      $scope.data.priceSP == "" ||
      $scope.data.mota == "" ||
      $scope.data.loai == ""
    ) {
      alert("Vui lòng nhập đủ thông tin");
    } else if (isNaN($scope.data.priceSP)) {
      alert("Vui lòng nhập đúng định dạng số");
    } else {
      $http
        .patch(api + $routeParams.id, $scope.data)
        .then(function (response) {
          alert("chỉnh sửa thành công");
          $location.path("/list-product");
        })
        .catch(function (error) {
          console.log("Lỗi Api");
        });
    }
  };
};
