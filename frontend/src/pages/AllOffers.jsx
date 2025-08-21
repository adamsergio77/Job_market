import {useState, useEffect} from "react";
import api from '../api'
import Offer from "../components/Offer";
import "../styles/AllOffers.css"

function AllOffers () {
    const [offers, setOffers] = useState([])
    const isOwner = false

    useEffect(() => {
        getOffers()
    }, []);

    const getOffers = () => {
        api
            .get('api/offers/')
            .then((res) => res.data)
            .then((data) => {
                setOffers(data);
                console.log(data)
            })
            .catch((err) => alert(err));
    };

    return (
        <>
            <div className="grid-container-offer">
                {offers.map((offer) => (
                    <Offer offer={offer} isOwner={isOwner} key={offer.id}/>
                ))}
            </div>
        </>
    )
}

export default AllOffers