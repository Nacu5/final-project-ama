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
          <option value='1'>Anenii Noi</option>
          <option value='2'>Balti</option>
          <option value='3'>Basarabeasca</option>
          <option value='4'>Briceni</option>
          <option value='5'>Calarasi</option>
          <option value='Causeni'>Causeni</option>
          <option value='Cahul'>Cahul</option>
          <option value='Cantemir'>Cantemir</option>
          <option value='9'>Ceadar-Lunga</option>
          <option value='10'>Chisinau</option>
          <option value='11'>Cimislia</option>
          <option value='12'>Comrat</option>
          <option value='13'>Criuleni</option>
          <option value='14'>Donduseni</option>
          <option value='15'>Drochia</option>
          <option value='16'>Dubasari</option>
          <option value='17'>Edinet</option>
          <option value='18'>Floresti</option>
          <option value='19'>Glodeni</option>
          <option value='20'>Hancesti</option>
          <option value='21'>Ialoveni</option>
          <option value='22'>Leova</option>
          <option value='23'>Lipcani</option>
          <option value='24'>Nisporeni</option>
          <option value='25'>Ocnita</option>
          <option value='26'>Orhei</option>
          <option value='27'>Otaci</option>
          <option value='28'>Rascani</option>
          <option value='29'>Rezina</option>
          <option value='30'>Sangerei</option>
          <option value='31'>Soroca</option>
          <option value='32'>Soldanesti</option>
          <option value='33'>Stefan Voda</option>
          <option value='34'>Straseni</option>
          <option value='35'>Taraclia</option>
          <option value='36'>Telenesti</option>
          <option value='37'>Ungheni</option>
          <option value='38'>Vulcanesti</option>

        </select>

        <Button handleClick={cauta} label={'cauta'}/>
      </div>
    </div>
)}

export default OptionList;
