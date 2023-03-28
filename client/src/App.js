import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Landing, Error, ProtectedRoute } from './pages'
import {
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob,
} from './pages/dashboard'
import SelectLoc from './pages/SelectLoc'
import SelectRole from './pages/SelectRole'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
  
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path = '/landingu' element = {<SelectRole/>} />
        <Route path = 'selectLoc' element = {<SelectLoc /> }/>
        <Route path='*' element={<Error />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
