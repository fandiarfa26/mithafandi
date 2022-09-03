
import { useEffect } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Invitation from './components/Invitation';
import NotFound from './components/NotFound';
import Welcome from './components/Welcome';

const RouteApp = () => {
  let routes = useRoutes([
    { path: "/", element: <Welcome /> },
    { path: "/to/:inviteeId", element: <Invitation /> },
    { path: "*", element: <NotFound /> }
  ]);
  return routes;
}

function App() {
  AOS.init({
    once: true
  });

  useEffect(() => {
    document.title = "Pernikahan Mitha & Fandi"
  }, []);

  return (
    <BrowserRouter>
      <RouteApp />
    </BrowserRouter>
  );
}

export default App;
