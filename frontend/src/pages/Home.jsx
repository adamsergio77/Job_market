import "../styles/Home.css"
import BasePage from "./BasePage.jsx";
import AllOffers from "./AllOffers.jsx";


function  Home() {
     return (
         <>
         <div style={{backgroundColor: 'lightgray'}}>
            <div style={{height: '50px'}}>
                <BasePage />
            </div>
             <div>
                 <AllOffers />
             </div>
         </div>
         </>
     )
}
export default Home;