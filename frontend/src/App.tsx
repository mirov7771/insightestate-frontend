import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router';
import { FiltersProvider } from '@/widgets/Filter/model/useFilters';
import Layout from '@/widgets/Layout/Layout';
import Listing from '@/pages/Listing';
import EstateDetail from '@/pages/EstateDetail';
import OfferCollection from '@/pages/OfferCollection';
import { UserCollection } from '@/pages/UserCollection';
import { AiListing } from '@/pages/AiListing';
import { Authorization } from '@/pages/Authorization';
import { Login } from '@/pages/Login';
import { SignUp } from '@/pages/SignUp';
import { SignUpEnd } from '@/pages/SignUpEnd';
import { Register } from '@/pages/Register';
import { Profile } from '@/pages/Profile';
import { ResetPassword } from '@/pages/ResetPassword';
import getUserLocale from 'get-user-locale';
import { useEffect } from 'react';
import OfferCollectionV2 from '@/pages/OfferCollectionV2';
import { StyledEngineProvider } from '@mui/material';
import { Tariffs } from '@/pages/Tariffs';
import { RegistrationLayout } from '@/widgets/RegistrationLayout/RegistrationLayout';

const App = () => {
  const userLocale = getUserLocale();

  useEffect(() => {
    console.log(userLocale);
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', userLocale.toLowerCase().indexOf('ru') > -1 ? 'ru' : 'en');
      window.location.reload();
    }
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route element={<RegistrationLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-up-end" element={<SignUpEnd />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
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
            <Route path="/offer-collection-v2">
              <Route path=":id" element={<OfferCollectionV2 />} />
            </Route>
            <Route path="/tariffs" element={<Tariffs />} />
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
    </StyledEngineProvider>
  );
};

export default App;
