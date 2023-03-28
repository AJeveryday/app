import { useState } from 'react'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { v4 as uuid } from 'uuid';
const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [role, setRole] = useState(user?.role)
  const [state, setState] = useState(user?.state)
  const [city, setCity] = useState(user?.city)
  const [school, setSchool] = useState(user?.school)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !role || !state || !city || !school) {
      displayAlert()
      return
    }
    updateUser({ name, email, role, state, city, school })
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type='text'
            name='role'
            value={role}
            handleChange={(e) => setRole(e.target.value)}
          />
           <FormRow
            type='text'
            name='State'
            value={state}
            handleChange={(e) => setRole(e.target.value)}
          />
           <FormRow
            type='text'
            name='City'
            value={city}
            handleChange={(e) => setRole(e.target.value)}
          />
           <FormRow
            type='text'
            name='School'
            value={school}
            handleChange={(e) => setRole(e.target.value)}
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
      <h1>{small_id}</h1>
    </Wrapper>
  )
}

export default Profile
