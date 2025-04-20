import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import API from "../environment/API";
import Card from "../components/Card";


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
                <label>Name</label>
                <Card className="mb-4 rounded-md w-full">
                    <input
                        className="w-full"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                    />
                </Card>
                <label>Email</label>
                <Card className="mb-4 rounded-md w-full">
                    <input
                        className="w-full"
                        name="email"
                        type="text"
                        value={form.email}
                        onChange={handleChange}
                    />
                </Card>
                <label>Message</label>
                <Card className="mb-4 rounded-md w-full">
                    <textarea
                        className="w-full"
                        name="message"
                        type="textarea"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                    />
                </Card>
                <Card className="mb-4 rounded-md w-full cursor-pointer">
                    <button type="submit">Submit</button>
                </Card>
            </form>
        </>
    );
}