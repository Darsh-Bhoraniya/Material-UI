import { Badge, Box, Container, Divider, Grid, Grid2, IconButton, Typography } from "@mui/material"; // Updated to Grid

import Header from "./Header";
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import { CopyAll } from "@mui/icons-material";
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
// Code: Main component
export default function Main() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url(https://demos.creative-tim.com/otis-kit-pro/static/media/bg-presentation.889630297390d27e8dfb.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '90vh',
          paddingTop: '-10px',
        }}
      >
        <Header />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            padding: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontFamily: 'Khula, sans-serif',
              fontWeight: 'bold',
              fontSize: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 4,
            }}
            gutterBottom
          >
            Otis Kit
            <Badge
              badgeContent="pro"
              color="primary"
              sx={{
                '& .MuiBadge-dot': {
                  backgroundColor: 'white',
                },
                backgroundColor: 'white',
              }}
            />
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: 'white', fontSize: '30px' }}>
            <Typography>
              Start the Development with a ReactJS & MUI Design System inspired by
            </Typography>
            <Typography>
              Material Design.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Second Main Component Start from here */}
      <Box
        sx={{
          backgroundColor: '#f4f5f7',
          zIndex: 2,
          width: '95%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), -4px 0px 8px rgba(0, 0, 0, 0.3)',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '10px',
          // paddingTop: '-16px',
        }}
      >
        <Container>
          <Grid container spacing={2} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <Grid item xs={12} sm={3}>
              <Box sx={{
                textAlign: 'center',
                display: 'flex',
                alignItems: "center",
                justifyContent: 'center',
                flexDirection: "column",
                fontFamily: 'Roboto',
              }}>
                <Typography sx={{ color: '#2a84eb', fontSize: '30px', fontWeight: 'bold' }}>300+</Typography>
                <Typography sx={{ color: '#435572', fontSize: '15px', fontWeight: '800' }}>Coded Elements</Typography>
                <Typography sx={{ fontFamily: 'Roboto', color: '#c1c5cf' }}>
                  From buttons, to inputs, navbars, alerts or cards, you are covered
                </Typography>
              </Box>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />

            <Grid item xs={12} sm={3}>
              <Box sx={{
                textAlign: 'center',
                display: 'flex',
                alignItems: "center",
                justifyContent: 'center',
                flexDirection: "column",
                fontFamily: 'Roboto',
              }}>
                <Typography sx={{ color: '#2a84eb', fontSize: '30px', fontWeight: 'bold' }}>100+</Typography>
                <Typography sx={{ color: '#435572', fontSize: '15px', fontWeight: '800' }}>Design Blocks</Typography>
                <Typography sx={{ fontFamily: 'Roboto', color: '#c1c5cf' }}>
                  Mix the sections, change the colors and unleash your creativity
                </Typography>
              </Box>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />

            <Grid item xs={12} sm={3}>
              <Box sx={{
                textAlign: 'center',
                display: 'flex',
                alignItems: "center",
                justifyContent: 'center',
                flexDirection: "column",
              }}>
                <Typography sx={{ color: '#2a84eb', fontSize: '30px', fontWeight: 'bold' }}>41</Typography>
                <Typography sx={{ color: '#435572', fontSize: '15px', fontWeight: '800' }}>Pages</Typography>
                <Typography sx={{ fontFamily: 'Roboto', color: '#c1c5cf' }}>
                  Save 3-4 weeks of work when you use our pre-made pages for your website
                </Typography>
              </Box>
            </Grid>
          </Grid>



          {/* Third Components Start */}
              {/* Left Section */}

          <Box sx={{ marginTop: '32px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    backgroundImage: 'url(https://demos.creative-tim.com/otis-kit-pro/static/media/rotating-card-bg-front.bdcdfadc0dacb9bc5f23.jpeg)',
                    backgroundColor: 'rgba(98,175,241, 0.5)', // Apply a semi-transparent black color as overlay
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '10px',
                    padding: '16px',
                  }}
                >
                  <PanToolAltOutlinedIcon sx={{ color: 'white', fontSize: '50px' }} />
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '30px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginBottom: '8px',
                    }}
                  >
                    Feel The <span>Material Kit</span>
                  </Typography>
                  <Typography sx={{ textAlign: 'center', color: 'white' }}>
                    All The MUI components that you need in a development have been re-designed with the new look.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Grid item xs={12} sm={4}></Grid>
                <Grid item xs={12} sm={4}></Grid>
              </Grid>
            </Grid>
          </Box>

        </Container>
      </Box>
    </>
  );
}
