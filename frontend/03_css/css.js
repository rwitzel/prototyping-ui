app.controller('formattingCtrl', ($scope) => {
    $scope.movies = [
        {
            name : 'Karla',
            release_date : new Date('1965').getTime()
        },
        {
            name : 'Alien',
            release_date : new Date('1979-05-25').getTime(),
            budget: {
                amount : 10 * 1000 * 1000,
                currency : '$'
            }
        }
    ];

    $scope.to_date = (milliseconds_since_epoch) => {
        return new Date(milliseconds_since_epoch)
    };
});