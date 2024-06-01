window.DonhangController = function ($scope, $http, $location, $routeParams) {
    var api = "http://localhost:3000/order/?userInfo.id=" + $routeParams.user; // Thêm trường user vào URL
    $http.get(api)
    .then(function(response) {
        $scope.listA = response.data;
        console.log($scope.listA);
    });
};
