import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio home page', () => {
  render(<App />);
  expect(screen.getByText(/oumorou zibo/i)).toBeInTheDocument();
});
