import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './Redux/store.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Pages/Contact.jsx'
import ViewContact from './Pages/ViewContact.jsx'
import UpdateContact from './Pages/UpdateContact.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
             <Route path="/" element={<App />} />
             <Route path="/AddContact" element={<Contact />} />
             <Route path="/viewContact" element={<ViewContact/>} />
             <Route path="/updateContact/:pos" element={<UpdateContact />} />

          </Routes>

      </BrowserRouter>
     

    </Provider>
  </StrictMode>,
)
