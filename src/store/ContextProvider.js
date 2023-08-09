import { createContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { feachPictures } from 'service/Api';

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [textSQ, setTextSQ] = useState('');
  const [bigImgUrl, setBigImgUrl] = useState('');
  const [page, setPage] = useState(1);
  const [per_page] = useState(12);
  const [photos, setPhotos] = useState([]);
  const [showloadMore, setShowloadMore] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
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
        const data = await feachPictures({
          page,
          per_page,
          q: searchQuery,
        });

        if (!data.totalHits) {
          toast.warn(
            'Sorry, but nothing was found for your request. Change the request and try again.'
          );
          return;
        }
        setPhotos(prevPhotos =>
          page === 1 ? data.hits : [...prevPhotos, ...data.hits]
        );
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
  }, [searchQuery, page, per_page]);

  const onSubmitt = e => {
    e.preventDefault();
    const { value } = e.target.elements.textSQ;
    if (!value) {
      toast.warn('Please enter a request!');
      return;
    }
    if (searchQuery !== value) {
      setPhotos([]);
      setSearchQuery(value);
      setPage(1);
    }
  };

  const contextValue = {
    searchQuery,
    bigImgUrl,
    photos,
    showloadMore,
    showLoader,
    textSQ,
    setTextSQ,
    onSubmitt,
    setBigImgUrl,
    setPage,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
