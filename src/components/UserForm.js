'use client';
import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
    const [entrada, setEntrada] = useState('');

    const handleInputChange = (e) => {
        setEntrada(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3000/api/user', {
                name: entrada,
            });
            
            console.log('User created:', response.data);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <input
                name="entrada"
                className="m-1"
                value={entrada}
                onChange={handleInputChange}
            />
            <button type="submit" className="m-1 btn btn-primary">Enviar</button>
        </form>
    );
}

export default UserForm;
