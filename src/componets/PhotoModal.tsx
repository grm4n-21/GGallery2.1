import React, { useState } from 'react';
import { Modal, Box, Typography, Card, CardMedia, CardContent, TextField, Button } from '@mui/material';
import { iPhoto } from '../interface/iPhoto';

interface PhotoModalProps {
  photo: iPhoto;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (editedPhoto: iPhoto) => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ photo, isOpen, onClose, onEdit }) => {
  const [editedTitle, setEditedTitle] = useState(photo.title);
  const [editedDescription, setEditedDescription] = useState(photo.description);

  const handleSaveChanges = () => {
    const updatedPhoto: iPhoto = {
      ...photo,
      title: editedTitle,
      description: editedDescription,
    };
    onEdit(updatedPhoto); 
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Card>
          <CardMedia component="img" height="400" image={photo.imageUrl} alt={photo.title} />
          <CardContent>
            <Typography variant="h6" component="div">
              {photo.title}
            </Typography>
            <Typography variant="body2">{photo.description}</Typography>
          </CardContent>
          <TextField
            label="Editar título"
            variant="outlined"
            fullWidth
            margin="dense"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <TextField
            label="Editar descripción"
            variant="outlined"
            fullWidth
            margin="dense"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSaveChanges}>
            Guardar cambios
          </Button>
        </Card>
      </Box>
    </Modal>
  );
};

export default PhotoModal;
