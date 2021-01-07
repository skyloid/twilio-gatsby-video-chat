import React from 'react';
import { Link } from 'gatsby';

import './layout.css';

const Layout = ({ children }) => (
  <>
    <header>
      <Link to="/">Self-Analytica</Link>
    </header>
    <main>{children}</main>
  </>
);

export default Layout;
