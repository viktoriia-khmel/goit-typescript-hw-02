import { useEffect, useState } from 'react';

import '../../App.css';

import { fetchImages } from '../../services/restapi';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import { useToggle } from '../../hooks/useToggle';
import ImageModal from '../ImageModal/ImageModal';
import { Image } from './App.types';


const App = () => {

  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const { isOpen, openModal, closeModal } = useToggle();


  useEffect(() => {
if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(page, query);
      
      setImages((prev) => [...prev, ...data.results]);
      } catch {
      setIsError(true);
      }
      finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);
  
  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  }
  
  const handleSetQuery = (topic: string) => {
    setQuery(topic);
    setImages([]);
    setPage(1);
  }

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
    openModal();
  };

  return (
    <div>
      <SearchBar setQuery={handleSetQuery } />
      {images.length > 0 && <ImageGallery images={images} handleImageClick={handleImageClick}/>}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn handleChangePage={handleChangePage} />}
      {selectedImage &&
        (<ImageModal
          isOpen={isOpen}
          onRequestClose={closeModal}
          image={selectedImage}
        />)}
    </div>
  )
}

export default App
