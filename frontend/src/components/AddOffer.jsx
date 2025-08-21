import React, {useState} from "react";
import api from '../api.js'
import '../styles/AddOfferModal.css'

export default function AddOffersModal ({closeAddOffer}) {
    const [title, setTitle] = useState([''])
    const [content, setContent] = useState([''])

    const addOffer = () => {
        api
            .post('api/my_offers/', {content, title})
            .then((res) => {
                if (res.status === 201) alert('Offer created');
                else alert('Failed to create Offer');

            })
            .catch((err) => alert(err))
    }

    return (
        <>
        <div className='overlay-styles'></div>
        <div className='modal-styles'>
            <form onSubmit={addOffer}>
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
            <button onClick={() => closeAddOffer(false)}>Close</button>
        </div>
        </>
    )
}
