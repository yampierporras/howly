angular.module('appHowly', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('inicio', {
        url: '/inicio',
        templateUrl: 'views/inicio.html',
        controller: 'ctrlInicio'
    })
    .state('registro', {
        url: '/registro',
        templateUrl: 'views/registro.html',
        controller: 'ctrlRegistro'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'ctrlLogin'
    });

    $urlRouterProvider.otherwise('inicio');
})
.factory('comun', function(){
    var global = {
        name: 'Yampier',
        getNombre: function(){
            return global.name;
        },
        setNombre: function(nombre){
            global.name = nombre;
        }
    };
    return global;
})
.controller('MainCtrl', function($scope, $state, comun){
    $scope.userName = "Kokoliso";

    $scope.goLogin = function(){
        $state.go('login');
    }
    $scope.goRegistro = function(){
        $state.go('registro');
    }
    $scope.goInicio = function(){
        alert('xD');
        comun.setNombre($scope.userName);
        $state.go('inicio');
    }
})
.controller('ctrlInicio', function($scope, $state, comun){
    $scope.nombreUsuario = comun.getNombre();
})
.controller('ctrlRegistro', function($scope, $state){

})
.controller('ctrlLogin', function($scope, $state){

})
