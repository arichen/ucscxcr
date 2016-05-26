/**
 * Created by chenyuching on 5/24/16.
 */

angular.module('appServices', [])

    .factory('Reviews', ['$http',function($http) {
        return {
            get : function() {
                return $http.get('/api/reviews');
            },
            getById : function (id) {
                return $http.get('/api/review/' + id);
            },
            create : function(data) {
                return $http.post('/api/review', data);
            },
            // delete : function(id) {
            //     return $http.delete('/api/todos/' + id);
            // }
        }
    }])

    .factory('Courses', ['$http', function ($http) {
        return {
            get : function () {
                return $http.get('/api/courses');
            },
            getById : function (id) {
                return $http.get('/api/course/' + id);
            }
        }
    }]);