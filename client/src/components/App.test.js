import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import App from './App';

it('renders without crashing', async () => {
  const div = document.createElement('div')
  await ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
});

it('renders welcome message', async () => {
  await render(<App />);
  expect(screen.getByText('Greatest Quiz')).toBeInTheDocument();
});