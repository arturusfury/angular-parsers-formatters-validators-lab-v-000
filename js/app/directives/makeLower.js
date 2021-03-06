function makeLower() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      ngModel.$formatters.push(function (string) {
        return string.toUpperCase();
      });

      ngModel.$parsers.push(function (string) {
        return string.toLowerCase();
      });
    }
  }
}

angular
	.module('app')
	.directive('makeLower', makeLower);
