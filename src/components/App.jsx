import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { feachPictures } from 'service/Api';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { ModalImg } from './App.styled';
import { Loader } from './Loader/Loader';
import { toast } from 'react-toastify';

import React, { useEffect, useRef, useState } from 'react';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [bigImgUrl, setBigImgUrl] = useState('');
  const [page, setPage] = useState(1);
  const [per_page] = useState(12);
  const [photos, setPhotos] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [showloadMore, setShowloadMore] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const maxPages = Math.ceil(totalHits / per_page);
  const firstLoadOf = useRef(true);

  useEffect(() => {
    if (firstLoadOf.current) {
      firstLoadOf.current = false;
      return;
    }
    const newFeach = async () => {
      try {
        setShowloadMore(false);
        setShowLoader(true);
        const data = await feachPictures({ page, per_page, q: searchQuery });

        if (!data.totalHits) {
          toast.warn(
            'Sorry, but nothing was found for your request. Change the request and try again.'
          );
          return;
        }
        setPhotos(page === 1 ? data.hits : [...photos, ...data.hits]);
        setTotalHits(data.totalHits);
        setShowloadMore(
          page === Math.ceil(data.totalHits / per_page) ? false : true
        );
      } catch (error) {
        toast.error('Oops!!! An error occurred. Please try again.');
      } finally {
        setShowLoader(false);
      }
    };
    newFeach();
  }, [searchQuery, page]);

  const handleSearchForm = query => {
    if (!query) {
      toast.warn('Please enter a request!');
      return;
    }
    if (searchQuery !== query) {
      setPhotos([]);
      setSearchQuery(query);
      setPage(1);
    }
  };
  const handleLoadMore = () => {
    setPage(page < maxPages ? page + 1 : page);
  };
  const handleShowBigImg = url => {
    setBigImgUrl(url);
  };
  const closeModal = () => {
    setBigImgUrl('');
  };

  return (
    <>
      <Searchbar onSubmit={handleSearchForm} />
      <ImageGallery photos={photos} onShowBigImg={handleShowBigImg} />
      {showLoader && <Loader />}
      {showloadMore && <Button onLoadMore={handleLoadMore} />}
      {bigImgUrl && (
        <Modal closeImgModal={closeModal}>
          <ModalImg src={bigImgUrl} alt={searchQuery} />
        </Modal>
      )}
    </>
  );
};
