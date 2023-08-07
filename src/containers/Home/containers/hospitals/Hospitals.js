import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import './hospitals.css';

const hospitals = [
  {
    title: 'Sahloul Hospital',
    description: [
      'Located in Sousse, Tunisia.',
      'Maintains a well-organized blood donation center',
      'Encourages voluntary blood donation',
      'Collaborates with local blood banks',
    ],
    buttonText: 'Donate Blood',
    buttonVariant: 'contained',
  },
  {
    title: 'Farhat Hached Hospital',
    description: [
      'Located in Sousse, Tunisia.',
      'Maintains a well-organized blood donation center',
      'Encourages voluntary blood donation',
      'Collaborates with local blood banks',
    ],
    buttonText: 'Donate Blood',
    buttonVariant: 'contained',
  },
  {
    title: 'Monastir Hospital',
    description: [
      'Located in Monastir, Tunisia.',
      'Maintains a well-organized blood donation center',
      'Encourages voluntary blood donation',
      'Collaborates with local blood banks',
    ],
    buttonText: 'Donate Blood',
    buttonVariant: 'contained',
  },
];

const Hospitals = () => {
  return (
    <div className='hopital'>
      <h1 className='gradient__text' >Hospitals:Locals for Blood Donation</h1>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end" sx={{ display: 'flex', justifyContent: 'center' }}>
          {hospitals.map((hospital) => (
            <Grid
              item
              key={hospital.title}
              xs={12}
              sm={hospital.title === 'Monastir Hospital' ? 12 : 6}
              md={4}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Card
                  sx={{
                    height: '100%', 
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <CardHeader
                    title={hospital.title}
                    titleTypographyProps={{ align: 'center' }}
                    sx={{
                      background: 'radial-gradient(circle at 49% 44%, rgba(227, 190, 190, 1) 0%, rgba(213, 50, 50, 1) 100%)',
                      color: 'white',
                    }}
                  />
                  <CardContent sx={{ paddingRight: 3 }}>
                    <ul>
                      {hospital.description.map((line, index) => (
                        <Typography
                          key={index}
                          component="li"
                          variant="subtitle1"
                          align="center"
                          sx={{
                            mt: index > 0 ? 2 : 0,
                            fontFamily: "var(--font-family)",
                            color: "var(--color-subtext)",
                            cursor: "pointer",
                            marginRight: "1rem",
                          }}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <NavLink to='/donation'>
                      <Button
                        fullWidth
                        variant={hospital.buttonVariant}
                        sx={{
                          backgroundColor: '#980000',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: '#980000', 
                          },
                        }}
                      >
                        {hospital.buttonText}
                      </Button>
                    </NavLink>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Hospitals;
