import { render } from '@testing-library/react';
import App from './App';

// Smoke Test
test('renders App component witout crashing', () => {
  render(<App />);
});

// Snapshot Test
test('render matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
