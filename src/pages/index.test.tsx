import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import Index from './index';

describe('Password Component page', () => {
  it('should have a title and the PasswordInput component', () => {
    render(<Index />);
    const title = screen.getByText("Password Component")
    const passwordInputComponent = screen.getByTestId("password-input");

    expect(title).toBeInTheDocument();
    expect(passwordInputComponent).toBeInTheDocument();
  });

});