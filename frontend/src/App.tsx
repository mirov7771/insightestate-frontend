import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.scss';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router';
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
import OfferCollectionV2 from '@/pages/OfferCollectionV2';
import { StyledEngineProvider } from '@mui/material';
import { Tariffs } from '@/pages/Tariffs';
import { RegistrationLayout } from '@/widgets/RegistrationLayout/RegistrationLayout';
import { NotificationsProvider } from '@/shared/ui';
import { I18nProvider } from '@/i18n/I18nProvider';
import { ResetPasswordCode } from '@/pages/ResetPassword/ResetPasswordCode';
import { NewPassword } from '@/pages/ResetPassword/NewPassword';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const element = document.documentElement || document.body;

    element.scrollTop = 0;
  }, [location]);

  return null;
};

const App = () => {
  const userLocale = getUserLocale();
  const localStorageUserLocale = localStorage.getItem('language') as 'ru' | 'en';

  useEffect(() => {
    if (!localStorageUserLocale) {
      localStorage.setItem('language', userLocale.toLowerCase().indexOf('ru') > -1 ? 'ru' : 'en');
      window.location.reload();
    }
  }, []);

  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <NotificationsProvider>
          <FiltersProvider>
            <I18nProvider locale={localStorageUserLocale || 'en'}>
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route element={<RegistrationLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/sign-up-end" element={<SignUpEnd />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/reset-password/code" element={<ResetPasswordCode />} />
                    <Route path="/reset-password/new" element={<NewPassword />} />
                  </Route>
                  <Route path="/" element={<Layout />}>
                    <Route path="/profile" element={<Profile />} />
                    <Route index element={<Authorization />} />
                    <Route path="/listing" element={<Listing />} />
                    <Route path="/property">
                      <Route path=":id" element={<EstateDetail />} />
                    </Route>
                    <Route path="/offer-collection">
                      <Route path=":id" element={<OfferCollection />} />
                    </Route>
                    <Route path="/cl">
                      <Route path=":id" element={<OfferCollectionV2 />} />
                    </Route>
                    <Route path="/tariffs" element={<Tariffs />} />
                    <Route path="/user-collection" element={<UserCollection />} />
                    <Route path="/ai-listing" element={<AiListing />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </I18nProvider>
          </FiltersProvider>
        </NotificationsProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
};

export default App;
