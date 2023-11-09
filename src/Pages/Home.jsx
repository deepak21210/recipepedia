import React, { useState } from 'react';
import './Home.css'
import Starter from '../Components/Starter/Starter'
import Veg from '../Components/Veg/Veg'
import {AiFillInstagram, AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
import {ImCross} from 'react-icons/im';
import {BiMenu, BiUserCircle} from 'react-icons/bi';

const Home = () => {

   const [isMenu,setIsMenu] = useState(false);
   const [isCross,setIsCross] = useState(true)  
   const menuHandler = () =>{
    setIsMenu(true);
    setIsCross(false)
   }
   const crossHandler = () =>{
    setIsCross(true);
    setIsMenu(false);
   }

  return (
  

    <div className="home">
     { isMenu && !isCross &&
      <div className='side animate__animated animate__slideInLeft'>
      <div className='cross'>
          <h2><ImCross onClick={crossHandler}/></h2>
        </div>
      <div className="sidebar">
        
         <div className="profile">
              <img src={"https://www.acouplecooks.com/wp-content/uploads/2021/06/bio.jpg"} alt="" />
              <h1>Sonja & Alex</h1>
         </div>
        
         <div className="sidetext">
             <h3>Meet Sonja and Alex Overhiser: Husband and wife. Expert home cooks. Authors of recipes you’ll want to make again and again.</h3>
         </div>
         
         <div className="sidelinks">
           <div className="icons">
             <AiFillInstagram className='icon' />
             <AiFillFacebook className='icon' />
             <AiFillLinkedin className='icon' />
           </div>

           <div className="sideterms">
             <h3>© 2023 - A Couple Cooks® · Privacy Policy & Disclosure</h3>
           </div>
         </div>
      </div>
      </div>
}
      {/* ------------------------------------------------------ */}
         <div className="left">
          
         <div className="chef">
             <img src={"https://www.acouplecooks.com/wp-content/uploads/2021/06/bio.jpg"} alt="" />
              <h1>Sonja & Alex</h1>
             
              <div className="btns">
                 <button >ABOUT US</button>
                 <button >COOK BOOK</button>
              </div>
         </div>

         <div className="text">
             <h3>Meet Sonja and Alex Overhiser: Husband and wife. Expert home cooks. Authors of recipes you’ll want to make again and again.</h3>
         </div>
         
         <div className="links">
           <div className="icons">
             <AiFillInstagram className='icon' />
             <AiFillFacebook className='icon' />
             <AiFillLinkedin className='icon' />
           </div>

           <div className="terms">
             <h3>© 2023 - A Couple Cooks® · Privacy Policy & Disclosure</h3>
           </div>
         </div>
     </div>
    

       
 
         <div className="right">
          
            <div className="heading">
                 <h1><BiMenu className='icon-btn' onClick={menuHandler}/></h1>
                 <h1>Recipe Pedia</h1>
                 <h1><BiUserCircle className='icon-btn'/></h1>
            </div>


            <div className="pages">
              <Starter />
               {/* { isHome && !isVeg && <Starter/> } */}
               
            </div>
         </div>
        
    </div>

   
    
  )
}

export default Home