/**
 * Node-WebKit module for AngularJS.
 * Exposes every type in nw.gui as a factory so it can be injected separately.
 * @link http://github.com/sprij/angular-nw
 * @license MIT
 */

(function (angular, require) {
    
    'use strict';
    
    // requires native api
    var gui = require('nw.gui');
    
    // creates module
    var nw = angular.module('nw', []);
    
    // creates a factory for each property
    for (var guiType in gui) {
        if (guiType === 'Base') {
            //Ignoring base type for all types
            continue;
        }
        var factoryName = 'nw'+guiType;
        var factoryGet = function () {
            return gui[guiType];
            };
        console.debug('Registering factory "'+ factoryName +'".');
        nw.factory(factoryName, factoryGet);
    }
}(window.angular, window.require));
