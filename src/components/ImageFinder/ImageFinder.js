import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

import { Loader } from 'components/shared/Loader/Loader';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/shared/Modal/Modal';
import { ModalItem } from 'components/ModalItem/ModalItem';
import { Button } from 'components/shared/Button/Button';
import { ErrorMessage } from 'components/shared/ErrorMessage/ErrorMessage';

import { searchPhotos } from 'components/shared/servises/image-api';

export const ImageFinder = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const data = await searchPhotos(search, page);
        setImages(prevImages => [...prevImages, ...data.hits]);

        if (!data.total) {
          toast.error('No results were found for your search!');
        }
        setShowBtn(page < Math.ceil(data.totalHits / 12));
      } catch (error) {
        setError(error.message);
        toast.error(`Whoops, something went wrong ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [search, page, setLoading, setImages, setError]);

  const searchImages = useCallback(({ search }) => {
    setSearch(search);
    setImages([]);
    setPage(1);
  }, []);

  const loadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  const showImage = useCallback(largeImageURL => {
    setModalItem(largeImageURL);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalItem(null);
    setShowModal(false);
  }, []);

  return (
    <>
      <Searchbar onSubmit={searchImages} />

      <ImageGallery>
        <ImageGalleryItem showImage={showImage} images={images} />
      </ImageGallery>

      {showBtn && <Button loadMore={loadMore} />}

      {loading && <Loader />}
      {error && (
        <ErrorMessage>
          ...Error ... somethig went wrong. Request failed with status code 404
        </ErrorMessage>
      )}

      {showModal && (
        <Modal close={closeModal}>
          <ModalItem {...modalItem} />
        </Modal>
      )}
    </>
  );
};
