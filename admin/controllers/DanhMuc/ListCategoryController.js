window.ListCategoryController = function ($scope, $http) {
  var api = "http://localhost:3000/category/";
  $http
    .get(api)
    .then(function (response) {
      $scope.listCate = response.data;
    })
    .catch(function (error) {
      console.log("Lỗi API");
    });
  $scope.delCate = function (id) {
    $http
      .delete(api + id)
      .then(function (response) {
        alert("Xóa thành công");
      })
      .catch(function (error) {
        console.log("Lỗi Api");
      });
  };
};
