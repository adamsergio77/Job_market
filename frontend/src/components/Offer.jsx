import React, {useState} from "react";
import ModalEdit from "./EditModal.jsx";
import "../styles/Offer.css"

function Offer({ offer, onDelete, isOwner}) {
    const formattedDate = new Date(offer.created_at).toLocaleDateString("en-US")
    const [isOpenModal, setIsOpenModal] = useState(false)

    return (
        <div className="offer-box">
            <p className="note-title">{offer.title}</p>
            <p className="note-content">{offer.content}</p>
            <p>{offer.category}</p>
            <p>{offer.author}</p>
            <p className="note-date">{formattedDate}</p>
            {isOwner &&
            <div>
                <button onClick={() => onDelete(offer.id)}>Delete</button>
                <button onClick={() => setIsOpenModal(true)}>Edit</button>
                {isOpenModal && <ModalEdit offerId={offer.id} closeModal={setIsOpenModal} />}
            </div>
            }
        </div>
    );
}
export default Offer
