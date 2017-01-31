/**
 * @providesModule RNAppHub
 * @flow
 */
'use strict';

var NativeModules = require('react-native').NativeModules
var NativeRNAppHub = NativeModules.RNAppHub;

var RNAppHub = {
  test: () => {
    NativeRNAppHub.test();
  },
  initAppHubWithServer: (rootURL: string, applicationID: string) => {
    NativeRNAppHub.initAppHubWithServer(rootURL, applicationID);
  },
  initAppHub: (applicationID: string) => {
    NativeRNAppHub.initAppHub(applicationID);
  },
  setRootURL: (rootURL: string) => {
    NativeRNAppHub.setRootURL(rootURL);
  },
  setApplicationID: (applicationID: string) => {
    NativeRNAppHub.setApplicationID(applicationID);
  },
  setAutomaticPollingEnabled: (toggle: boolean) => {
    NativeRNAppHub.setAutomaticPollingEnabled(toggle);
  },
  fetchBuild: () => {
    return new Promise((resolve, reject) => {
      NativeRNAppHub.fetchBuild().then(results => {
        resolve(results);
      }).catch(err => reject(err));
    });
  }
};

module.exports = RNAppHub;
