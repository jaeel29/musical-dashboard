import LayoutPage from 'layouts/LayoutPage';
import Search from 'pages/Search';
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
        path='/search'
        element={
          <LayoutPage>
            <Search />
          </LayoutPage>
        }
      />

      <Route
        path='/notifications'
        element={
          <LayoutPage>
            <Search />
          </LayoutPage>
        }
      />

      <Route
        path='/favorites'
        element={
          <LayoutPage>
            <Search />
          </LayoutPage>
        }
      />
    </Routes>
  );
}

export default App;
