import React from "react";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface HeaderProps {
  openModal: () => void
}

const Header: React.FC<HeaderProps> = ({openModal}) => {
 
  return (
    <Grid container spacing={3} sx={{ marginTop: '80px' }}>
    <AppBar position="absolute" color="primary" sx={ {margin: 'auto'}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Galeria de fotos</Typography>
        <IconButton
          aria-label="Agregar foto"
          onClick={openModal}
          size="large"
          sx={{
            color: "white",
            width:'auto',
           }}
        >
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    </Grid>
  );
};

export default Header;
