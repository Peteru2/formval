import { render, screen } from '@testing-library/react';
import LandingPage from "./Landing"

test('renders LandingPage', () => {
    render(<MyComponent />);
    // const element = screen.getByText('Hello, World!');
    // expect(element).toBeInTheDocument();
  });