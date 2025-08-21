import {useNavigate} from "react-router-dom";
import {useState} from "react";
import AddOffersModal from "../components/AddOffer.jsx";
import "../styles/BasePage.css"

function  BasePage() {
    const navigate = useNavigate()
    const [isOpenAdd, setIsOpenAdd] = useState(false)
    const navigateToMyOffer = () => {
        navigate('/my-offers')
    }
    const navigateLogout = () => {
        navigate('/logout')
    }
    const navigateHome = () => {
        navigate('/')
    }

    return (
             <div className="head-window">
                <div className="flex-container-header" style={{width: '10%'}}>
                    <img src='src/assets/logo.png' height='50px' width='50px'/>
                </div>
                 <div className="flex-container-header" style={{width: '50%'}}>
                     <input className="search-bar"
                        type='text'
                        id='search'
                        name='search'
                        placeholder="Szukaj"
                     >
                     </input>
                 </div>
                 <div className="flex-container-header" style={{width: '40%'}}>
                    <button className="header-button" onClick={navigateHome}>Strona główna</button>
                     <button className="header-button" onClick={navigateToMyOffer}>
                        Moje oferty
                    </button>
                    <button className="header-button" onClick={() => setIsOpenAdd(true)}>Dodaj ofertę</button>
                    {isOpenAdd && <AddOffersModal closeAddOffer={setIsOpenAdd} />}
                    <button className="header-button"onClick={navigateLogout}>
                        Wyloguj
                    </button>
                 </div>
             </div>
     )
}

export default BasePage