poiApp.directive('agregarOpinion', agregarOpinion);

function agregarOpinion() {
    var params = {
        restrict: 'EA',
        templateUrl: 'html/agregarOpinion.html'
    };
    return params;
}
