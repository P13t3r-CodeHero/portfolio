import { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Surname: '',
        Email: '',
        Message: '',
        ContactNumber: '072 073 5803',
        ClientCode: 'PORTFOLIO'
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE3NDg1MjExNjgsImV4cCI6MTc4MDA1NzE2OCwiaXNzIjoicG9ydGZvbGlvIiwiYXVkIjoiZW1haWwtc2VydmljZSJ9.FaSRjb12ftTgFqt00CSUKJSNTyuQqF0RJl9ELBrI-3w';

        try {
            const response = await fetch('https://everestsoftwareemailservice-hqdwhzb8hra3e0g4.southafricanorth-01.azurewebsites.net/api/Email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('Message sent successfully!');
            setFormData({ Name: '', Surname: '', Email: '', Message: '' });
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <section className="contact-section" id='contact'>
            <div>GET IN TOUCH</div>
            <div className="contact-header">CONTACT</div>
            <div className="contact-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input
                            type="text"
                            name="Name"
                            placeholder="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="Surname"
                            placeholder="Surname"
                            value={formData.Surname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <input
                        type="email"
                        name="Email"
                        placeholder="Email Address"
                        value={formData.Email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="Message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.Message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Send Message</button>
                    {status && <p style={{ marginTop: '10px' }}>{status}</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
