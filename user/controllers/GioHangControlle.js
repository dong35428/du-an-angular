window.GioHangControlle = function ($scope, $http, $routeParams) {
    var api = "http://localhost:3000/cart/";
    $scope.cart = []
    $http.get(api)
        .then(function (response) {
            $scope.cart = response.data
        })

    $scope.updateCartItem = function (value) {

        var updatedItem = generateCartItem(value);

        $http.put(api+ value.id, updatedItem)
            .then(function (response) {
                console.log("Đã cập nhật sản phẩm trong giỏ hàng thành công.");
            })
            .catch(function (error) {
                console.error("Đã xảy ra lỗi khi cập nhật sản phẩm trong giỏ hàng:", error);
            });
    };
    function generateCartItem(value) {
        return {
            id: value.id,
            cart: [
                {
                    idSP: value.cart[0].idSP,
                    tenSP: value.cart[0].tenSP,
                    anhSP: value.cart[0].anhSP,
                    giaTien: value.cart[0].giaTien,
                    soluong: value.cart[0].soluong,
                    thanhTien: value.cart[0].giaTien * value.cart[0].soluong
                }
            ]
        };
    }

    $scope.tongsoluong = function () {
        var tsl = 0;
        for (var i = 0; i < $scope.cart.length; i++) {
            tsl += $scope.cart[i].cart[0].soluong; // Sửa lại cấu trúc để truy cập vào số lượng
        }
        return tsl;
    };

    $scope.tongtien = function () {
        var tt = 0;
        for (var i = 0; i < $scope.cart.length; i++) {
            tt += $scope.cart[i].cart[0].soluong * $scope.cart[i].cart[0].giaTien; // Sửa lại cấu trúc để truy cập vào giá tiền
        }
        return tt;
    };

    $scope.delete = function (id) {
        $scope.idDelete = id
    }
    $scope.confirmDelete = function () {
        $http.delete(api + $scope.idDelete)
            .then(function (response) {
               
            })
            .catch(function (error) {
                console.log("Lỗi API");
            })
    }
}