window.AddCategoryController = function ($scope, $http, $location) {
  var api = "http://localhost:3000/category/";

  //tiến hành thêm mới
  $scope.submit = function () {
    $http
      .post(api, $scope.data)
      .then(function (response) {
        alert("Thêm mới thành công");
        $location.path("/list-cate");
      })
      .catch(function (error) {
        console.log("Lỗi API");
      });
  };
};
