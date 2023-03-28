import { useState } from 'react'
import { FormRow, Alert } from '../components'
import { useAppContext } from "../context/appContext"
import Wrapper from '../assets/wrappers/DashboardFormPage'
import Dropdown from 'react-dropdown';
import { v4 as uuid } from 'uuid';
const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
const SelectLoc = () => {
  const { user, showAlert, displayAlert, updateLocation, isLoading } =
    useAppContext()

  
  const [state, setState] = useState(user?.state)
  const [city, setCity] = useState(user?.city)
  const [school, setSchool] = useState(user?.school)
  const handleChange = (e) =>{
    setState(e.target.value);
    setCity(e.target.value);
    setSchool(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!state || !city || !school) {
      displayAlert()
      return
    }
    updateLocation({state, city, school })
  }
  
  
  return (
    
    <Wrapper>
        
    
      <form className='form' onSubmit={handleSubmit}>
        
        {showAlert && <Alert />}
        <div className='form'>
          <h3>State</h3>
          <select name="aliasChoice"
                value={state}
                onChange={handleChange}
                className="form-select">
            
            <option>{""}</option>
          </select>
           <h3>City</h3>
           <select name="aliasChoice"
                value={city}
                onChange={handleChange}
                className="form-select">
            <option >{""}</option></select>
           <h3>School</h3>
           <select name="aliasChoice"
                value={city}
                onChange={handleChange}
                className="form-select">
            <option >{""}</option></select>
          <button className='btn btn-block' type='submit' disabled={isLoading} onSubmit={(e) => handleSubmit(e.target.value)}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
      
    </Wrapper>
  )
}

export default SelectLoc
/*<FormRow
            type='text'
            name='State'
            value={state}
            handleChange={(e) => setState(e.target.value)}
          />*/