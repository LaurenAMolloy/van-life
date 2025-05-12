import './App.css';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import HostLayout from './layouts/HostLayout';
import MainLayout from './layouts/MainLayout';

/**
   * Challenge: add the /host/vans and /host/vans/:id routes, as well
   * as the "Vans" link in the Host navbar.
   * 
   * For now, just create the stubbed-out version of the pages (i.e.
   * components that just render an <h1>). Don't worry about adding
   * navigation from /host/vans to /host/vans/:id yet - the link to
   * /host/vans is enough for now.
   * 
   * When deciding whether or not to use nested routes, keep in mind
   * what will/won't be shared between these two pages. See the Figma
   * design file (or the screenshots) to help guide your choice.
   */

function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<MainLayout />}>
       <Route index element={<Pages.HomePage />}/>
       <Route path="home" element={<Pages.HomePage />} />
       <Route path="vans" element={<Pages.VansPage />} />
       <Route path="vans/:id" element={<Pages.VanDetail />} />
       <Route path="about" element={<Pages.AboutPage />} />
       {/* Host routes */}
       <Route path="host" element={<HostLayout />}>
         <Route index element={<Pages.Host.Dashboard />}/>
         <Route path="income" element={<Pages.Host.Income />} />
         <Route path="listedvans" element={<Pages.Host.ListedVans />} />
         <Route path="listedvans/:id" element={<Pages.Host.YourVans />} />
         <Route path="reviews" element={<Pages.Host.Reviews />} />
       </Route>
      </Route >
    </Routes>
    </>
    
  )
}

export default App
