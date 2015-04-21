angular
    .module('AngularRails', [
        'ngAnimate',
        'ui.router',
        'templates',
        'restangular'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    	/*
	     * Routes and States
	     */
	    $stateProvider
	        .state('home', {
	            url: '/',
	            templateUrl: 'home.html',
	            controller: 'HomeCtrl'
	        }) // make sure you remove the semicolon

	        /* An abstract state that just serves as a
	         * parent for the below child states
	         *
	         * Also note the indentation on the child
	         * states, they take a step in but the code
	         * does not. It is only for visual reference.
	         */

	        .state('dashboard', {
	            abstract: true,
	            url: '/dashboard',
	            templateUrl: 'dashboard/layout.html'
	        })
	            // the default route when someone hits dashboard
	            .state('dashboard.one', {
	                url: '',
	                templateUrl: 'dashboard/one.html'
	            })
	            // this is /dashboard/two
	            .state('dashboard.two', {
	                url: '/two',
	                templateUrl: 'dashboard/two.html'
	            })
	            // this is /dashboard/three
	            .state('dashboard.three', {
	                url: '/three',
	                templateUrl: 'dashboard/three.html'
	            })

	        .state('test', {
	        		url: '/test',
	        		templateUrl: 'test.html'
	        		// controller: 'WidgetsCtrl'
	        })

	        .state('widget', {
	        		url: '/widget',
	        		templateUrl: 'widget.html',
	        		controller: 'WidgetsCtrl'
	        });

	    // default fall back route
	    $urlRouterProvider.otherwise('/');

	    // enable HTML5 Mode for SEO
	    $locationProvider.html5Mode(true);

    });