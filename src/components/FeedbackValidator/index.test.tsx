import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react';
import FeedbackValidator, { FeedbackValidatorProps } from './index';

describe('FeedbackValidator component', () => {
  const defaultProps = {
    valid: true,
    requirement: "Has a number 0-9"
  }

  const renderComponent = (props?: Partial<FeedbackValidatorProps>) => {
    return render(<FeedbackValidator {...defaultProps} {...props} />);
  }

  it('Has an icon and a text', () => {
    renderComponent();
    const icon = screen.getByTestId("icon");
    const requirement = screen.getByText(defaultProps.requirement);

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("bg-lime-600")
    expect(requirement).toBeInTheDocument();
  });

  it('should have a invalid icon ', () => {
    renderComponent({ valid: false })
    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("bg-red-600")
  });
});