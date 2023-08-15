import { Box, Typography } from "@mui/material";

export const FooterGallery = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
        width: "100%",
      }}
    >
      <Typography>
        Todos los derechos reservados &copy; 2023 Galería de Fotos
      </Typography>
    </Box>
  );
};
