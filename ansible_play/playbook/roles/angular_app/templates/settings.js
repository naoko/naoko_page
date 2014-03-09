'use strict';

angular.module('gdClientApp').constant('apiSettings', {
    apiIpAddress: '{{ api_server_ip }}',
    apiPort: '443',
    apiProtocol: 'https',
    getBaseUrl: function(){
        return this.apiProtocol + '://' + this.apiIpAddress + ':' + this.apiPort;
    },
    generatedBuildVersion: '',
    buildVersion: function(){
        var strVersion = '';
        if (this.generatedBuildVersion === ''){
            var today = new Date();
            strVersion = '' + today.getFullYear() + today.getMonth() + today.getDate();
        } else {
            strVersion = this.generatedBuildVersion
        }
        return strVersion;
    }

});
