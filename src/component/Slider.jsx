import React from 'react';


 const Slider=(props)=> { 
        
        return ( <>
         <div className='crbox'>
       <img src={`banner${props.index}.webp`}  alt="This is a carousel slide" />
       </div></> );
    }

 
export default Slider;