window.UpdateCotroller = function ($scope, $http, $location, $routeParams) {
    var api = "http://localhost:3000/order/"
    $http.get(api + $routeParams.id)
        .then(function(response){
           $scope.data = response.data
        })
    
    $scope.update = function(){
        var updateDH = upDH($scope.data)
        $http.put(api + $routeParams.id, updateDH)
            .then(function(response){
                alert("Cập nhật thành công")
                $location.path("/list-cart")
            })
    }

    function upDH(data){
        return {
            id: data.id,
            order: data.order.map(function (data) {
                return {
                    idDH: data.idDH,
                    tenDH: data.tenDH,
                    anhDH: data.anhDH,
                    giaTienDH: data.giaTienDH,
                    soluongDH: data.soluongDH,
                    thanhTienDH: data.thanhTienDH
                };
            }),
            userInfo: {
                id: data.userInfo.id, 
                username: data.userInfo.username, 
                email: data.userInfo.email, 
                password: data.userInfo.password,
                role: data.userInfo.role
            },
            trangThai: $scope.data.trangThai,
            sdt: data.sdt,
            diachi: data.diachi,
            ghichu: data.ghichu,
            ngayDatHang: data.ngayDatHang
        }
    }

}