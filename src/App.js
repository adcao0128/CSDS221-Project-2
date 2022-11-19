//Imports
import React from "react";
import "./style.css";
//More imports
import Card from '@mui/material/Card';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography'

export default function App() {
  return (
    <div>
        <Card sx={{
          m: -1.2,
          width: 'auto',
          height: 50,
          color: 'white',
          bgcolor: 'primary.dark',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <MenuIcon />
          <Typography variant='button'>
            FRAMEWORKS
          </Typography>
        </Card>
    </div>
  );
}
