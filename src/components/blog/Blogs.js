import React from 'react';
import { useQuery } from '@apollo/client';

//MUI
import { Grid } from '@mui/material';

//query
import { GET_BLOGS_INFO } from '../../graphQL/Queries';

//components
import CardEL from '../shared/CardEL';
import Loader from '../shared/Loader';

const Blogs = () => {


    const {loading,data,errors} = useQuery(GET_BLOGS_INFO)

    if(loading) return <Loader/>

    if(errors) return <h2>Somthing Went Wrong!</h2>

    return (
        
        <Grid container spacing={2}>
           {data?.posts?.map(post => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL {...post} />
            </Grid>
           ))}
        </Grid>
    );
};

export default Blogs;