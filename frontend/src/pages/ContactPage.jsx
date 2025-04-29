import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import API from "../environment/API";
import Card from "../components/Card";
import PaddedView from "../components/PaddedView";
import { Slide, ToastContainer, toast } from 'react-toastify';
import SocialLinks from "../components/SocialLinks";

const toastSettings = {
    theme: "colored",
    autoClose: 1000,
    transition: Slide,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    hideProgressBar: true,
}

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
            toast.success("Message Sent Successfully", toastSettings);
        })
        .catch (err => {
            console.error("Error submitting the message:", err);
            toast.error("Message Failed to Send", toastSettings);
        });
    };

    return (
        <>
            <Header>Contact</Header>
            <PaddedView>
                <SocialLinks/>
                <br/>
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
                    <br/>
                    <button type="submit" className="w-full">
                        <Card className="mb-4 rounded-md w-full cursor-pointer">
                            Submit
                        </Card>
                    </button>
                        
                </form>
            </PaddedView>
            <ToastContainer/>
        </>
    );
}