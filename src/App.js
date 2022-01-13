import React from 'react'
import Header from './Header';
import Inputbox from './Inputbox';
import Button from './Button';
import DisplayLabel from './DisplayLabel';


export default function App() {
  return (
    <div>

      <Header text="Zip Code Search" color="red" />
      <Inputbox />
      <Button text="Find Cities" color="green" />
      <DisplayLabel />

     

    </div>
  );
}
