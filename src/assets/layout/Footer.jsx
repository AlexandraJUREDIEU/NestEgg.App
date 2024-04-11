import React from 'react';
import { NavLink } from 'react-router-dom'; 

function Footer({ links }) {
  return (
    <footer>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to}>
                <img src={link.image} alt={link.text} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}