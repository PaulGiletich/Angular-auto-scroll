
angular.module('auto-scroll', []).directive('autoScroll', function($timeout) {
  return {
    restrict: 'A',
    scope: {
      autoScrollOptions: '=autoScroll'
    },
    link: function($scope, el) {
      var offsetTop = $scope.autoScrollOptions.offsetTop ? $scope.autoScrollOptions.offsetTop : 0;
      var scrollTo = $scope.autoScrollOptions.scrollTo;
      var watch = $scope.autoScrollOptions.watch;

      $scope.$parent.$watch(watch, function() {
        $timeout(function () {
          var $scrollTo = $(el).find(scrollTo);
          if($scrollTo.length){
            $(el).scrollTop(0).scrollTop($scrollTo.offset().top - $(el).offset().top - offsetTop);
          }
        });
      })
    }
  }
});