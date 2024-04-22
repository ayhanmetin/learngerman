import React from 'react';
import { NavLink } from 'react-router-dom';

function Twitter() {
  return (
    <NavLink
      className='me-1 text-primary-emphasis text-dark-emphasis align-items-center d-flex'
      to=''
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='19'
        height='19'
        fill='currentColor'
        className='bi bi-twitter-x rounded text-light'
        viewBox='0 0 16 16'
      >
        <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z' />
      </svg>
    </NavLink>
  );
}

export default Twitter;
