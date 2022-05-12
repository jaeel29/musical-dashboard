import LayoutPage from 'layouts/LayoutPage';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import 'styles/app.scss';

function App() {
  return (
    <Routes>
      <Route
        path='*'
        element={
          <LayoutPage>
            <NotFound />
          </LayoutPage>
        }
      />

      <Route
        path='/'
        element={
          <LayoutPage>
            <Home />
          </LayoutPage>
        }
      />
    </Routes>
  );
}

export default App;
