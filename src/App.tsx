import LayoutPage from 'components/LayoutPage';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import 'styles/app.scss';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <LayoutPage>
            <Home />
          </LayoutPage>
        }
      />

      <Route
        path='/contact'
        element={
          <LayoutPage>
            <Contact />
          </LayoutPage>
        }
      />
    </Routes>
  );
}

export default App;
