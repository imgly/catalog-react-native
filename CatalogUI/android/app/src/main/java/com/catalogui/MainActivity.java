package com.catalogui;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

import ly.img.android.pesdk.backend.model.config.OverlayAsset;
import ly.img.android.pesdk.backend.model.state.AssetConfig;
import ly.img.android.pesdk.backend.model.state.OverlaySettings;
import ly.img.android.pesdk.ui.model.state.UiConfigText;

import ly.img.react_native.pesdk.RNPhotoEditorSDKModule;
import ly.img.react_native.vesdk.RNVideoEditorSDKModule;

public class MainActivity extends ReactActivity {
    @Override
    protected void onStart() {
        // highlight-open-closure-pesdk
        RNPhotoEditorSDKModule.editorWillOpenClosure = ((settingsList) -> {
            // Remove first color item which is the color pipette.
            settingsList.getSettingsModel(UiConfigText.class).getTextColorList().remove(0);
            return null;
        });
        // highlight-open-closure-pesdk
        // highlight-open-closure-vesdk
        RNVideoEditorSDKModule.editorWillOpenClosure = ((settingsList) -> {
            // Remove first color item which is the color pipette.
            settingsList.getSettingsModel(UiConfigText.class).getTextColorList().remove(0);
            return null;
        });
        // highlight-open-closure-vesdk
        // highlight-export-closure-pesdk
        RNPhotoEditorSDKModule.editorWillExportClosure = (stateHandler -> {
            // Add an overlay to the image.
            OverlayAsset overlay = stateHandler.getSettingsModel(AssetConfig.class).getAssetById(OverlayAsset.class, "imgly_overlay_golden");
            stateHandler.getSettingsModel(OverlaySettings.class).setOverlayAsset(overlay);
            return null;
        });
        // highlight-export-closure-pesdk
        // highlight-export-closure-vesdk
        RNVideoEditorSDKModule.editorWillExportClosure = (stateHandler -> {
            // Add an overlay to the video.
            OverlayAsset overlay = stateHandler.getSettingsModel(AssetConfig.class).getAssetById(OverlayAsset.class, "imgly_overlay_golden");
            stateHandler.getSettingsModel(OverlaySettings.class).setOverlayAsset(overlay);
            return null;
        });
        // highlight-export-closure-vesdk
        super.onStart();
    }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "CatalogUI";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the renderer you wish to use - the new renderer (Fabric) or the old renderer
   * (Paper).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

    @Override
    protected boolean isConcurrentRootEnabled() {
      // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
      // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
      return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    }
  }
}
