window.ListProductController = function ($scope, $http) {
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
  // $scope.delete = function (id) {
  //   let check = confirm("Bạn có muốn xóa hay không");
  //   if (check) {
  //     $http
  //       .delete(api + id)
  //       .then(function (response) {
  //         alert("Xóa thành công");
  //       })
  //       .catch(function (error) {
  //         console.log("Lỗi Api");
  //       });
  //   }
  // };
  $scope.delete = function (id) {
    //truyền id
    $scope.idDelete = id;
  };
  $scope.confimDelete = function () {
    $http
      .delete(api + $scope.idDelete)
      .then(function (response) {
        alert("Xóa thành công");
      })
      .catch(function (error) {
        console.log("Lỗi Api");
      });
  };
  //lấy dữ liệu danh mục
  $http
    .get(api2)
    .then(function (response) {
      $scope.listDM = response.data;
    })
    .catch(function (error) {
      console.log("Lỗi API");
    });
  $scope.columnName = "";
  $scope.sortData = function (tenCot) {
    if ($scope.columnName != tenCot) {
      $scope.columnName = tenCot;
      $scope.response = true;
    }
    else{
      $scope.response = !$scope.response;
    }
  };
};
