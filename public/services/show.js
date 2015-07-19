/**
 * Created by subratrout on 7/18/15.
 */
angular.module('MyApp')
    .factory('Show', ['$resource', function($resource) {
        return $resource('/api/shows/:_id');
    }]);