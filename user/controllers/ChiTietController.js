window.ChiTietController = function ($scope, $http, $routeParams,$location) {
  var api = "http://localhost:3000/products/";
  var api2 = "http://localhost:3000/cart"
  $http
    .get(api + $routeParams.id)
    .then(function (response) {
      $scope.data = response.data;
    })
    .catch(function (error) {
      console.log("Lỗi Api");
    });
  $http
    .get(api)
    .then(function (response) {
      $scope.listSP = response.data;
    })
    .catch(function (error) {
      console.log("Lỗi API");
    });
  $scope.cart = [];
  $scope.addCart = function (data) {
    // console.log("THanh cong");
    var index = $scope.cart.findIndex((p) => p.cart[0].idSP == data.cart[0].id);
    if (index >= 0) {
      // Nếu sản phẩm đã tồn tại trong giỏ hàng
      $scope.cart[index].soluong++;
      $scope.cart[index].thanhTien =
        $scope.cart[index].soluong * $scope.cart[index].giaTien;

      // Cập nhật sản phẩm trong giỏ hàng thông qua phương thức PUT
      $http
        .put(api2 + $scope.cart[index].id, $scope.cart[index])
        .then(function (response) {
          alert("Cập nhật thành công ");
        });
    } else {
      // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào giỏ hàng
      var newProduct = {
        idSP: data.id,
        tenSP: data.nameSP,
        anhSP: data.image,
        giaTien: data.priceSP,
        soluong: 1,
        thanhTien: data.priceSP,
      };
      $scope.cart.push(newProduct);
      console.log($scope.cart);
      // Gửi đối tượng giỏ hàng hiện tại đến backend
      $http.post(api2, { cart: $scope.cart }).then(function (response) {
        alert("Thêm thành công vào giỏ hàng");
       

        
      });
    }
    console.log($scope.cart);
  };
};
