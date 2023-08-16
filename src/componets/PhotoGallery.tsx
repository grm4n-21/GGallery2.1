import React, { useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import PhotoModal from "./PhotoModal";
import { iPhoto } from "../interface/iPhoto";

interface PhotoGalleryProps {
  photos: iPhoto[];
  updatePhotos: (updatedPhotos: iPhoto[]) => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  updatePhotos,
}) => {
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<iPhoto | null>(null);

  const handlePhotoMouseEnter = (index: number) => {
    setHoveredPhoto(index);
  };

  const handlePhotoMouseLeave = () => {
    setHoveredPhoto(null);
  };

  const handleEditClick = (photo: iPhoto) => {
    setSelectedPhoto(photo);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  const handleEditPhoto = (editedPhoto: iPhoto) => {
    const updatedPhotos = photos.map((photo) =>
      photo.imageUrl === editedPhoto.imageUrl ? editedPhoto : photo
    );
    updatePhotos(updatedPhotos);
    handleCloseEditModal();
  };

  return (
    <div>
      <Grid
        container
        spacing={3}
        sx={{ marginTop: "80px", marginBottom: "80px" }}
      >
        {photos.map((photo, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            onMouseEnter={() => handlePhotoMouseEnter(index)}
            onMouseLeave={handlePhotoMouseLeave}
            onClick={() => handleEditClick(photo)}
            sx={{
              zIndex: hoveredPhoto === index ? 1 : "auto",
              position: "relative",
            }}
          >
            <Card
              sx={{
                cursor: "pointer",
                transform: hoveredPhoto === index ? "scale(1.05)" : "scale(1)",
                transition: "ease-in-out",
                width: "100%",
                transitionDuration: "250ms",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={photo.imageUrl}
                alt={photo.title}
              />
              <CardContent
                sx={{
                  backgroundColor:
                    hoveredPhoto === index
                      ? "rgba(0, 0, 0, 0.7)"
                      : "rgba(0, 0, 0, 0.5)",
                  transition: "ease-in-out",
                  transitionDuration: "250ms",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ color: "white" }}
                >
                  {photo.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  {photo.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <PhotoModal
        photo={selectedPhoto || { title: "", description: "", imageUrl: "" }}
        isOpen={editModalOpen}
        onClose={handleCloseEditModal}
        onEdit={handleEditPhoto} 
      />
    </div>
  );
};

export default PhotoGallery;
