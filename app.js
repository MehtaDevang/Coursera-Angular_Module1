(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.food = "";
    $scope.message = "";

    $scope.checkLunch = function () {
      $scope.food = $scope.food.trim();
      if ($scope.food === "") {
        $scope.message = "Please enter data first";
        console.log("hello");
      } else {
        var arr = [];
        arr = $scope.food.split(",");
        console.log("arr: " + arr.length);
        if (arr.length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      }
    };
  }
})();
