window.ListCartController= function($scope,$http) {
    var api = "http://localhost:3000/order/";
    $scope.cart = []
    $http.get(api)
       .then(function (response) {
            $scope.listDH = response.data
        })
       .catch(function (error) {
            console.log("Lỗi Api");
        })
}