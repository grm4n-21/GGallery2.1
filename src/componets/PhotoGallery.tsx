import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { iPhoto } from '../interface/iPhoto';

interface PhotoGalleryProps {
  photos: iPhoto[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  const handlePhotoMouseEnter = (index: number) => {
    setHoveredPhoto(index);
  };

  const handlePhotoMouseLeave = () => {
    setHoveredPhoto(null);
  };

  return (
    <Grid container spacing={3} sx={{ marginTop: '80px', marginBottom: '80px' }}>
      {photos.map((photo, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={6}
          md={4}
          onMouseEnter={() => handlePhotoMouseEnter(index)}
          onMouseLeave={handlePhotoMouseLeave}
          sx={{
            zIndex: hoveredPhoto === index ? 1 : 'auto', 
            position: 'relative',
          }}
        >
          <Card
            sx={{
              cursor: 'pointer',
              transform: hoveredPhoto === index ? 'scale(1.05)' : 'scale(1)',
              transition: 'ease-in-out',
              width: '100%',
             transitionDuration:'250ms',
              
            }}
          >
            <CardMedia component="img" height="140" image={photo.imageUrl} alt={photo.title} />
            <CardContent
              sx={{
                backgroundColor: hoveredPhoto === index ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)',
                transition: 'ease-in-out',
                transitionDuration:'250ms',
              }}
            >
              <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                {photo.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                {photo.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PhotoGallery;
