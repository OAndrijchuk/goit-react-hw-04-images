import React, { useContext } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import { GlobalContext } from 'store/ContextProvider';

export const ImageGallery = () => {
  const { photos, onShowBigImg } = useContext(GlobalContext);

  return (
    <List className="gallery">
      {photos.map(photo => (
        <ImageGalleryItem
          {...photo}
          key={photo.id}
          onShowBigImg={onShowBigImg}
        />
      ))}
    </List>
  );
};
