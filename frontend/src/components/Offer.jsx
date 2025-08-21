import React, {useState} from "react";
import ModalEdit from "./EditModal.jsx";
import "../styles/Offer.css"

function Offer({ offer, onDelete, isOwner}) {
    const formattedDate = new Date(offer.created_at).toLocaleDateString("en-US")
    const [isOpenModal, setIsOpenModal] = useState(false)

    return (
        <div className="offer-box">
            <p className="offer-date">Dodano {formattedDate}</p>
            <p className="offer-title">{offer.title}</p>
            <p className="offer-category">Kategoria {offer.category}</p>
            <p className="offer-content">
                Opis: <br />
                {offer.content}
            </p>
            {isOwner &&
            <div className="buttons-area">
                <button onClick={() => onDelete(offer.id)}>Delete</button>
                <button onClick={() => setIsOpenModal(true)}>Edit</button>
                {isOpenModal && <ModalEdit offerId={offer.id} closeModal={setIsOpenModal} />}
            </div>
            }
        </div>
    );
}
export default Offer
