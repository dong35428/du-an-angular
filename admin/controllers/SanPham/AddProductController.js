window.AddProductController = function ($scope, $http, $location) {
  var api = "http://localhost:3000/products/";
  var api2 = "http://localhost:3000/category/";
  $scope.nameAccount = localStorage.getItem("name");
  $scope.idAccount = localStorage.getItem("id");

  //lấy dữ liệu danh mục
  $http
    .get(api2)
    .then(function (response) {
      $scope.listDM = response.data;
    })
    .catch(function (error) {
      console.log("Lỗi API");
    });
  //tiến hành thêm mới
  $scope.data = {
    nguoiTao: $scope.idAccount,
    nameSP: "",
    priceCu:"",
    priceSP: "",
    image: "",
    chitiet: "",
    mota: "",
    loai: "",
  };
  $scope.submit = function () {
    if (
      $scope.data.nameSP == "" ||
      $scope.data.priceCu == "" ||
      $scope.data.priceSP == "" ||
      $scope.data.chitiet == "" ||
      $scope.data.mota == "" ||
      $scope.data.loai == ""
    ) {
      alert("Vui lòng nhập đủ thông tin");
    } else if (isNaN($scope.data.priceSP)) {
      alert("Vui lòng nhập đúng định dạng số");
    } else {
      $http
        .post(api, $scope.data)
        .then(function (response) {
          alert("Thêm mới thành công");
          $location.path("/list-product");
        })
        .catch(function (error) {
          console.log("Lỗi API");
        });
    }
  };
};
