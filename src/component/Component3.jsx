import React,{useState} from 'react';
import { CarouselData } from "./CarouselData";

      
     const Component3=()=> { 
      const [marke,setmarke] = useState(0)
      const [val,setVal]=useState(0)
      const nextSlide = () => {
      let newSlide =
        marke === CarouselData.length - 1
          ? 0
          : marke + 1;
      setmarke(newSlide);
    };
  
   const prevSlide = () => {
      let newSlide =
        marke === 0
          ? CarouselData.length - 1
          : marke - 1;
      setmarke(newSlide);
      
    };
 // componentDidMount() {



        return ( 
        <div className="rowbox" style={{padding:" 10px 0px",backgroundColor:"#eaeaea"}}>
        <div className="rowbox crousal">
            <div className='absolute'><button onClick={prevSlide}><i className="fa fa-angle-left" aria-hidden="true"></i></button><button onClick={nextSlide}><i className="fa fa-angle-right" aria-hidden="true"></i></button></div>
      {/* <Slider index={marke} /> */}
      <div className={`crbox boxActive${marke}`} style={{display:"flex",width:"300%"}}>

      {
        CarouselData.map((slide,index)=>{
          return <img className="image" src={`banner${index}.webp`} style={{width:"100%"}}  alt="This is a carousel slide" />;
        })
      }
     
       
       </div>
        </div>
    </div> );
    }





 
export default Component3;