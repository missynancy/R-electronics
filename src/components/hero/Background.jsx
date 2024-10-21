import React from 'react';
 import './hero.css';
import img1 from '/images/phones-removebg-preview.png';
import img2 from '/images/laptops-removebg-preview.png';
import img3 from '/images/desktops-removebg-preview.png';
import img4 from '/images/monitor-removebg-preview.png';
import img5 from '/images/ups-removebg-preview.png';
import img6 from '/images/CA-removebg-preview.png';
import img7 from '/images/PA-removebg-preview.png';
import img8 from '/images/tv-removebg-preview.png';
import img9 from '/images/printers-removebg-preview.png';



export const Background = ({ heroCount }) => {
if(heroCount === 0){
    return <img src={img1} className='back' />
}
else if(heroCount === 1){
    return <img src={img2} className='back' />
}
else if(heroCount === 2){
    return <img src={img3} className='back' />
}
else if(heroCount === 3){
    return <img src={img4} className='back' />
}
else if(heroCount === 4){
    return <img src={img5} className='back' />
}
else if(heroCount === 5){
    return <img src={img6} className='back' />
}
else if(heroCount === 6){
    return <img src={img7} className='back' />
}
else if(heroCount === 7){
    return <img src={img8} className='back' />
}
else if(heroCount === 8){
    return <img src={img9} className='back' />
}

  return (
    <div className="back" style={{ backImage: `url(${backImage})` }}>
      
    </div>
  );
};
