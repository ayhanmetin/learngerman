import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import Profile from './Profile';
import Theme2 from './Theme2';
import { NavLink } from 'react-router-dom';
import { BookmarkedIcon, HomeIcon, MixIcon } from './IconBox';

export default function Nav() {
  return (
    <>
      <nav
        className='d-flex navLink justify-content-between align-items-center rounded-bottom gap-1 px-3'
        style={{ backgroundColor: '#DA513D' }}
      >
        <NavLink to='/profile' className='profile-link' aria-label='Profile'>
          <Profile />
        </NavLink>
        <NavLink to='/home' className='text-light' aria-label='Home'>
          <HomeIcon />
        </NavLink>
        <NavLink to='/favorites' className='text-light' aria-label='Favorites'>
          <BookmarkedIcon />
        </NavLink>
        <Theme2 />
      </nav>

      <div className='ms-0 ps-0 mb-0 pb-0'>
        <div className='learnGerman mt-2 fw-light text-body-emphasis'>
          Deutsch lernen für TestDaF, Goethe-Institut und TELC-Zertifizierung
        </div>

        <div className='d-flex altNav align-items-center justify-content-center p-0 mt-5 mb-0'>
          <nav className='d-flex justify-content-center align-items-center gap-3'>
            <NavLink
              to='/advanced'
              aria-label='Explore Advanced German Words'
              className='altNav2'
            >
              #advanced
            </NavLink>
            <NavLink
              to='/bureaucracy'
              aria-label='Understanding Bureaucracy in Germany'
              className='altNav2'
            >
              #bureaucracy
            </NavLink>
            <NavLink
              to='/living'
              aria-label='Living in Germany'
              className='altNav2'
            >
              #living
            </NavLink>
            <NavLink
              to='/business'
              aria-label='Business Related Words'
              className='altNav2'
            >
              #business
            </NavLink>
            <NavLink
              to='/mix'
              aria-label='Explore Mixed German Words'
              className='altNav2'
            >
              #mixed
            </NavLink>
          </nav>
        </div>
      </div>
      <div className='border-bottom border-success p-2 border-opacity-25'></div>
    </>
  );
}
