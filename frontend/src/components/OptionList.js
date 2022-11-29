import React, { useState } from "react";
import Button from "./Button";
import './OptionList.css';

function OptionList() {
const [locatie, setlocatie] = useState (null)
const [specialist, setspecialist] = useState (null)
console.log(locatie)
console.log(specialist)

function changespecialist(event) {
  setspecialist(event.target.value)
}
  function changelocatie(event) {
    setlocatie(event.target.value)
  }

  function cauta (){
    console.log(specialist)
    if ( specialist=='notar'){
      fetchnotari ()
    }
    if ( specialist=='executor'){
      fetchexecutor ()
    }
  }

  function fetchnotari (){
    const url =`http://localhost:6060/specialisti?locatia=${locatie}`; 
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
      }
    )
  }

  function fetchexecutor (){
    const url =`http://localhost:6060/executori?locatia=${locatie}`; 
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
      }
    )
  }
  return (
    <div className="OptionList">

      <h1>
         Programare Specialisti     
      </h1>


      <div class='group-1'> 


        <select id="Type" onChange={changespecialist}>
          <option value='notar' class='Level'>Notar</option>
          <option value='executor' class='Level'>Executor</option>
         </select>

    

        <select id='Location' onChange={changelocatie}>
          <option value="0">-Selectati orasul--</option>
          <option value='Anenii Noi'>Anenii Noi</option>
          <option value='Balti'>Balti</option>
          <option value='Basarabeasca'>Basarabeasca</option>
          <option value='Briceni'>Briceni</option>
          <option value='Calarasi'>Calarasi</option>
          <option value='Causeni'>Causeni</option>
          <option value='Cahul'>Cahul</option>
          <option value='Cantemir'>Cantemir</option>
          <option value='Ceadar-Lunga'>Ceadar-Lunga</option>
          <option value='Chisinau'>Chisinau</option>
          <option value='Cimislia'>Cimislia</option>
          <option value='Comrat'>Comrat</option>
          <option value='Criuleni'>Criuleni</option>
          <option value='Donduseni'>Donduseni</option>
          <option value='Drochia'>Drochia</option>
          <option value='Dubasari'>Dubasari</option>
          <option value='Edinet'>Edinet</option>
          <option value='Floresti'>Floresti</option>
          <option value='Glodeni'>Glodeni</option>
          <option value='Hancesti'>Hancesti</option>
          <option value='Ialoveni'>Ialoveni</option>
          <option value='Leova'>Leova</option>
          <option value='Lipcani'>Lipcani</option>
          <option value='Nisporeni'>Nisporeni</option>
          <option value='Ocnita'>Ocnita</option>
          <option value='Orhei'>Orhei</option>
          <option value='Otaci'>Otaci</option>
          <option value='Rascani'>Rascani</option>
          <option value='Rezina'>Rezina</option>
          <option value='Sangerei'>Sangerei</option>
          <option value='Soroca'>Soroca</option>
          <option value='Soldanesti'>Soldanesti</option>
          <option value='Stefan Voda'>Stefan Voda</option>
          <option value='Straseni'>Straseni</option>
          <option value='Taraclia'>Taraclia</option>
          <option value='Telenesti'>Telenesti</option>
          <option value='Ungheni'>Ungheni</option>
          <option value='Vulcanesti'>Vulcanesti</option>

        </select>

        <Button handleClick={cauta} label={'Cauta'}/>
      </div>
    </div>
)}

export default OptionList;
