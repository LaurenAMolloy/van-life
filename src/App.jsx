import './App.css';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import HostLayout from './layouts/HostLayout';
import MainLayout from './layouts/MainLayout';

function App() {

  /**
   * Challenge: Add the routes necessary so we can access
   * /host/vans/:id/pricing and /host/vans/:id/photos.
   * 
   * Add stubbed-out components in separate files for
   * these routes (e.g. <h2>Pricing view here</h2>). I already
   * made the `HostVanInfo.jsx`, `HostVanPricing.jsx` and
   * `HostVanPhotos.jsx` files for you, but they're empty.
   * 
   * Don't forget: you'll need to use a special tool from
   * React Router so we can keep the top info (and 
   * eventually the navbar we build) on the page while going
   * from nested route to nested route. This will require some
   * slight changes to HostVanDetail.jsx
   * 
   * Since we don't have the navbar yet, you can test them
   * by manually navigating to e.g. /host/vans/1/pricing.
   */
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
         <Route path="reviews" element={<Pages.Host.Reviews />} />
         <Route path="vans" element={<Pages.Host.HostVans />} />
          {/* Van Detail routes */}
           <Route path="vans/:id" element={<Pages.Host.HostVanDetail />} >
              <Route index element={<Pages.Host.HostVanInfo />} />
              <Route path="pricing" element={<Pages.Host.HostVanPricing />} />
              <Route path="photos" element={<Pages.Host.HostVanPhotos />} />
           </Route>
       </Route>
      </Route >
    </Routes>
    </>
    
  )
}

export default App
