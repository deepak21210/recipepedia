import 'animate.css';
import './Starter.css'; 


const Starter = () => {

  return (
    <>
    <div className="elements ">
       <div className="text">
          <h3>What’s for dinner? Need lunch or breakfast, a cocktail, or a quick snack? We’re here to solve that problem! Here you’ll find easy, delicious & healthy recipes, rigorously tested so they work every time. These vegetarian, seafood, gluten-free, and plant based recipes taste so good, they’ll please everyone around the table.</h3>
       </div>

       <div className="navis ">
           <div className="recipe">
             <img src={'https://www.acouplecooks.com/wp-content/uploads/2021/03/Vegetarian-Enchiladas-002s-368x368.jpg'}  alt="" />
             <h4>Vegiterian Recipe</h4>
           </div>

           <div className="recipe">
             <img src={'https://www.acouplecooks.com/wp-content/uploads/2020/12/How-to-Make-Eggs-Sunny-Side-Up-051s-368x368.jpg'} alt="" />
             <h4>Breakfast Recipe</h4>
           </div>

           <div className="recipe">
             <img src={'https://www.acouplecooks.com/wp-content/uploads/2021/02/Energy-Balls-005-368x368.jpg'} alt="" />
             <h4>Snack Recipe</h4>
           </div>

           <div className="recipe">
             <img src={'https://www.acouplecooks.com/wp-content/uploads/2021/01/Vegan-Curry-010-368x368.jpg'} alt="" />
             <h4>Easy Recipe</h4>
           </div>

           
           <div className="recipe">
             <img src={'https://www.acouplecooks.com/wp-content/uploads/2019/06/Whiskey-Sour-111-368x368.jpg'} alt="" />
             <h4>Cocktail Recipe</h4>
           </div>

           <div className="recipe">
             <img src={'https://www.acouplecooks.com/wp-content/uploads/2021/03/Shrimp-Stir-Fry-083-150x150.jpg'} alt="" />
             <h4>Cocktail Recipe</h4>
           </div>

           
       </div>

       <div className="exbtn">
        <button>Explore More</button>
       </div>
    </div>

   

    </>
   
  )
}

export default Starter