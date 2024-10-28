import '../../styles/Grow.css'
import React from 'react';

const Grow = () => {
   // const history = useHistory();

   /* const handleStartNow = () => {
        history.push('/login'); 
    };
*/
    return (
     <section>
        <div className='growContainer'>
            <h2 className='growTitle'>Grow your vision</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit unde consectetur nemo accusamus deserunt nam numquam? Laudantium ipsum veritatis modi officia praesentium, sed maxime libero nulla. Repellendus, facilis harum.</p>
            <button className='growButton'>Start Now</button>
        </div>
     </section>  
    )
}

export default Grow;