#import "AppDelegate.h"
// import-pesdk
#import <RNPhotoEditorSDK/RNPhotoEditorSDK.h>
// import-pesdk
// import-vesdk
#import <RNVideoEditorSDK/RNVideoEditorSDK.h>
// import-vesdk

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#import <React/RCTAppSetupUtils.h>

#if RCT_NEW_ARCH_ENABLED
#import <React/CoreModulesPlugins.h>
#import <React/RCTCxxBridgeDelegate.h>
#import <React/RCTFabricSurfaceHostingProxyRootView.h>
#import <React/RCTSurfacePresenter.h>
#import <React/RCTSurfacePresenterBridgeAdapter.h>
#import <ReactCommon/RCTTurboModuleManager.h>

#import <react/config/ReactNativeConfig.h>

static NSString *const kRNConcurrentRoot = @"concurrentRoot";

@interface AppDelegate () <RCTCxxBridgeDelegate, RCTTurboModuleManagerDelegate> {
  RCTTurboModuleManager *_turboModuleManager;
  RCTSurfacePresenterBridgeAdapter *_bridgeAdapter;
  std::shared_ptr<const facebook::react::ReactNativeConfig> _reactNativeConfig;
  facebook::react::ContextContainer::Shared _contextContainer;
}
@end
#endif

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  RCTAppSetupPrepareApp(application);

  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];

#if RCT_NEW_ARCH_ENABLED
  _contextContainer = std::make_shared<facebook::react::ContextContainer const>();
  _reactNativeConfig = std::make_shared<facebook::react::EmptyReactNativeConfig const>();
  _contextContainer->insert("ReactNativeConfig", _reactNativeConfig);
  _bridgeAdapter = [[RCTSurfacePresenterBridgeAdapter alloc] initWithBridge:bridge contextContainer:_contextContainer];
  bridge.surfacePresenter = _bridgeAdapter.surfacePresenter;
#endif

  NSDictionary *initProps = [self prepareInitialProps];
  UIView *rootView = RCTAppSetupDefaultRootView(bridge, @"CatalogUI", initProps);

  if (@available(iOS 13.0, *)) {
    rootView.backgroundColor = [UIColor systemBackgroundColor];
  } else {
    rootView.backgroundColor = [UIColor whiteColor];
  }

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];

  [self applyLocalization];
  [self applyCustomIcons];
  [self applyNativeInterfaces];

  return YES;
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

/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feture is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
  // Switch this bool to turn on and off the concurrent root
  return true;
}

- (NSDictionary *)prepareInitialProps
{
  NSMutableDictionary *initProps = [NSMutableDictionary new];

#ifdef RCT_NEW_ARCH_ENABLED
  initProps[kRNConcurrentRoot] = @([self concurrentRootEnabled]);
#endif

  return initProps;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

#if RCT_NEW_ARCH_ENABLED

#pragma mark - RCTCxxBridgeDelegate

- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge
{
  _turboModuleManager = [[RCTTurboModuleManager alloc] initWithBridge:bridge
                                                             delegate:self
                                                            jsInvoker:bridge.jsCallInvoker];
  return RCTAppSetupDefaultJsExecutorFactory(bridge, _turboModuleManager);
}

#pragma mark RCTTurboModuleManagerDelegate

- (Class)getModuleClassFromName:(const char *)name
{
  return RCTCoreModulesClassProvider(name);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const std::string &)name
                                                      jsInvoker:(std::shared_ptr<facebook::react::CallInvoker>)jsInvoker
{
  return nullptr;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const std::string &)name
                                                     initParams:
                                                         (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return nullptr;
}

- (id<RCTTurboModule>)getModuleInstanceFromClass:(Class)moduleClass
{
  return RCTAppSetupDefaultModuleFromClass(moduleClass);
}

#endif

@end
