import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GaleryItem, ItemImg } from './ImageGalleryItem.styled';
import { GlobalContext } from 'store/ContextProvider';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const { setBigImgUrl } = useContext(GlobalContext);

  return (
    <GaleryItem className="gallery-item">
      <ItemImg
        src={webformatURL}
        alt={tags}
        width="200"
        onClick={() => setBigImgUrl(largeImageURL)}
      />
    </GaleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
};
