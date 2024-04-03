#import "AppDelegate.h"
// import-pesdk
#import <RNPhotoEditorSDK/RNPhotoEditorSDK.h>
// import-pesdk
// import-vesdk
#import <RNVideoEditorSDK/RNVideoEditorSDK.h>
// import-vesdk

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"CatalogUI";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  [self applyLocalization];
  [self applyCustomIcons];
  [self applyNativeInterfaces];

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

/// Applies custom localization.
- (void) applyLocalization
{
  // highlight-localization-pesdk
  [PESDK setLocalizationDictionary: @{
      @"en": @{
        @"pesdk_transform_title_name": @"Crop",
        @"pesdk_adjustments_title_name": @"Correct",
        @"pesdk_adjustments_button_reset": @"Clear"
      }
  }];
  // highlight-localization-pesdk
  // highlight-localization-vesdk
  [VESDK setLocalizationDictionary: @{
      @"en": @{
        @"pesdk_transform_title_name": @"Crop",
        @"pesdk_adjustments_title_name": @"Correct",
        @"pesdk_adjustments_button_reset": @"Clear"
      }
  }];
  // highlight-localization-vesdk
}

/// Applies custom icons.
- (void) applyCustomIcons
{
  // highlight-icons-pesdk
  [PESDK setBundleImageBlock:^UIImage * _Nullable(NSString * _Nonnull identifier) {
    if ([identifier isEqualToString:@"imgly_icon_save"]) {
      return [UIImage imageWithContentsOfFile:[NSBundle.imgly_resourceBundle URLForResource:@"imgly_icon_approve_44pt" withExtension:@"png"].path];
    }
    return nil;
  }];
  // highlight-icons-pesdk
  // highlight-icons-vesdk
  [VESDK setBundleImageBlock:^UIImage * _Nullable(NSString * _Nonnull identifier) {
    if ([identifier isEqualToString:@"imgly_icon_save"]) {
      return [UIImage imageWithContentsOfFile:[NSBundle.imgly_resourceBundle URLForResource:@"imgly_icon_approve_44pt" withExtension:@"png"].path];
    }
    return nil;
  }];
  // highlight-icons-vesdk
}

- (void) applyNativeInterfaces
{
  // highlight-configuration-pesdk
  RNPhotoEditorSDK.configureWithBuilder = ^(PESDKConfigurationBuilder * _Nonnull builder) {
    // Disable the color pipette for the text color selection tool
    [builder configureTextColorToolController:^(PESDKTextColorToolControllerOptionsBuilder * _Nonnull options) {
      NSMutableArray<PESDKColor *> *colors = [options.availableColors mutableCopy];
      [colors removeObjectAtIndex:0]; // Remove first color item which is the color pipette
      options.availableColors = colors;
    }];
  };
  // highlight-configuration-pesdk
  // highlight-editor-pesdk
  RNPhotoEditorSDK.willPresentPhotoEditViewController = ^(PESDKPhotoEditViewController * _Nonnull photoEditViewController) {
    NSLog(@"willPresent: %@", photoEditViewController);
  };
  // highlight-editor-pesdk
  // highlight-configuration-vesdk
  RNVideoEditorSDK.configureWithBuilder = ^(PESDKConfigurationBuilder * _Nonnull builder) {
    // Disable the color pipette for the text color selection tool
    [builder configureTextColorToolController:^(PESDKTextColorToolControllerOptionsBuilder * _Nonnull options) {
      NSMutableArray<PESDKColor *> *colors = [options.availableColors mutableCopy];
      [colors removeObjectAtIndex:0]; // Remove first color item which is the color pipette
      options.availableColors = colors;
    }];
  };
  // highlight-configuration-vesdk
  // highlight-editor-vesdk
  RNVideoEditorSDK.willPresentVideoEditViewController = ^(PESDKVideoEditViewController * _Nonnull videoEditViewController) {
    NSLog(@"willPresent: %@", videoEditViewController);
  };
  // highlight-editor-vesdk
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
