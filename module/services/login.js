'use strict';

angular.module('core.login').service('CoreLoginSrv',function(CoreLoginSrvApi) {
        var service={};

        service.login = function(username, password){
            return CoreLoginSrvApi.login(username,password);
        }

        return service;
});
