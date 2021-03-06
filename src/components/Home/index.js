import React from 'react'

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

const condition = authUser => authUser != null;

export default withAuthorization(condition)(HomePage);
