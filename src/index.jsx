import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.sass';
import LandingPage from './components/pages/LandingPage/LandingPage';
import SigninPage from './components/pages/SigninPage/SigninPage';
import SignupPage from './components/pages/SignupPage/SignupPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import MoviesPage from './components/pages/MoviesPage/MoviesPage';
import SavedMoviesPage from './components/pages/SavedMoviesPage/SavedMoviesPage';
import NoMatchPage from './components/pages/NoMatchPage/NoMatchPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/saved-movies" element={<SavedMoviesPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
