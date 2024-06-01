window.UpdateCategoryCotroller = function (
  $scope,
  $http,
  $location,
  $routeParams
) {
  var api = "http://localhost:3000/category/";
  $http.get(api + $routeParams.id)
  .then(function(response){
    $scope.data= response.data
  })
  .catch(function (error) {
    console.log("Lỗi Api");
  });
  $scope.update = function(){
    $http
    .patch(api+$routeParams.id,$scope.data)
    .then(function(response){
        alert("Sửa thành công")
        $location.path("/list-cate")
    })
  }
};
