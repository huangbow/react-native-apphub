
A react-native module that wraps the native Apphub SDK (https://apphub.io/). Currently, only support iOS.

## Why?
[AppHub](https://apphub.io/) is a great tool to dynamically update react native apps, and it provides very clean APIs. However, since the majority of development (including logging) should be done in JS, it will be nice to control this updating function also in JS.

## How?
This RN library provides APIs including initAppHub, fetchNewBuild (Promise), and setServer (for self host).

## Installing The Library
`npm install --save react-native-apphub`

## Installing The Dependency
`npm install --save apphub`

## Automatic Installation
1. `react-native link apphub` or `npm install -g rnpm && rnpm link apphub`
2. `react-native link ract-native-apphub` or `npm install -g rnpm && rnpm link react-native-apphub`

## Configuration (AppHub Native SDKsdfgdaasdfsa
### Connect Your App to AppHub (Example: [AppDelegate.m](https://github.com/AppHubPlatform/AppHubStarterProject/blob/master/iOS/AppHubStarterProject/AppDelegate.m))
#### Import AppHub at the beginning of AppDelegate.m (in Swift, add this line to your bridging header)
```objective-c
#import "AppHub.h"
```
#### Add the following before creating an RCTRootView (most likely in AppDelegate.m). Leave this code commented while you are developing your app. Uncomment it when you are ready to distribute to test users and deploy to the App Store
```objective-c
/**
 * OPTION 3 - AppHub
 *
 * Load cached code and images from AppHub.
 *
 */

AHBuild *build = [[AppHub buildManager] currentBuild];
jsCodeLocation = [build.bundle URLForResource:@"main"
                                withExtension:@"jsbundle"];
```

## Usage

```javascript
import RNAppHub from 'react-native-apphub'; // Import package from node modules

// Init AppHub
// For self hosted app
// RootURL: AppHub Server
// ApplicationID: Unique app id
RNAppHub.initAppHubWithServer('RootURL', 'ApplicationID');

// For using AppHub service
// RNAppHub.initAppHub('ApplicationID');

// Poll New app bundle
RNAppHub.fetchBuild();
```

## API Reference
[AppHub Native SDK](https://github.com/AppHubPlatform/apph
