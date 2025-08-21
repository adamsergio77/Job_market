import React, {useState} from "react";
import '../styles/EditModal.css'
import api from "../api.js";

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
        <div className='overlay-styles'></div>
        <div className='modal-styles'>
            <form onSubmit={() => editOffer(offerId)}>
                <label>Tytuł</label>
                <br/>
                <input
                    type='text'
                    id='title'
                    name='title'
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <textarea
                    id='content'
                    name='content'
                    required
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                />
               <input
                    type='submit'
                    value='Submit'
                />
            </form>
            <button onClick={() => closeModal(false)}>Close</button>
        </div>
        </>
    )
}