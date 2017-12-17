app.directive('toc', () => {
    return {
        restrict: 'A', // via attribute here
        link: (scope, element, attrs) => { // register DOM listeners, update DOM ...
            $(element).toc({headings: "h2,h3,h4"});
        }
    };
});

app.controller('pluginsCtrl', ($scope) => {

    $scope.countries = [
        { 'id': 'DE', 'label': 'Germany' },
        { 'id': 'FR', 'label': 'France' },
        { 'id': 'DK', 'label': 'Denmark' }
    ];
    $scope.selected_countries = [];


    $scope.chart = {
        labels : ["January", "February", "March", "April", "May", "June", "July"],
        series : ['Series A', 'Series B'],
        data : [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ],
        datasetOverride : [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }],
        options: {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }
        }
    }
});

