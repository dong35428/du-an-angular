myApp.controller("header",function($scope){
    $scope.nameAccount= localStorage.getItem("name")
    $scope.idAccount= localStorage.getItem("id")

    $scope.indexAccount =''
    if($scope.idAccount){
        $scope.indexAccount = $scope.idAccount
    }
    $scope.logout = function(){
        localStorage.removeItem("id")
        localStorage.removeItem("name")
        window.location.href="../login.html"
    }
})