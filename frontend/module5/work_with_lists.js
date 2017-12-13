const board_games = [
    {
        name : 'Friedrich',
        publisher : 'Histogame',
        year_published : 2004,
        rating : 9.8,
        categories: [ 'Age of Reason', 'Wargame' ],
        image : 'https://cf.geekdo-images.com/images/pic1064931_md.jpg'
    },
    {
        name : 'Modern Art',
        publisher : 'Many',
        year_published : 1992,
        rating : 8.9,
        categories : [ 'Card Game','Economic' ],
        image : 'https://www.dhresource.com/0x0s/f2-albu-g4-M01-D9-D3-rBVaEVmmlv6ABKh7AAcoJ-WWEhE679.jpg/wholesale-modern-art-board-game-3-5-players.jpg'
    },
    {
        name : 'Go',
        rating : 9.7,
        publisher : 'Public Domain',
        year_published: -2200,
        categories : [ 'Card Game','Economic' ],
        image : 'https://cf.geekdo-images.com/images/pic1728832_md.jpg'
    }
];

app.controller('workwithlistsCtrl', ($scope) => {
    Object.assign($scope, {
        board_games             : board_games,
        selected_board_game     : board_games[0],
        show_board_game_details : board_game => $scope.selected_board_game = board_game,
        remove_board_game       : board_game => $scope.board_games.removeByValue(board_game),
        filter_expr             : '',
        filter_games            : (games) => games.filter(game => JSON.stringify(game).toLowerCase().includes($scope.filter_expr.toLowerCase()))
    });
});

