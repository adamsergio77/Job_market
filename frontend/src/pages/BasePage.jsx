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
             <div className="body-window">
                <button onClick={navigateHome}>Strona główna</button>
                 <button onClick={navigateToMyOffer}>
                    Moje oferty
                </button>
                <button onClick={() => setIsOpenAdd(true)}>Dodaj ofertę</button>
                {isOpenAdd && <AddOffersModal closeAddOffer={setIsOpenAdd} />}
                <button onClick={navigateLogout}>
                    Wyloguj
                </button>
             </div>
     )
}

export default BasePage