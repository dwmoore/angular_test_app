 angular.module('AngularRails')
    .controller('WidgetsCtrl', function ($scope, Restangular, $log) {
        $scope.things = ['Here', 'is', 'a', 'change...'];
        //$log.log('Hello world');

        $scope.makeWidget = function(){

        	$scope.widget = Restangular.all('widgets')

					// POST /accounts
					$scope.widget.post({ name: "dave", price: 10 });
        }


    });

//angular.module('AngularRails')
//		.controller('WidgetsCtrl', function($scope) {
//			$scope.things = ['Stuff', 'More stuff...'];
//		});