app.controller('angularjsCtrl', ($scope) => {
    $scope.schedule = {
        events  : [
                    ['10:00-12:00', null, null, 'Kick-off', null, null, null, null],
                    ['14:00-16:00', 'All-Hands', null, 'Sprint Planning', null, 'Jour Fixe', null, null],
                  ],
        details : [
                    [null, null, 'Project 1', null, null, null, null],
                    ["can't join", null, 'mandatory', null, 'prepare talk', null, null],
                  ]
    };
});