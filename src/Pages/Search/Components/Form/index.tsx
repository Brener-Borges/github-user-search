import React from 'react';
import { useState } from 'react';
import './styles.scss';

type Props = {
    onSearch: (search: string) => void;
}

const Form = ({ onSearch }: Props ) => {

    const [search, setSearch] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(search);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    return (
        <div className="form-content card">
            <h1 className="form-title">
                Encontre um perfil Github
            </h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" className="form-input" placeholder="Usuário Github" />
                <div className="form-button">
                <button className=" btn btn-primary">
                    Encontrar
                </button>
                </div>
            </form>      
        </div>
    );
};

export default Form;