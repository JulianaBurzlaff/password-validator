import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import PasswordInput from './index';
import { passwordReqs } from "../../utils/passwordReqs"

describe('PasswordInput component', () => {

  const defaultProps = {
    passwordReqs: passwordReqs,
  }

  it('should have 1 input and at least 1 FeedbackValidator', () => {
    render(<PasswordInput {...defaultProps} />)
    const input = screen.getByTestId("input")
    const feedbackValidatorText = screen.getByText(passwordReqs[0].text);

    expect(input).toBeInTheDocument();
    expect(feedbackValidatorText).toBeInTheDocument();
  });

});