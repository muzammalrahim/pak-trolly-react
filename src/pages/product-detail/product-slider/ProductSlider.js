import React , {useState} from 'react';
import './product-slider.css';
import images from "./images";


const Productslider = () => {
    const [selectedImage , setSelectedImage] = useState(images[1])
    return (
        <>
        <div className="product-slider">
            <img className="sleder-main-img" src={selectedImage} alt="slider" />
            {
                images.map((image,i)=>{
                    return  <img className="small-img" onClick={()=>{return setSelectedImage(image)}} alt="" key={i} src={image}  />
                })
            }
        </div>
        </>
    );
}

export default Productslider;
