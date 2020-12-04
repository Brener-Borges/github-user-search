import React from 'react';
import { User } from '../../types';
import ImageLoader from '../Loaders/ImageLoader';
import InfoLoader from '../Loaders/InfoLoader';
import './styles.scss';

type Props = {
    user: User;
    isLoading: boolean; 
}

const UserInfo = ({ user, isLoading }: Props) => {
    return (
        <div className="user-info-container">
            <div className="user-info">
                <div className="user-info-avatar-content">
                   {isLoading ? (
                       <div>
                           <ImageLoader />
                        </div>
                   ) : (
                    <>
                        <img 
                            src={user.avatar_url}
                            alt="Imagem do usuário" 
                            className="user-info-avatar" 
                        />
                        <a href={`https://github.com/${user.login}`} target="_new">
                            <button className="btn btn-primary">
                                Ver perfil
                            </button>
                        </a>
                    </>
                   )}
                </div>
                <div className="user-info-details">
                   {isLoading ? (
                       <div>
                           <InfoLoader />
                       </div>
                   ) : (
                       <>
                        <div className="badges-content">
                            <span className="badge-item user-info-item">
                                Repositórios públicos: {user.public_repos}
                            </span>
                            <span className="badge-item user-info-item">
                                Seguidores: {user.followers}
                            </span>
                            <span className="badge-item user-info-item">
                                Seguindo: {user.following}
                            </span>
                        </div>
                        <div className="user-info-content user-info-item">
                            <h3 className="user-info-title">
                                <strong>Informações</strong>
                            </h3>
                            <div className="user-info-details-item user-info-item">
                                <strong>Empresa:</strong> {user.company}
                            </div>
                            <div className="user-info-details-item user-info-item">
                                <strong>Website/Blog:</strong> {user.blog}
                            </div>
                            <div className="user-info-details-item user-info-item">
                                <strong>Localidade:</strong> {user.location}
                            </div>
                            <div className="user-info-details-item user-info-item">
                                <strong>Membro desde:</strong> {user.created_at}
                            </div>
                        </div>
                       </>
                   )}
                </div>
            </div>
        </div>
    );
};

export default UserInfo;