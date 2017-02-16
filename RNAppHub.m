#import "RNAppHub.h"
#import <AppHub/AppHub.h>
#import <AppHub/AHReachability.h>
#import <AppHub/AppHub+Private.h>

@implementation RNAppHub

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(initAppHubWithServer:(NSString *) rootURL applicationID:(NSString *) applicationID) {
    [AppHub setRootURL:rootURL];
    [AppHub setApplicationID:applicationID];
    [AppHub buildManager].automaticPollingEnabled = NO; // control polling build in JS
}

RCT_EXPORT_METHOD(initAppHub:(NSString *) applicationID) {
    [AppHub setApplicationID:applicationID];
    [AppHub buildManager].automaticPollingEnabled = NO; // control polling build in JS
}

RCT_EXPORT_METHOD(setRootURL:(NSString *) rootURL) {
    [AppHub setRootURL:rootURL];
}

RCT_EXPORT_METHOD(setAutomaticPollingEnabled:(BOOL) toggle) {
    [AppHub buildManager].automaticPollingEnabled = toggle;
}

RCT_EXPORT_METHOD(setApplicationID:(NSString *) applicationID) {
    [AppHub setApplicationID:applicationID];
}

RCT_REMAP_METHOD(fetchBuild,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
    
    AHReachability *reachability = [[AppHub sharedManager] reachability];
    
    if (([reachability isReachableViaWiFi] || ([reachability isReachableViaWWAN] && [AppHub buildManager].cellularDownloadsEnabled)) &&
        [AppHub applicationID]) {
            AHBuild *cachedBuild = [AppHub buildManager].currentBuild;
        
            [[AppHub buildManager] fetchBuildWithCompletionHandler:^(AHBuild *result, NSError *error) {
                // If the `result` AHBuild is not nil, then it is guaranteed
                // to be the most up-to-date build of the app.
                if (result != nil) {
                    resolve(@[cachedBuild.identifier, result.identifier, result.buildDescription]);
                } else {
                    NSError *error =
                    reject(@"fetchError", @"Cannot fetch builds", error);
                }
            }];
    } else {
        reject(@"fetchError", @"Network not under right condition", nil);
    }
}


@end
