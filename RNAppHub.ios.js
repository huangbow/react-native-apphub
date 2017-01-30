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

  setUpAppHub: function(rootURL: string, applicationID: string) {
  	NativeRNAppHub.setUpAppHub(rootURL, applicationID);
  }

  setRootURL: function(rootURL: string) {
  	NativeRNAppHub.setRootURL(rootURL);
  }

  setApplicationID: function(applicationID: string) {
  	NativeRNAppHub.setApplicationID(applicationID);
  }

  fetchBuild: function () {
  	NativeRNAppHub.fetchBuild();
  }
};

module.exports = RNAppHub;
