import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.sass';
import LandingPage from './components/pages/LandingPage/LandingPage';
import SigninPage from './components/pages/SigninPage/SigninPage';
import SignupPage from './components/pages/SignupPage/SignupPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import EditProfilePage from './components/pages/EditProfilePage/EditProfilePage';
import MoviesPage from './components/pages/MoviesPage/MoviesPage';
import SavedMoviesPage from './components/pages/SavedMoviesPage/SavedMoviesPage';
import NoMatchPage from './components/pages/NoMatchPage/NoMatchPage';
import AuthRoute from './components/layouts/AuthRoute/AuthRoute';
import store from './store';
import Layout from './components/layouts/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<AuthRoute><ProfilePage /></AuthRoute>} />
            <Route path="/edit-profile" element={<AuthRoute><EditProfilePage /></AuthRoute>} />
            <Route path="/movies" element={<AuthRoute><MoviesPage /></AuthRoute>} />
            <Route path="/saved-movies" element={<AuthRoute><SavedMoviesPage /></AuthRoute>} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
