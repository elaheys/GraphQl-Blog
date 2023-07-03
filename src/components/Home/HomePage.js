import React from 'react';
import { Link } from 'react-router-dom';

//mui
import { Container, Grid, Typography } from '@mui/material';

//components
import Authors from '../authors/Authors';
import Blogs from '../blog/Blogs';

const HomePage = () => {
    return (
        <div>
            <Container maxWidth='lg'>
                <Grid container spacing={2} padding={3}>
                     <Grid item xs={12} md={3} mt={4}>
                        <Typography component='h3' variant='h5' mb={3} fontWeight={700}>
                            نویسنده ها</Typography>
                        <Authors/>
                     </Grid>
                     <Grid item xs={12} md={9} mt={4}>
                        <Typography component='h3' variant='h5' mb={3} fontWeight={700}>
                            <Link to='/blogs' style={{textDecoration:'none' , color:'black',}}>مقالات</Link></Typography>
                        <Blogs/>
                     </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default HomePage;