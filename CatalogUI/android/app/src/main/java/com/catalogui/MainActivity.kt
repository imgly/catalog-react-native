package com.catalogui
import ly.img.react_native.pesdk.RNPhotoEditorSDKModule
import ly.img.react_native.vesdk.RNVideoEditorSDKModule
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import ly.img.android.pesdk.backend.model.config.OverlayAsset
import ly.img.android.pesdk.backend.model.state.AssetConfig
import ly.img.android.pesdk.backend.model.state.OverlaySettings
import ly.img.android.pesdk.ui.model.state.UiConfigText

class MainActivity : ReactActivity() {

    override fun onStart() {
        RNPhotoEditorSDKModule.editorWillOpenClosure = {
            it.getSettingsModel(UiConfigText::class).textColorList.removeAt(0)
        }

        RNVideoEditorSDKModule.editorWillOpenClosure = {
            it.getSettingsModel(UiConfigText::class).textColorList.removeAt(0)
        }

        RNPhotoEditorSDKModule.editorWillExportClosure = {
            val overlay = it.getSettingsModel(AssetConfig::class)
                .getAssetById(OverlayAsset::class, "imgly_overlay_golden")
            if (overlay != null) {
                it.getSettingsModel(OverlaySettings::class).overlayAsset = overlay
            }
        }

        RNVideoEditorSDKModule.editorWillExportClosure = {
            val overlay = it.getSettingsModel(AssetConfig::class)
                .getAssetById(OverlayAsset::class, "imgly_overlay_golden")
            if (overlay != null) {
                it.getSettingsModel(OverlaySettings::class).overlayAsset = overlay
            }
        }

        super.onStart()
    }

    override fun getMainComponentName(): String = "CatalogUI"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
