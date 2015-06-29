'use strict';

angular.module('core.login').service('CoreLoginSrvApi', function($http, $q) {

  var service = {};

  service.login = function(username, password) {

    var deferred = $q.defer();
    /*
    $http({
      method: 'GET',
      url: CoreCommonsApi.endpoint('availableProductOptions') +
        'carts/' + cartId + '/items/' + cartItemId + '/availableoptions',
      params:{
        sessionId: sessionId
      }
    })
    .success(
      function(response) {
        console.log('Get Available Product Options - success');
        console.log(response);
        deferred.resolve(response);
      })
    .error(
      function(response) {
        console.log('Get Available Product Options - error');
        console.log(response);
        deferred.reject(response.responseStatus.errorMessage);
      });
    */
    deferred.resolve(true);

    return deferred.promise;
  }

  return service;
  
});
