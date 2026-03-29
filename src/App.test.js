import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Dhairya Rana/i);
  expect(nameElement).toBeInTheDocument();
});