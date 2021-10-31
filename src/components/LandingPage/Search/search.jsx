
import './search.scss'
import {dot, usericon} from "./icon";


const SearchMenu = () =>{
    return(
      <div className='searchMenu'>
          <form>
          <label className='locationLabel'>
              <input id='input' type="text" className='location' placeholder="Felhidoo, Maldives"/>
          </label>

              {/*<label className='numberOfUsers'>*/}
              {/*    <input id='input' className='numberOfUsers' placeholder={dot}/>*/}
              {/*</label>*/}
              <label className='numberOfUsersLabel'>
                      <button className='numberOfUsers' id='input'>
                       2 adults  {dot}    2 children  {dot}   1 room
                      </button>
                </label>

          <label className='calenderLabel'>
                <input id='input' className='date1' placeholder=' Wed 15/6/2021'/>
          </label>

          <label className='calenderLabel2'>
              <input className='date2' placeholder='Fri 17/6/2021'/>
          </label>

              <label className='submitLabel'>
              <input id='input' className='submitButton' type='submit' value='   '/>


              </label>
          </form>

      </div>

    )


}

export default SearchMenu