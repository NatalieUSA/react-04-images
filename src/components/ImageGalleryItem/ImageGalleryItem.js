import { memo } from 'react';

import propTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './iImageGalleryItem.styled';

const ImageGalleryItem = ({ images, showImage }) => {
  const elements = images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <GalleryItem key={id}>
      <GalleryImage
        src={webformatURL}
        alt={tags}
        onClick={() => showImage({ largeImageURL })}
      />
    </GalleryItem>
  ));
  // console.log('render image gallery item');
  return elements;
};

export default memo(ImageGalleryItem);

ImageGalleryItem.defaultProps = {
  images: [],
};

ImageGalleryItem.propTypes = {
  showImage: propTypes.func.isRequired,
};
