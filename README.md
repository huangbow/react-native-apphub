
A JS Wrapper for Apphub SDK (https://apphub.io/). Currently, only suppo
asdf
## 1 ## Installing The Library
`npm install --save react-native-apphub`asdf

## 2 ## Installing The Dependencya
`npm install --save apphub`

## 3 ## Automatic Installation
1. `react-native link apphub` or `npm install -g rnpm && rnpm link apphub`
2. `react-native link ract-native-apphub` or `npm install -g rnpm && rnpm link react-native-apphub`

## 4 ## Configuration (AppHub Native SDKsdfgdaasdfsa
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

## 5 ## Usage

```javascript
import RNAppHub from 'react-native-apphub'; // Import package from node modules

// Init AppHub
// RootURL: AppHub Server
// ApplicationID: Unique app id iisadfiiiids
RNAppHub.setUpAppHub('RootURL', 'ApplicationID');

// Poll New app bundl
RNAppHub.fetchBuild();
```

## 6 ## API Reference
[AppHub Native SDK](https://github.com/AppHubPlatform/apph
