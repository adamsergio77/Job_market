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

                <img src='src/assets/bin-logo.png' height='30px' width='30px' title="Usuń" onClick={() => onDelete(offer.id)}></img>

                <img src='src/assets/edit-logo.png' height='30px' width='30px' title="Edytuj" onClick={() => setIsOpenModal(true)}></img>

                {isOpenModal && <ModalEdit offerId={offer.id} closeModal={setIsOpenModal} />}
            </div>
            }
        </div>
    );
}
export default Offer
