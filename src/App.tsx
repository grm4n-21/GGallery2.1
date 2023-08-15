import React, { useEffect, useState } from 'react';
import {  Container } from '@mui/material';
import Header from './componets/Header';
import AddPhotoForm from './componets/AddPhotoForm';
import PhotoGallery from './componets/PhotoGallery';
import { iPhoto } from '../src/interface/iPhoto';
import { FooterGallery } from './componets/FooterGallery';

const App: React.FC = () => {
  const [photos, setPhotos] = useState<iPhoto[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const savedPhotosString = localStorage.getItem('savedPhotos');
    if (savedPhotosString) {
      const savedPhotos: iPhoto[] = JSON.parse(savedPhotosString);
      setPhotos(savedPhotos);
    }
  }, []);

  const handlePhotoAdded = (newPhoto: iPhoto) => {
    const newPhotos = [...photos, newPhoto];
    setPhotos(newPhotos);
    localStorage.setItem('savedPhotos', JSON.stringify(newPhotos));
  };
  return (
    <div>
      <Header openModal={openModal} />
      <Container>
        <PhotoGallery photos={photos} />
      </Container>
      <AddPhotoForm
        onPhotoAdded={handlePhotoAdded}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
      <FooterGallery/>
          </div>
  );
};

export default App;
 //<CssBaseline />