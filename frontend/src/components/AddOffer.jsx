import React, {useState} from "react";
import api from '../api.js'
import '../styles/AddOffer.css'

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
        <div className="overlay-styles">
            <div className="modal-styles">
                <form onSubmit={addOffer}>
                    <div className="add-offer-header">
                        <div style={{textAlign:'left'}}>
                            <h2>Dodaj ofertę</h2>
                        </div>
                        <div style={{textAlign:'right'}}>
                             <button className="close-button" onClick={() => closeAddOffer(false)}>X</button>
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
                        <button className="submit-button" type='submit' value='Dodaj'>
                            Dodaj
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
