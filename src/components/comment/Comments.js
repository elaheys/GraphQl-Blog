import { useQuery } from '@apollo/client';
import React from 'react';

//query
import { GET_POST_COMMENTS } from '../../graphQL/Queries';

//MUI
import { Avatar, Box, Grid, Typography } from '@mui/material';

//components
import Loader from '../shared/Loader';

const Comments = ({slug}) => {

    const {loading,data,error} = useQuery(GET_POST_COMMENTS,{
        variables:{slug}
    });

  
    if(loading) return <Loader/>

    if(error) return <h2>Somthing Went Wrong!</h2>

    return (
        <>
        {
        data?.comments.length ? 
            <Grid container 
            sx={{ boxShadow:'rgba(0,0,0,0.1) 0px 4px 12px',
             borderRadius: 4,
             py:1,
             mt:8
             }}
            >
             <Grid item xs={12} m={2} >
                 <Typography 
                 component='p' 
                 variant='h6' 
                 color='primary' 
                 fontWeight={700} 
                 style={{marginRight:'17px'}}
                 >کامنت ها</Typography>
                 {
                     data?.comments?.map(comment => (
                         <Grid 
                         item 
                         xs={12} 
                         border='1px silver solid'
                         m={2}
                         p={2}
                         key={comment.id}
                         borderRadius={1}
                         >
                             <Box component='div' display='flex' alignItems='center' mb={3} >
                                 <Avatar>{comment.name[0]}</Avatar>
                                 <Typography component='span' variant='p' fontWeight={700} mr={1} mt={1}>
                                     {comment.name}
                                 </Typography>
                             </Box>
                             <Typography component='p' variant='p' style={{paddingRight: 8}} >
                                 {comment.text}
                             </Typography>
                         </Grid>
                     ))
                 }
             </Grid>
            </Grid>
            : <Grid item xs={12} sx={{ boxShadow:'rgba(0,0,0,0.1) 0px 4px 12px',
            borderRadius: 2,
            py:1,
            mt:8
            }} >
                <Box component='div' 
                display='flex' 
                justifyContent='space-around'
                alignItems='center' mb={1}>
                    <Typography 
                    component='p'
                    variant='h6' 
                    style={{paddingRight: 8 , marginTop: 4}}  
                    fontWeight={700}
                    color='primary' 
                    >کامنتی وجود ندارد</Typography>
                </Box>
            </Grid>
        }
       
       </>
    );
};

export default Comments;