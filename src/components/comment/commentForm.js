import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';

//MUI
import { Button, Grid, TextField, Typography } from '@mui/material';

//components
import { validate } from '../shared/Validate';

//rtl in mui
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';

//mutation
import { SEND_COMMENT } from '../../graphQL/Mutations';

//toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CommentForm = ({slug}) => {

    const theme = createTheme({
        direction: 'rtl', 
      });

      const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
      });

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [text,setText] = useState('');
    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});
    const [pressed,setPressed] = useState(false);

    const [sendComment , {loading,data}] = useMutation(SEND_COMMENT,{
            variables:{name,email,text,slug}
    });

    useEffect(() => {
        setErrors(validate(name,email))
    },[name,email,touched]);

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }

    const sendHandler = () => {
        if(name && email && text){
            sendComment();
            setPressed(true)
            setErrors(validate(name,email));
        }else {
            setErrors(validate(name,email));
            setTouched({name:true , email:true})
            toast.warn('لطفا همه فیلدهارو پر کن',{
                position:'top-center'
            })
        }
    }

    if(data && pressed){
        toast.success('کامنت ارسال شد و منتظر تایید میباشد',{
            position:'top-center'
        });
        setPressed(false);
        setTouched({name:false , email:false});
        setEmail('');
        setName('');
        setText('');
    }

    return (
     <Grid container sx={{
        boxShadow:'rgba(0,0,0,0.1) 0px 4px 12px',
         borderRadius: 2,
         mt:5 , py:1 
         }}>
        <Grid item xs={12} m={2}>
            <Typography component='p' variant='h5' fontWeight={700} color='primary'>
                فرم ارسال کامنت
            </Typography>
        </Grid>

    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Grid item xs={12} m={2}> 
            <TextField
            label='نام کاربری'
            variant='outlined'
            sx={{width:'100%'}}
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}
            onFocus={focusHandler}
            />
            {errors.name && touched.name && <Grid item color='red' style={{paddingTop: 4,paddingRight:4}}>{errors.name}</Grid>}
        </Grid>
        <Grid item xs={12} m={2}>
            <TextField
            label='ایمیل'
            variant='outlined'
            sx={{width:'100%'}}
            value={email}
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            onFocus={focusHandler}
            />
            {errors.email && touched.email && <Grid item color='red' style={{paddingTop: 4,paddingRight:4}}>{errors.email}</Grid>}
        </Grid>
        <Grid item xs={12} m={2}>
            <TextField
            label='متن کامنت'
            variant='outlined'
            sx={{width:'100%'}}
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
            minRows={4}
            />
        </Grid> 
      </ThemeProvider>
    </CacheProvider>
   
        <Grid item xs={12} m={2}>
            {
                loading ? <Button variant='contained' disabled>در حال ارسال ...</Button> : 
                <Button variant='contained' onClick={sendHandler}>ارسال</Button>
            }
        </Grid>
        <ToastContainer/>
     </Grid>
    );
};

export default CommentForm;