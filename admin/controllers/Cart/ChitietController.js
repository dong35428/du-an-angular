window.ChitietController = function ($scope, $http, $location, $routeParams) {

    var api = "http://localhost:3000/order/"

    $http.get(api + $routeParams.id)
        .then(function (response) {
            $scope.data = response.data
            // Tính toán tổng số lượng sản phẩm và tổng giá tiền của đơn hàng
            calculateTotalValues($scope.data.order);
        })
        .catch(function () {
            console.log("Lỗi API");
        })


    // Hàm tính tổng số lượng sản phẩm và tổng giá tiền của đơn hàng
    function calculateTotalValues(items) {
        var totalQuantity = 0;
        var totalPrice = 0;

        angular.forEach(items, function (data) {
            totalQuantity += data.soluongDH;
            totalPrice += data.giaTienDH * data.soluongDH;
        });

        // Gán kết quả cho các thuộc tính tương ứng trong đối tượng $scope.order
        $scope.data.soLuongSanPham = totalQuantity;
        $scope.data.tongTien = totalPrice;
    }
};
