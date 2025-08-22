import React, {useState} from "react";
import '../styles/EditModal.css'
import api from "../api.js";
import '../styles/AddOffer.css'

export default function ModalEdit({offerId, closeModal}) {

    const [title, setTitle] = useState([])
    const [content, setContent] = useState([])

    const editOffer = (id) => {
        api
            .put(`api/offer/edit/${id}/`, {content, title})
            .then((res) => {
                if (res.status === 200) alert('Edit properly!')
                else alert('Failed to edit offer!')
            });
    }

    return (
        <>
           <div className="overlay-styles">
                <div className="modal-styles">
                    <form onSubmit={() => editOffer(offerId)}>
                        <div className="add-offer-header">
                            <div>
                                <h2>Zmień ofertę</h2>
                            </div>
                            <div style={{textAlign:'right'}}>
                                 <button className="close-button" onClick={() => closeModal(false)}>X</button>
                            </div>
                        </div>
                        <div className="title-container">
                            <label>Tytuł:&nbsp;</label>
                            <input
                                type='text'
                                id='title'
                                name='title'
                                required
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                style={{width:'100%'}}
                            />
                        </div>

                        <div className="content-container">
                           <label>Opis:&nbsp;</label>
                            <textarea
                            id='content'
                            name='content'
                            required
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            style={{width:'100%'}}
                            />
                        </div>

                        <div className="submit-container">
                            <button className="edit-button" type='submit' value='Dodaj'>
                                Edytuj
                            </button>
                        </div>
                    </form>
                </div>
           </div>
        </>
    )
}