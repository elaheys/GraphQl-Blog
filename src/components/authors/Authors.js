import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';

//query
import { GET_AUTHORS_INFO } from '../../graphQL/Queries';

//MUI
import { Avatar, Grid, Typography,Divider } from '@mui/material';

//components
import Loader from '../shared/Loader';

const Authors = () => {
    const {loading,data,error} = useQuery(GET_AUTHORS_INFO)

    if(loading) return <Loader/>

    if(error) return <h2>Somthing Went Wrong!</h2>

    const { authors } = data;

    return (
       
       
        <Grid container sx={{boxShadow:'rgba(0,0,0,0.1)0px 4px 12px',borderRadius:4}}>
        
            {
                authors.map((author , index) => ( 
                <React.Fragment key={author.id}>
                    <Grid item  xs={12} padding={2}>
                        <Link to={`/authors/${author.slug}`} style={{display:'flex',alignItems:'center',textDecoration:'none'}}>
                            <Avatar src={author.avatar.url} sx={{marginLeft:2}} />
                            <Typography component='p' variant='p' color='text.secondary'>
                                {author.name}
                            </Typography>
                        </Link>
                    </Grid>
                    {index !== authors.length - 1 && (
                    <Grid item  xs={12} >
                        <Divider variant='middle' sx={{margin:'10px'}}/>
                    </Grid>  
                    )}
                    
                </React.Fragment> 
                    ))
            }
           
        </Grid>
        
    );
};

export default Authors;