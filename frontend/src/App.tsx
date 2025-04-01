import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router';
import { FiltersProvider } from '@/widgets/Filter/model/useFilters';
import Layout from '@/widgets/Layout/Layout';
import Listing from '@/pages/Listing';
import EstateDetail from '@/pages/EstateDetail';
import OfferCollection from '@/pages/OfferCollection';
import { UserCollection } from '@/pages/UserCollection';
import { AiListing } from '@/pages/AiListing';
import {Authorization} from "@/pages/Authorization";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Authorization />} />
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
          <Route path="/offer-collection">
            <Route path=":id" element={<OfferCollection />} />
          </Route>
          <Route path="/user-collection" element={<UserCollection />} />
          <Route
            path="/ai-listing"
            element={
              <FiltersProvider>
                <AiListing />
              </FiltersProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
