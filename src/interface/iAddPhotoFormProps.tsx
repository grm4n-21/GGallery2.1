import { iPhoto } from "./iPhoto";

 export interface iAddPhotoFormProps {
    onPhotoAdded: (photo: iPhoto) => void;
    isModalOpen: boolean;  
    closeModal: () => void; 
  }