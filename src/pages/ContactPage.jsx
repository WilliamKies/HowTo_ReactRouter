import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to a server)
        console.log('Form data submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return(
        <section className='container'>
            <div className="first-content text-center p-md-4">
                <h1 className="mt-3">Contact Page</h1>
            </div>

            <div className="informations p-md-4">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nom.prenom@laplateforme.io" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" placeholder='Écrire votre message...' id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Envoyer</button>
                </div>
            </div>

            <Link to='/'>Retour acceuil</Link>
        </section>
    );
}

export default ContactPage;