import { TailSpin } from 'react-loader-spinner';
import React from 'react';

const Loader = () => {
    return (
    <div style={{
        width:'100%',
        height:'1000px',
        display:'flex',
        justifyContent:'center',
        paddingTop:'20px',
    }}>
        <TailSpin
        height="80"
        width="80"
        radius="9"
        color="gray"
        ariaLabel="loading"
        wrapperStyle
        // wrapperClass
      />
    </div>
    )
};

export default Loader;

