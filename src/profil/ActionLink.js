import React from 'react';
import ProfilComponent from './ProfilComponent ';
import Photo from './myPhoto.jpg';

const ActionLink = () => {
    const handleName = name => alert(`Welcome ${name}` )

    return ( 
    
    <ProfilComponent fullName="Mohamed Anouar Jabri" bio=" I am a GoMyCode student and I am 
learning web development with React" profession="Web Developer & Process Engineer" handleName={handleName}>
    <img src={Photo} alt="photodeprofil" width="230px" style={{border:"5px #3a9ed1 solid", borderRadius:"5% 5%"}}/>
    </ProfilComponent>  
    )
};

export default ActionLink; 