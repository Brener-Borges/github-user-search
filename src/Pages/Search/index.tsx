import React from 'react';
import { makeRequest } from '../../core/utils/request';
import { useState } from 'react';
import Form from './Components/Form';
import UserInfo from './Components/UserInfo';
import './styles.scss';
import { User } from './types';

const Search = () => {

    const [userInfo, setUserInfo] = useState<User>();
    console.log(userInfo);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    

    const handleSearch = (search: string) => {
        setIsLoading(true);
        makeRequest({ url: search })
        .then(response => {
            setUserInfo(response.data);
        })
        .then(response => {
            setIsLoading(false);
        })
        .catch(() => {
            alert('Usuário não encontrado!');
            setIsLoading(false);
        })
    }

    return (
        <div className="search-container">
            <Form onSearch={handleSearch}/>
           {
               userInfo && (
                <UserInfo user={userInfo} isLoading={isLoading}/>
               )
           }         
        </div>
    );
};

export default Search;