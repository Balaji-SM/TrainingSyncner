import React, { useState } from "react";
import axios from "axios";
import './App.css';

function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page refresh
        setLoading(true);
        setSuccess(null);
        setError(null);

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
                headers: { "Content-Type": "application/json" }
            });

            console.log("API Response:", response.data); // Debug: Log API response

            if (response.status === 201) {
                setSuccess("Form submitted successfully!");
                setFormData({ name: "", email: "", message: "" }); // Reset form after success
            } else {
                throw new Error("Unexpected response from the server.");
            }
        } catch (err) {
            console.error("Error submitting form:", err); // Debug: Log errors
            setError("Failed to submit the form. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "400px", margin: "auto" }}>
            <h2>Contact Form</h2>
            
            {success && <p style={{ color: "green" }}>{success}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
                <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
            </form>
        </div>
    );
}

export default ContactForm;
