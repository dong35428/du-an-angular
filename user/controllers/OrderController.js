window.OrderController = function ($scope, $http, $location) {
  var api = "http://localhost:3000/cart/";
  var api2 = "http://localhost:3000/users/";
  var api3 = "http://localhost:3000/order";

  $http.get(api).then(function (response) {
    $scope.cart = response.data;
  });

  $scope.tongsoluong = function () {
    var tsl = 0;
    for (var i = 0; i < $scope.cart.length; i++) {
      tsl += $scope.cart[i].cart[0].soluong;
    }
    return tsl;
  };

  $scope.tongtien = function () {
    var tt = 0;
    for (var i = 0; i < $scope.cart.length; i++) {
      tt += $scope.cart[i].cart[0].soluong * $scope.cart[i].cart[0].giaTien;
    }
    return tt;
  };

var userId= localStorage.getItem("id");
  if (userId) {
    $http
      .get(api2 + userId)
      .then(function (response) {
        // Gán thông tin người dùng nhận được vào $scope để hiển thị trên giao diện người dùng
        $scope.userInfo = response.data;
      })
      .catch(function (error) {
        console.error("Lỗi khi lấy thông tin người dùng:", error);
      });
  } else {
    console.error("Không tìm thấy ID người dùng trong localStorage");
  }

  $scope.order = [];

  $scope.datHang = function () {
    var userId= localStorage.getItem("id");
    var ngayDatHang = new Date();
    var sdt = $scope.sdt;
    var diachi = $scope.diachi;
    var ghichu = $scope.ghichu;

    var newOrder = {
      order: $scope.cart.map(function (item) {
        return {
          idDH: item.cart[0].idSP,
          tenDH: item.cart[0].tenSP,
          anhDH: item.cart[0].anhSP,
          giaTienDH: item.cart[0].giaTien,
          soluongDH: item.cart[0].soluong,
          thanhTienDH: item.cart[0].giaTien * item.cart[0].soluong,
        };
      }),
      user : userId ,
      userInfo: $scope.userInfo,
      trangThai: "Chưa xác nhận",
      sdt: sdt,
      diachi: diachi,
      ghichu: ghichu,
      ngayDatHang: ngayDatHang,
    };

    $http
      .post(api3, newOrder)
      .then(function (response) {
        alert("Đặt hàng thành công!");
        $location.path("/");
      })
      .catch(function (error) {
        console.error("Đã xảy ra lỗi khi đặt hàng:", error);
      });

    let idArr = [];
    $http
      .get(api)
      .then(function (response) {
        response.data.forEach((item) => {
          idArr.push(item.id);
        });
        idArr.forEach((item) => {
          $http
            .delete(api + item)
            .then(function (response) {
              debugger;
            })
            .catch(function (error) {
              console.error("Đã xảy ra lỗi khi xóa giỏ hàng:", error);
            });
        });
      })
      .catch(function (error) {
        console.error("Đã xảy ra lỗi khi xóa giỏ hàng:", error);
      });
  };
};
