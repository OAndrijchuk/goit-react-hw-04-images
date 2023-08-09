import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { ModalImg } from './App.styled';
import { Loader } from './Loader/Loader';
import { useContext } from 'react';
import { GlobalContext } from 'store/ContextProvider';

export const App = () => {
  const { showLoader, showloadMore, bigImgUrl, searchQuery } =
    useContext(GlobalContext);
  return (
    <>
      <Searchbar />
      <ImageGallery />
      {showLoader && <Loader />}
      {showloadMore && <Button />}
      {bigImgUrl && (
        <Modal>
          <ModalImg src={bigImgUrl} alt={searchQuery} />
        </Modal>
      )}
    </>
  );
};
