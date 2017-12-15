app.controller('backendcallsCtrl', ($scope) => {

    $scope.params = getObjectFromLocalStorage('params') || {
        param1        : 'abc',
        param2        : 'def',
        allow_caching : true,
    };

    $scope.result = null;

    $scope.fetch_command1_result = () => {
        $scope.result = "Requesting ...";
        fetch_command1_result(
                $scope.params.param1,
                $scope.params.param2,
                $scope.params.allow_caching)
            .then((json) => {
                $scope.$apply(() => {
                    $scope.result = json;
                });
            })
            .catch((error) => {
                $scope.$apply(() => {
                    $scope.result = error;
                });
            });
    };

    // =================================================================

    $scope.storage_model_version = () => storage_model_version;
    
    const on_params_change = function() {
        setObjectInLocalStorage('params', $scope.params);
    };

     $scope.$watch("params", on_params_change, true);

    setModelVersionInLocalStorage();
});

