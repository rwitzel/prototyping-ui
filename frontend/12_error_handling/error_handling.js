app.controller('errorHandlingCtrl', ($scope) => {

    debug_context.errorHandling = $scope;

    $scope.a_variable = 'Hi!'; // <- try to change the variable via the JavaScript console

});

