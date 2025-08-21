import React, {useState, useEffect} from "react";
import api from '../api'
import Offer from "../components/Offer";
import BasePage from "./BasePage.jsx";
import {useNavigate} from "react-router-dom";
import "../styles/AllOffers.css"

function MyOffers () {
    const [offers, setOffers] = useState([])
    const isOwner = true
    const navigate = useNavigate()
    const navigateToAdddOffer  = ()=> {
        navigate('/add-offer')
        }



    useEffect(() => {
        getOffers()
    }, []);

    const getOffers = () => {
        api
            .get('api/my_offers/')
            .then((res) => res.data)
            .then((data) => {
                setOffers(data);
                console.log(data)
            })
            .catch((err) => alert(err));
    };

    const deleteOffer = (id) => {
        api
            .delete(`api/offer/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert('Offer deleted');
                else alert('Failed to delete offer');
                getOffers()
            })
            .catch((error) => alert(error))
    };

    return (
        <>
            <BasePage />
            <div className="grid-container-offer">
                {offers.map((offer) => (
                    <div className="offer-window">
                        <Offer offer={offer} onDelete={deleteOffer} isOwner={isOwner} key={offer.id} />
                    </div>
                ))}
            </div>
            <br />
        </>
    )
}

export default MyOffers