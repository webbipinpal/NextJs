import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, email, phone, desc };

        fetch('http://localhost:3000/api/postcontact', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((data) => {
                console.log('Success:', data);
                alert("Thank you for contacting us");
                setName('');
                setEmail('');
                setPhone('');
                setDesc('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    const handleChange = (e) => {
        if (e.target.name == "name") {
            setName(e.target.value);
        }
        else if (e.target.name == "email" ) {
            setEmail(e.target.value);
        }
        else if (e.target.name == "phone") {
            setPhone(e.target.value);
        }
        else if (e.target.name == "desc") {
            setDesc(e.target.value);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-48">
                    <div className="bd-example">
                        <form className='form' onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" name="name" id="name" value={name} onChange={handleChange} placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input type="email" className="form-control" name="email" id="email" value={email} onChange={handleChange} placeholder="Enter your email id" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone No</label>
                                <input type="text" className="form-control" name="phone" id="phone" value={phone} onChange={handleChange} placeholder="Phone Number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Comments</label>
                                <textarea className="form-control" id="desc" value={desc} onChange={handleChange} name="desc" placeholder='Comments' />
                            </div>
                            <button type="submit" value="submit" className="l-btn l-btn--tertiary">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default contact;