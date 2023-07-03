import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';

//MUI
import { Container, Grid, Typography  } from '@mui/material';

//Icon
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

//query
import { GET_BLOGS_INFO } from '../../graphQL/Queries';

//components
import CardEL from '../shared/CardEL';
import Loader from '../shared/Loader';


const JustBlogs = () => {
    
        const navigate = useNavigate()

        const {loading,data,errors} = useQuery(GET_BLOGS_INFO)
    
        if(loading) return <Loader/>
    
        if(errors) return <h2>Somthing Went Wrong!</h2>
    
        return (
            
        <Container maxWidth='lg'>
            <Grid item xs={12} mt={4} display='flex' justifyContent='space-between' >
                <Typography 
                component='h3' 
                variant='h5'  
                mb={6}
                fontWeight={700}
                style={{paddingRight:25}}>همه مقالات :</Typography>
               <ArrowBackRoundedIcon onClick={() => navigate(-1)} style={{cursor:'pointer'}}/>  
            </Grid>
            <Grid container spacing={8}  columns={10}>
                {data.posts.map(post => (
                    <Grid item xs={12} sm={4} md={5} key={post.id}>
                        <CardEL {...post} />
                    </Grid>
               ))}
            </Grid>
            
        </Container>

        );
    
};

export default JustBlogs;