import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ProfilComponent =(props) => {
    return (
    <div style={{margin:"auto", width:"70%", marginTop:"100px" , display:"flex", justifyContent:"space-around", alignItems:"center"}}>
        <div style={{display:"flex", flexDirection:"column", textAlign:"left", paddingRight:"50px"}}>
        <h1>  {props.fullName}</h1>
        <h2> {props.profession}</h2>
        <p style={{fontSize:"1.2em"}}>Bio : {props.bio}</p>
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
        {props.children} <br />
        <br />
        <Button variant="outline-primary" onClick={()=> props.handleName(props.fullName)}>
        Click me 
        </Button>{' '}
        </div>
    </div>
    );
};
ProfilComponent.defaultProps = {
    fullName: 'UserName',
    bio:"User description",
    profession:'User Profession'
    }
    
ProfilComponent.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
    }
export default ProfilComponent ;