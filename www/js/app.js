/**
 * Created by chenyuching on 5/11/16.
 */

var app = angular.module("app", [
    'appControllers',
    'ui.router',
    'angular-input-stars'
])

.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: "/",
            controller: "homeCtrl",
            templateUrl: "templates/home.html"
        })
        .state('course', {
            url: "/course/:courseId",
            controller: "CourseCtrl",
            templateUrl: "templates/course.html"
        })
        .state('browse', {
            url: "/browse",
            controller: "BrowseCtrl",
            templateUrl: "templates/browse.html"
        })
    ;
});
