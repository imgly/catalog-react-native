import React from 'react';
import { PhotoEditorModal } from 'react-native-photoeditorsdk';

export const ShowPhotoEditorModalExample = ({ visible, onFinish }: { visible: boolean; onFinish: () => void }) => {
  return (
    // Create the photo editor modal and handle the export as well as any occuring errors.
    // highlight-create-editor
    <PhotoEditorModal
      // Add a photo from the assets directory.
      image={require('../../../../assets/pesdk/LA.jpg')}
      // Determine whether the editor should be visible or not.
      // highlight-visbility
      visible={visible}
      configuration={{
        sticker: {
          // A custom sticker category.
          categories: [
            {
              identifier: 'custom121',
              name: 'Custom1',
              thumbnailURI:
                'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
              items: [
                // A custom sticker.
                {
                  identifier: 'custom_sticker_igor1',
                  name: 'Igor1',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                // An existing sticker.
              ],
            },
            {
              identifier: 'custom2',
              name: 'Custom2',
              thumbnailURI:
                'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
              items: [
                // A custom sticker.
                {
                  identifier: 'custom_sticker_igor2',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor21',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor22',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor23',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor24',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor25',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor26',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor27',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor28',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor210',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor211',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor212',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor213',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor214',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor215',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor216',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor217',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor218',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor219',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor220',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor221',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor222',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor223',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor224',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor225',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor226',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor227',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor228',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor229',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor230',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor231',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor232',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor233',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor234',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor235',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor236',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor237',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor238',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor239',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor240',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor241',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor242',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor243',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor244',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor245',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor246',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor247',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor248',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor249',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor50',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor51',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor52',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor53',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor254',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor255',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor256',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor257',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor258',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor259',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor260',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor261',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor262',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor263',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor264',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor265',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor266',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor267',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor268',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor269',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor270',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor271',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor272',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor273',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor274',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor275',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor2',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor21',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor22',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor23',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor24',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor25',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor26',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor27',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor28',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor210',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor211',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor212',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor213',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor214',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor215',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor216',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor217',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor218',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor219',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor220',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor221',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor222',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor223',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor224',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor225',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor226',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor227',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor228',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor229',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor230',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor231',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor232',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor233',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor234',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor235',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor236',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor237',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor238',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor239',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor240',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor241',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor242',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor243',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor244',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor245',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor246',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor247',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor248',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor249',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor50',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor51',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor52',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor53',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor254',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor255',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor256',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor257',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor258',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor259',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor260',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor261',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor262',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor263',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor264',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor265',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor266',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor267',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor268',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor269',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor270',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor271',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor272',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor273',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor274',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },

                {
                  identifier: 'custom_sticker_igor275',
                  name: 'Igor2',
                  stickerURI:
                    'https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png?20080809173013',
                },
                {
                  identifier: 'custom_sticker_igor2',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor21',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor22',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor23',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor24',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor25',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor26',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor27',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor28',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor210',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor211',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },

                {
                  identifier: 'custom_sticker_igor212',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor213',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor214',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor215',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },

                {
                  identifier: 'custom_sticker_igor216',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor217',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor218',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor219',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor220',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor221',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor222',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor223',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor224',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor225',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor226',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor227',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor228',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor229',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor230',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor231',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor232',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor233',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor234',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor235',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor236',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor237',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor238',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor239',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor240',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },

                {
                  identifier: 'custom_sticker_igor241',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },

                {
                  identifier: 'custom_sticker_igor242',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor243',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor244',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor245',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },

                {
                  identifier: 'custom_sticker_igor246',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor247',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor248',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor249',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },

                {
                  identifier: 'custom_sticker_igor50',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor51',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor52',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor53',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor254',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor255',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor256',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor257',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor258',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor259',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor260',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor261',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor262',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor263',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor264',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor265',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor266',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor267',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor268',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor269',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor270',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor271',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor272',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor273',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },
                {
                  identifier: 'custom_sticker_igor274',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },

                {
                  identifier: 'custom_sticker_igor275',
                  name: 'Igor2',
                  stickerURI: 'https://www.seekpng.com/png/full/563-5630765_123-1000x1000.png',
                },

                // An existing sticker.
              ],
            },
            // highlight-cuscatom-category
            // An existing sticker category.
          ],
        },
      }}
      // highlight-visbility
      // highlight-events
      onExport={(result) => {
        // The user exported a new photo successfully and the newly generated photo is located at `result.image`.
        console.log(result.image);
        onFinish();
      }}
      onCancel={() => {
        // The user tapped on the cancel button within the editor.
        onFinish();
      }}
      onError={(error) => {
        // There was an error generating the photo.
        console.log(error);
        onFinish();
      }}
      // highlight-events
    ></PhotoEditorModal>
    // highlight-create-editor
  );
};
