import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import API from "../environment/API";

export default function ContactPage({}){
    const [form, setForm] = useState({name: '', email: '', message: ''});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(API + 'contact', form)
        .then(res => {
            setForm({name: '', email: '', message: ''});
        })
        .catch (err => console.error("Error submitting the message:", err)) ;
    };

    return (
        <>
            <Header>Contact</Header>
            <p>nhowell3@atu.edu</p>
            <p>insert linkedln maybe?</p>
            <p>insert github</p>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    name="email"
                    type="text"
                    value={form.email}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    type="textarea"
                    value={form.message}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}