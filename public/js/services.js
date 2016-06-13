/**
 * Created by chenyuching on 5/24/16.
 */

angular.module('appServices', [])

    .factory('Reviews', ['$http',function($http) {
        return {
            get : function(page, limit) {
                var params = {
                    page : page,
                    limit : limit,
                };
                var config = {
                    params : params
                };
                return $http.get('/api/reviews', config);
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
            get : function (keyword) {
                console.log('keyword:', keyword);
                var params = {
                    keyword : keyword
                };
                var config = { params : params };
                return $http.get('/api/courses', config);
            },
            getById : function (id) {
                return $http.get('/api/course/' + id);
            }
        }
    }]);