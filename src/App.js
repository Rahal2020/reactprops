import React from 'react'
import ChildComponent from './profile/ChildComponent'
import './App.css';
import image from './myProfile.jpg'

const array = [
  "AGE: 33",
  "ADDRESS: Omran Superieur Tunis",
  "E-Mail: rahal.hasnia@gmail.com",
  "PHONE: +216 22939434",
];

function ParentComponent() {
  const handleAlert = (name) => alert(`Hi I am a ${name}`);
  return (
<div className="parent">
  <ChildComponent
  fullName=' I am D. Hasnia Rahal' 
  bio={array} 
  Profession='Docteur En Physique Quantique'
  handleAlert={handleAlert} 
  >
  <hr />
        {/* children props */}
        <div style={styleObject}> 
        < img class="avatar rotate" src={image} alt="Profile" />
          <hr />
        </div>
      </ChildComponent>

</div>
  )
}
export default ParentComponent
const styleObject= {textAlign:'center', background:'black'}
