(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController)
    .controller("ItemAdderController", ItemAdderController)
    .controller("ListShowController", ListShowController)
    .service("ShoppingListService", ShoppingListService);

  LunchCheckController.$inject = ["$scope"];
  ItemAdderController.$inject = ["ShoppingListService"];
  ListShowController.$inject = ["ShoppingListService"];

  function ListShowController(ShoppingListService) {
    var showList = this;
    showList.items = ShoppingListService.getItems();

    showList.removeItem = function (itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    };
  }
  function ItemAdderController(ShoppingListService) {
    var itemAdder = this;
    itemAdder.itemName = "";
    itemAdder.itemQuantity = 0;

    itemAdder.addItem = function () {
      ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
      itemAdder.itemName = "";
      itemAdder.itemQuantity = 0;
    };
  }

  function ShoppingListService() {
    var service = this;
    var items = [];

    service.addItem = function (name, quantity) {
      var item = {
        name: name,
        quantity: quantity
      };
      items.push(item);
    };

    service.getItems = function () {
      return items;
    };

    service.removeItem = function (index) {
      items.splice(index, 1);
    };
  }
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
