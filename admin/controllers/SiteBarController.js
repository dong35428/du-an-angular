myApp.controller("sitebar",function($scope){
    $scope.nameAccount= localStorage.getItem("name")
    $scope.idAccount= localStorage.getItem("id")
    $scope.logout = function(){
        localStorage.removeItem("id")
        localStorage.removeItem("name")
        window.location.href="../login.html"
    }
})