(function () {
    angular.module('signupApp', [])
    .controller('formController', function ($scope, $log, $http) {
        $scope.step = 1;

        $scope.user = {
            name:    "",
            zip:     "",
            address: ""
        };

        // 郵便番号から住所を検索するコールバック関数
        $scope.searchAddress = function (zip) {
            // すでに住所がうまっていたらなにもしない
            if ($scope.user.address && $scope.user.address.length !== 0) {
                return;
            }
            zip = zip.replace(/-/, '');
            // 郵便番号が7桁じゃなければなにもしない
            if (zip.length !== 7) {
                return;
            }

            $http.jsonp('http://api.zipaddress.net/?zipcode=' + encodeURIComponent(zip) + '&callback=JSON_CALLBACK').then(function (res) {
                $log.info(res.data);
                $scope.user.address = res.data.fullAddress;
            });
        };

        $scope.typeStr = function (type) {
            if (type == 'kojin') {
                return '個人';
            } else {
                return '法人';
            }
        };

        // confirm 画面に遷移させます
        $scope.confirm = function () {
            $scope.step = 2;
        };
        // フォーム画面にもどします
        $scope.backToForm = function () {
            $scope.step = 1;
        };
        // 完了します
        $scope.finish = function () {
            // 実際にはここでサーバー側に送信する必要があります。
            $scope.step = 3;
        };
    });
})();
