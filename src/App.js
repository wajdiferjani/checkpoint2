import React from 'react';
import './App.css';
import papillon from './papillon.jpg';


function App() {
  return (
<div style={{ border: "solid 1px black", maxWidth: 60 }}>

<h1 className='title red'>wajdi</h1>

<br/>

<img src={'./orange.jpg'} alt="orange" />

<br/>

<img src={papillon} alt="papillon" />

</div>
  );
}

export default App;
