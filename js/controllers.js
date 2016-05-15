/**
 * Created by chenyuching on 5/14/16.
 */

var controllers = angular.module('appControllers', []);

controllers.controller('homeCtrl', function ($scope) {
    $scope.previewLimit = 100;

    var dummyRecent = [
        {
            'course': {
                'course_id': '1',
                'course_name': 'Course Name A',
                'instructor_name': 'John Doe',
                'year': 2016,
                'quarter': 'Spring'
            },
            'review': {
                'author_id': '3',
                'author_name': 'Bob 3',
                'review': 'Good good good good good',
                'date_created': '2012-04-23T18:25:43.511Z'
            }
        },
        {
            'course': {
                'course_id': '1',
                'course_name': 'Course Name A',
                'instructor_name': 'John Doe',
                'year': 2016,
                'quarter': 'Spring'
            },
            'review': {
                'author_id': '3',
                'author_name': 'Bob 3',
                'review': 'Good good good good good',
                'date_created': '2012-04-23T18:25:43.511Z'
            }
        },
        {
            'course': {
                'course_id': '1',
                'course_name': 'Course Name A',
                'instructor_name': 'John Doe',
                'year': 2016,
                'quarter': 'Spring'
            },
            'review': {
                'author_id': '3',
                'author_name': 'Bob 3',
                'review': 'Good good good good good',
                'date_created': '2012-04-23T18:25:43.511Z'
            }
        },
    ];

    $scope.recent = dummyRecent;
});

controllers.controller('CourseCtrl', function ($scope) {
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
});

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

controllers.controller('BrowseCtrl', function ($scope) {
    var dummyData = [
        {
            'course_id': '1',
            'course_name': 'Course Name A',
            'instructor_name': 'John Doe',
            'year': 2016,
            'quarter': 'Spring'
        },
        {
            'course_id': '1',
            'course_name': 'Course Name A',
            'instructor_name': 'John Doe',
            'year': 2016,
            'quarter': 'Spring'
        },
        {
            'course_id': '1',
            'course_name': 'Course Name A',
            'instructor_name': 'John Doe',
            'year': 2016,
            'quarter': 'Spring'
        },
        {
            'course_id': '1',
            'course_name': 'Course Name A',
            'instructor_name': 'John Doe',
            'year': 2016,
            'quarter': 'Spring'
        }
    ];
    
    $scope.courses = dummyData;
});