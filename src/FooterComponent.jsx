import React, { useState } from 'react';
import './FooterComponent.css';

const FooterComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation
        let validationErrors = {};
        if (!formData.name.trim()) validationErrors.name = "Name is required";
        if (!formData.email.trim()) validationErrors.email = "Email is required";
        if (!formData.message.trim()) validationErrors.message = "Message is required";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // If no validation errors, proceed with form submission
        alert('Form submitted!');
    };

    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="newsletter-row">
                    <div className="newsletter-col">
                        <h2>News Letter</h2>
                        <p>
                            Get news about articles and updates in your inbox.
                        </p>
                    </div>
                    <div className="form-col">
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                required 
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="input-style" 
                            />
                            {errors.name && <span className="error">{errors.name}</span>}

                            <input 
                                type="email" 
                                required 
                                placeholder="Email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="input-style" 
                            />
                            {errors.email && <span className="error">{errors.email}</span>}

                            <textarea 
                                required 
                                placeholder="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="textarea-style" 
                            />
                            {errors.message && <span className="error">{errors.message}</span>}
                        </form>
                    </div>
                </div>
                <div className="get-in-touch-row">
                    <h2>
                        GET
                        <br />
                        IN TOUCH
                    </h2>
                    <div className="circle-send" onClick={handleSubmit}>
                        Send
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;
