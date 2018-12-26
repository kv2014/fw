define([
    'app',
    "register",
    "ajaxService"
], function(app, register, ajaxService){

    'use strict';

    var loginController = function($scope, $state, $http, ajaxService){
        $scope.ssLogin = function(){

            var userName = 'kevin'; // $scope.vm.userName;
            var password = '111111'; //$scope.vm.password;

            //query db to match input account.

            //verify
            if(userName === 'kevin' && password === '111111'){
                $state.go('home');
            }else{
                // validation
                alert('please input correct username or password!')
            }

        };

        $scope.ssReset = function(){
            //clear
        }
    };

    register(app).controller('LoginController', loginController);

    loginController.$inject = ['$scope', '$state', '$http', 'ajaxService'];

});