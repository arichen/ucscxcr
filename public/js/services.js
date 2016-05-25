/**
 * Created by chenyuching on 5/24/16.
 */

angular.module('appServices', [])

    .factory('Reviews', ['$http',function($http) {
        return {
            get : function() {
                return $http.get('/api/reviews');
            },
            // create : function(todoData) {
            //     return $http.post('/api/todos', todoData);
            // },
            // delete : function(id) {
            //     return $http.delete('/api/todos/' + id);
            // }
        }
    }]);