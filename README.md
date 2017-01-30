# React Native AppHub

A JS Wrapper for Apphub SDK (https://apphub.io/). Currently, only support iOS.

## Installing The Library
`npm install --save react-native-apphub`

## Installing The Dependency
`npm install --save apphub`

## Automatic Installation
`react-native link ract-native-apphub` or `npm install -g rnpm && rnpm link react-native-apphub`

## Usage

```javascript
import RNAppHub from 'react-native-apphub'; // Import package from node modules

// Init AppHub
// RootURL: AppHub Server
// ApplicationID: Unique app id 
RNAppHub.setUpAppHub('RootURL', 'ApplicationID');

// Poll New app bundle
RNAppHub.fetchBuild();
```

## API Reference
http://docs.apphub.io/docs/getting-started
