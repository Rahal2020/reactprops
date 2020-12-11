import React from 'react'
import PropTypes from "prop-types";
function ChildComponent(props) {
    console.log(props);
    const {
        fullName,
        bio,
        Profession,
        children,
        handleAlert
    } =props
    return (
<div>
    {children}
    <h1 style= {styleObjectt}> {fullName}</h1>
    <h2 style= {styleObjectt}>{Profession}</h2>
    <ul style= {styleObjectt}>
          {bio.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
    <button style= {styleObjectt} onClick={() => handleAlert(fullName)}>Click Here</button>
</div>
    )
}
//default props
ChildComponent.defaultProps= {
    
}
ChildComponent.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    Profession: PropTypes.string,
    handleAlert: PropTypes.func.isRequired
  };
export default ChildComponent
const styleObjectt={textAlign:'center', Color:'Royal blue', background:'pink'}