(function () {
    "use strict";
    angular
        .module("LunchCheck", [])
        .controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$inject = ["$scope"];
    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.checkLunch = function () {
            if ($scope.lunchItems.trim() !== "") {
                var rawItems = $scope.lunchItems.split(",");
                var items = [];

                rawItems.forEach(function (item) {
                    if (item.trim() !== "") {
                        items.push(item.trim());
                    }
                });
                console.log(rawItems);
                console.log(items);

                if (items.length <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                }
                $scope.messageColor = "green";
                $scope.inputBorder = "green-border";
            } else {
                $scope.message = "Please enter data first!";
                $scope.messageColor = "red";
                $scope.inputBorder = "red-border";
            }
        };

        // numer is <= 3 -> "Enjoy!"
        // numer is > 3 -> "Too much!"
        // numer is "" -> "Please enter data first!"
        // ", ," empty? not consider
    }
})();
