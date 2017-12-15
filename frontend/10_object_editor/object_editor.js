app.directive('contenteditable', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            // view -> model
            elm.bind('blur', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(elm.html());
                });
            });

            elm.bind('input', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(elm.html());
                });
            });

            // model -> view
            ctrl.$render = function() {
                elm.html(ctrl.$viewValue);
            };
        }
    };
});

app.controller('objectEditorCtrl', ($scope) => {

    function to_plain_text(html) {
        var div = document.createElement("DIV");
        div.innerHTML = html;
        return div.textContent;
    }

    $scope.book = {
        title : 'L’Invitée',
        published : 1943,
        translated : true
    }

    $scope.book_json = syntaxHighlight(JSON.stringify($scope.book,0,2));

    $scope.$watch("book_json", () => {
        try {
            $scope.book = JSON.parse(to_plain_text($scope.book_json));
            $scope.book_json_parse_error = null;
        }
        catch (e) {
            $scope.book_json_parse_error = "Exception: " + e;
        }
    }, true);
});