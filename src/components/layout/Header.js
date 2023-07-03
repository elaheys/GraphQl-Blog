import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <AppBar position='sticky'>
                <Container maxWidth='lg' padding={3}>
                <Toolbar>
                    <Typography component='h1' variant='h5' fontWeight='bold' flex={1}>
                        <Link to='/' style={{textDecoration:'none' , color:'#fff'}}>
                            وبلاگ بوتو استارت
                        </Link>
                    </Typography>
                    <Link to='/' style={{color:'#fff'}}>
                        <BookIcon/>
                    </Link>
                </Toolbar>
               </Container> 
            </AppBar>
        </div>
    );
};

export default Header;