import { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.scss';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router';
import { FiltersProvider } from '@/widgets/Filter/model/useFilters';
import Layout from '@/widgets/Layout/Layout';
import getUserLocale from 'get-user-locale';
import { StyledEngineProvider } from '@mui/material';
import { RegistrationLayout } from '@/widgets/RegistrationLayout/RegistrationLayout';
import { NotificationsProvider } from '@/shared/ui';
import { I18nProvider } from '@/i18n/I18nProvider';
import { DefaultRu } from '@/pages/DefaultRu';
import { DefaultEn } from '@/pages/DefaultEn';
// import Listing from "@/pages/Listing";

// Lazy imports for pages
const Listing = lazy(() => import('@/pages/Listing'));
const EstateDetail = lazy(() => import('@/pages/EstateDetail'));
const OfferCollection = lazy(() => import('@/pages/OfferCollection'));
const UserCollection = lazy(() => import('@/pages/UserCollection'));
const AiListing = lazy(() => import('@/pages/AiListing'));
const Authorization = lazy(() => import('@/pages/Authorization'));
const Login = lazy(() => import('@/pages/Login'));
const SignUp = lazy(() => import('@/pages/SignUp'));
const SignUpEnd = lazy(() => import('@/pages/SignUpEnd'));
const Register = lazy(() => import('@/pages/Register'));
const Profile = lazy(() => import('@/pages/Profile'));
const ResetPassword = lazy(() => import('@/pages/ResetPassword'));
const OfferCollectionV2 = lazy(() => import('@/pages/OfferCollectionV2'));
const Tariffs = lazy(() => import('@/pages/Tariffs'));
const ResetPasswordCode = lazy(() => import('@/pages/ResetPassword/ResetPasswordCode'));
const NewPassword = lazy(() => import('@/pages/ResetPassword/NewPassword'));
const MainMenu = lazy(() => import('@/pages/MainMenu'));

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
                <Suspense fallback={<div />}>
                  <Routes>
                    <Route path="/ru" element={<DefaultRu />} />
                    <Route path="/en" element={<DefaultEn />} />
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
                      <Route path="/user-collection" element={<UserCollection />} />
                      <Route path="/ai-listing" element={<AiListing />} />
                      <Route path="/main_menu" element={<MainMenu />} />
                    </Route>
                    <Route path="/tariffs" element={<Tariffs />} />
                    <Route path="/cl">
                      <Route path=":id" element={<OfferCollectionV2 />} />
                    </Route>
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </I18nProvider>
          </FiltersProvider>
        </NotificationsProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
};

export default App;
