import './App.scss';
import {Routes, Route, BrowserRouter} from 'react-router';
import { FiltersProvider } from '@/widgets/Filter/model/useFilters';
import Layout from '@/widgets/Layout/Layout';
import Listing from '@/pages/Listing';
import EstateDetail from '@/pages/EstateDetail';
import OfferCollection from '@/pages/OfferCollection';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
          <Route path="/offer-collection" element={<OfferCollection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
