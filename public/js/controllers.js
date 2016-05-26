/**
 * Created by chenyuching on 5/14/16.
 */

var controllers = angular.module('appControllers', []);

controllers.controller('homeCtrl', ['$scope', 'Reviews', function ($scope, Reviews) {
    $scope.previewLimit = 100;
    
    Reviews.get()
        .success(function (data) {
            $scope.recent = data;
        });
}]);

controllers.controller('CourseCtrl', ['$scope', '$stateParams', 'Courses', 'Reviews', function ($scope, $stateParams, Courses, Reviews) {
    var dummyCourse = {
        'course_id': '1',
        'course_name': 'Course Name A',
        'instructor_name': 'John Doe',
        'year': 2016,
        'quarter': 'Spring'
    };

    var dummyReviews = [
        {
            'author_id': '3',
            'author_name': 'Bob 3',
            'review': 'Good good good good good'
        },
        {
            'author_id': '3',
            'author_name': 'Bob 3',
            'review': 'Good good good good good'
        },
        {
            'author_id': '3',
            'author_name': 'Bob 3',
            'review': 'Good good good good good'
        }
    ];

    $scope.course = dummyCourse;
    $scope.reviews = dummyReviews;

    $scope.isBtnReviewClicked = false;
}]);

controllers.controller('ReviewFormCtrl', function ($scope) {
    $scope.review = {
        'isAnonymous': false,
        'rating': 0,
        'review': null
    }

    $scope.submitForm = function () {
        console.log($scope.review);
    }
});

controllers.controller('BrowseCtrl', ['$scope', 'Courses', function ($scope, Courses) {
    Courses.get().success(function (data) {
        $scope.courses = data;
    });
}]);

controllers.controller('NavCtrl', function ($scope, $state) {
    $scope.current = $state.current.name;
})