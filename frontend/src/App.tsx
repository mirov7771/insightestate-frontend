import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router';
import { FiltersProvider } from '@/widgets/Filter/model/useFilters';
import Listing from '@/pages/Listing';
import EstateDetail from '@/pages/EstateDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Home Page</h1>} />
        <Route
          path="/listing"
          element={
            <FiltersProvider>
              <Listing />
            </FiltersProvider>
          }
        />
        <Route path="/property">
          <Route path=":id" element={<EstateDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
