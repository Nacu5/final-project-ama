import './App.css';
import calendar from './components/calendar';

function App() {
  return (
    <div className="App">
      <h1>
         Programare Specialisti     
      </h1>


      <div class='group-1'> 

        <select id="Type" onchange='selectSearchType()'>
         <option value='notar' class='Level'>Notar</option>
        <option value='executor' class='Level'>Executor</option>
      </select>

    

      <select id='Location'>
        <option value="0">-Selectati orasul--</option>
        <option value='1'>Anenii Noi</option>
        <option value='2'>Balti</option>
        <option value='3'>Basarabeasca</option>
        <option value='4'>Briceni</option>
        <option value='5'>Calarasi</option>
        <option value='6'>Causeni</option>
        <option value='7'>Cahul</option>
        <option value='8'>Cantemir</option>
        <option value='9'>Ceadar-Lunga</option>

        <optgroup label="Chisinau">
        <option value='1'>Botanica</option>
        <option value='2'>Buiucani</option>
        <option value='3'>Centru</option>
        <option value='4'>Ciocana</option>
        <option value='5'>Riscani</option>
        </optgroup>

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

      <button class='search_button' onlick='searchButton()'> CAUTA</button>
            </div>
    </div>


  );
}

export default App;
