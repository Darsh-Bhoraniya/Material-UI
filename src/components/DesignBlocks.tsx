import { Box, Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material';

export const DesignBlocks = () => {
    return (
        <>
            <Box sx={
                {
                    pt: 2
                }
            }>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={3}>
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: '600', fontSize: '30px', fontFamily: 'Roboto', color: '#34476A' }}>Design Blocks</Typography>
                            <Typography variant="body2" sx={{ color: 'rgb(123, 128, 154)' }}>A selection of 45 page sections that fit perfectly in any combination</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={9}>
                        <Grid container spacing={3}>
                            {/* page Headers */}
                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>
                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg" alt="Page Headers" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={{
                                        fontsize: '14px',
                                        fontFamily: 'Roboto',
                                        fontWeight: '700',
                                        color: '#34476A'
                                    }}>Page Headers</Typography>
                                    <Typography sx={{
                                        fontsize: '10px',
                                        fontFamily: 'Roboto',
                                        color: '#7B809A'
                                    }} >10 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* features card*/}
                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>
                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/features.jpg" alt="Features" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography variant="h6" sx={{
                                        fontsize: '14px',
                                        fontFamily: 'Roboto',
                                        fontWeight: '700',
                                        color: '#34476A'
                                    }}>Features</Typography>
                                    <Typography variant="button">14 Examples</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>
                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/pricing.jpg" alt="Pricing" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={{
                                        fontsize: '14px',
                                        fontFamily: 'Roboto',
                                        fontWeight: '700',
                                        color: '#34476A'
                                    }}>Pricing</Typography>
                                    <Typography variant="button">8 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Faq */}
                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>
                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/faq.jpg" alt="FAQ" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={{
                                        fontsize: '14px',
                                        fontFamily: 'Roboto',
                                        fontWeight: '700',
                                        color: '#34476A'
                                    }}>FAQ</Typography>
                                    <Typography variant="button">1 Example</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>

                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/blogs.jpg" alt="Blog Posts" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={{
                                        fontsize: '14px',
                                        fontFamily: 'Roboto',
                                        fontWeight: '700',
                                        color: '#34476A'
                                    }}>Blog Posts</Typography>
                                    <Typography variant="button">11 Examples</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>

                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/testimonials.jpg" alt="Testimonials" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={{
                                        fontsize: '14px',
                                        fontFamily: 'Roboto',
                                        fontWeight: '700',
                                        color: '#34476A'
                                    }}>Testimonials</Typography>
                                    <Typography variant="button">11 Examples</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>

                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/teams.jpg" alt="Teams" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>
                                    <Typography variant="h6">Teams</Typography>
                                    <Typography variant="button">6 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Stats */}
                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>

                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/stats.jpg" alt="Stats" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography >Stats</Typography>
                                    <Typography variant="button">3 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Call to Actions */}
                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>

                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/call-to-action.jpg" alt="Call to Actions" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={{
                                        fontsize: '14px',
                                        fontFamily: 'Roboto',
                                        fontWeight: '700',
                                        color: '#34476A'
                                    }}>Call to Actions</Typography>
                                    <Typography variant="button">8 Examples</Typography>
                                </Box>

                            </Grid>

                            {/* Applications */}
                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>

                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/projects.jpg" alt="Applications" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={{
                                        fontsize: '14px',
                                        fontFamily: 'Roboto',
                                        fontWeight: '700',
                                        color: '#34476A'
                                    }}>Applications</Typography>
                                    <Typography variant="button">6 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Logo Areas */}
                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>

                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/logo-area.jpg" alt="Logo Areas" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>

                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={{
                                        fontsize: '14px',
                                        fontFamily: 'Roboto',
                                        fontWeight: '700',
                                        color: '#34476A'
                                    }}>Logo Areas</Typography>
                                    <Typography variant="button">4 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Footers */}
                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>

                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/footers.jpg" alt="Footers" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>

                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={{
                                        fontsize: '14px',
                                        fontFamily: 'Roboto',
                                        fontWeight: '700',
                                        color: '#34476A'
                                    }}>Footers</Typography>
                                    <Typography variant="button">10 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* General Cards */}
                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>

                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/general-cards.jpg" alt="General Cards" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>

                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={{
                                        fontsize: '14px',
                                        fontFamily: 'Roboto',
                                        fontWeight: '700',
                                        color: '#34476A'
                                    }}>General Cards</Typography>
                                    <Typography variant="button">9 Examples</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Box sx={{ borderRadius: 3, boxShadow: 5 }}>
                                    <Box>
                                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/content-sections.jpg" alt="Content Sections" style={{ width: '100%', borderRadius: '8px' }} />
                                    </Box>

                                </Box>
                                <Typography sx={{
                                    fontsize: '14px',
                                    fontFamily: 'Roboto',
                                    fontWeight: '700',
                                    color: '#34476A'
                                }}>Content Sections</Typography>
                                <Typography variant="button">8 Examples</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}
