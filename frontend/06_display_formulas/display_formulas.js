// BEGIN Generic setup code for MathJax in AngularJS
app.directive("mathjax", () => {
    return {
        link: (scope, elm, attrs, ctrl) => {
                if (typeof MathJax != "undefined")
                    MathJax.Hub.Queue(["Typeset",MathJax.Hub, elm[0]]);
              }
    };
});
// END Generic setup code for MathJax in AngularJS