import React from 'react';
import {Link} from 'react-router-dom';

//MUI
import { 
    Avatar, 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    CardMedia, 
    Divider, 
    Typography } from '@mui/material';

const CardEL = ({title,slug,coverPhoto,author}) => {

    return (
        <Card sx={{boxShadow:'rgba(0,0,0,0.1)0px 4px 12px',borderRadius:4}}>
            {
                author && <CardHeader avatar={<Avatar src={author.avatar.url} sx={{marginLeft:2}}/>}
                    title={<Typography component='p' variant='p' color='text.secondary'>
                    {author.name}
                    </Typography>}
                            />
            }
           
            <CardMedia component='img' height='194' image={coverPhoto.url} alt={slug}/>
            <CardContent>
                <Typography component='h4' variant='p' color='text.primary' >{title}</Typography>
            </CardContent>
            <Divider variant='middle' sx={{margin:'10px'}}/>
            <CardActions>
                <Link to={`/blogs/${slug}`} style={{width:'100%' , textDecoration:'none'}}>
                        <Button variant='outlined' size='small' sx={{width:'100%' , borderRadius: 3}}>
                            مطالعه مقاله
                        </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default CardEL;