/**
 * @providesModule RNAppHub
 * @flow
 */
'use strict';

var NativeRNAppHub = require('NativeModules').RNAppHub;

/**
 * High-level docs for the RNAppHub iOS API can be written here.
 */

var RNAppHub = {
  test: function() {
    NativeRNAppHub.test();
  }

  initAppHubWithServer: function(rootURL: string, applicationID: string) {
  	NativeRNAppHub.initAppHubWithServer(rootURL, applicationID);
  }

  initAppHubr: function(applicationID: string) {
  	NativeRNAppHub.initAppHub(applicationID);
  }

  setRootURL: function(rootURL: string) {
  	NativeRNAppHub.setRootURL(rootURL);
  }

  setApplicationID: function(applicationID: string) {
  	NativeRNAppHub.setApplicationID(applicationID);
  }

  setAutomaticPollingEnabled: function(toggle: boolean) {
  	NativeRNAppHub.setAutomaticPollingEnabled(toggle);
  }

  fetchBuild: function () {
  	NativeRNAppHub.fetchBuild();
  }
};

module.exports = RNAppHub;
