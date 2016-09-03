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
.factory('global', function(){
    /*var global = {
        name: 'Yampier',
        getNombre: function(){
            return global.name;
        },
        setNombre: function(nombre){
            global.name = nombre;
        }
    };*/

    var constant= {};
    constant.usuario = {};
    constant.registrar = function(usuario){

    }

    return constant;
})
.controller('mainCtrl', function($scope, $state, global){
    $scope.userName = "Kokoliso";
    $scope.login = true;

    $scope.goLogin = function(){
        $state.go('login');
    }
    $scope.goRegistro = function(){
        $state.go('registro');
    }
    $scope.goInicio = function(){
        comun.setNombre($scope.userName);
        $state.go('inicio');
    }

    //REGISTER CLASS FUNCTIONS
    $scope.logout = function(){
        $scope.login = false;
        $state.go('inicio');
    }
})
.controller('ctrlInicio', function($scope, $state, global){

})
.controller('ctrlRegistro', function($scope, $state, global){
    $scope.usuario = {};

    $scope.registrar = function(){
            if($scope.user.pass != $scope.user.pass2) {
                alert('Las contraseñas no coinciden');
                $scope.user.pass = '';
                $scope.user.pass2 = '';
            }
            else {
                $scope.usuario = {
                    nombre: $scope.user.nombre,
                    apellido: $scope.user.apellido,
                    id: $scope.user.id,
                    contraseña: $scope.user.pass
                }
                global.usuario = $scope.usuario;//Pasamos el usuario de forma global
                alert('Usuario registrado');
                console.log($scope.usuario);
                $scope.user.nombre = '';
                $scope.user.apellido = '';
                $scope.user.id = '';
                $scope.user.pass = '';
                $scope.user.pass2 = '';
            }
    }

    $scope.mostrar = function() {

    }

})
.controller('ctrlLogin', function($scope, $state, global){

    $scope.ingresar = function(){
        alert('funciono');
        if($scope.username === global.usuario.id && $scope.password === global.usuario.contraseña ){
            alert('Bienvenido '+global.usuario.nombre);
        }else{
            alert('Usuario o Contraseña incorrecta');
        }
    }
})
