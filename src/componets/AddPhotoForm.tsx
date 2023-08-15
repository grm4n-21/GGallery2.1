import React, { useState, useEffect } from "react";
import { TextField, Button, Modal, Box } from "@mui/material";
import { iPhoto } from "../interface/iPhoto";
import { iAddPhotoFormProps } from "../interface/iAddPhotoFormProps";

const AddPhotoForm: React.FC<iAddPhotoFormProps> = ({  onPhotoAdded,  isModalOpen,  closeModal,}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      const savedTitle = localStorage.getItem("savedTitle");
      const savedDescription = localStorage.getItem("savedDescription");
      if (savedTitle && savedDescription) {
        setTitle(savedTitle);
        setDescription(savedDescription);
      }
    }
  }, [isModalOpen]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSave = () => {
    if (title && description && file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        const newPhoto: iPhoto = {
          title,
          description,
          imageUrl,
        };
        onPhotoAdded(newPhoto);
        closeModal();
      };
      reader.readAsDataURL(file);

      localStorage.setItem("savedTitle", title);
      localStorage.setItem("savedDescription", description);
    }
  };

  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <TextField
          label="Titulo"
          variant="outlined"
          fullWidth
          margin="dense"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Descripcion"
          variant="outlined"
          fullWidth
          margin="dense"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" onChange={handleFileChange} />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Guardar
        </Button>
        <Button variant="contained" color="secondary" onClick={closeModal}>
          Cancelar
        </Button>
      </Box>
    </Modal>
  );
};

export default AddPhotoForm;
