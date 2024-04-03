package com.catalogui

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import ly.img.android.pesdk.backend.model.config.OverlayAsset
import ly.img.android.pesdk.backend.model.state.AssetConfig
import ly.img.android.pesdk.backend.model.state.OverlaySettings
import ly.img.android.pesdk.ui.model.state.UiConfigText
import ly.img.react_native.pesdk.RNPhotoEditorSDKModule
import ly.img.react_native.vesdk.RNVideoEditorSDKModule

class MainActivity : ReactActivity() {

    override fun onStart() {
        // highlight-open-closure-pesdk
        RNPhotoEditorSDKModule.editorWillOpenClosure = {
            // Remove first color item which is the color pipette.
            it.getSettingsModel(UiConfigText::class).textColorList.removeAt(0)
        }
        // highlight-open-closure-pesdk
        // highlight-open-closure-vesdk
        RNVideoEditorSDKModule.editorWillOpenClosure = {
            // Remove first color item which is the color pipette.
            it.getSettingsModel(UiConfigText::class).textColorList.removeAt(0)
        }
        // highlight-open-closure-vesdk
        // highlight-export-closure-pesdk
        RNPhotoEditorSDKModule.editorWillExportClosure = {
            // Add an overlay to the image.
            val overlay = it.getSettingsModel(AssetConfig::class).getAssetById(OverlayAsset::class, "imgly_overlay_golden");
            if (overlay != null) {
                it.getSettingsModel(OverlaySettings::class).overlayAsset = overlay
            }
        }
        // highlight-export-closure-pesdk
        // highlight-export-closure-vesdk
        RNVideoEditorSDKModule.editorWillExportClosure = {
            // Add an overlay to the image.
            val overlay = it.getSettingsModel(AssetConfig::class).getAssetById(OverlayAsset::class, "imgly_overlay_golden");
            if (overlay != null) {
                it.getSettingsModel(OverlaySettings::class).overlayAsset = overlay
            }
        }
        // highlight-export-closure-vesdk
        super.onStart()
    }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "CatalogUI"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
