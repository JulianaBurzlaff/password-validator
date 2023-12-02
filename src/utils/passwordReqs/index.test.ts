import { hasNumber, hasSpecialChar, hasUppercaseLetter, hasNoConsecutiveLetters } from ".";
import { describe, expect, test } from '@jest/globals';


describe('Validation functions', () => {
  const correctPassword = "1Br@"
  const incorrectPassword = "aaab"

  it('should pass number validation', () => {
    expect(hasNumber(correctPassword)).toBe(true);
    expect(hasNumber(incorrectPassword)).toBe(false);
  });

  it('should pass special char validation', () => {
    expect(hasSpecialChar(correctPassword)).toBe(true);
    expect(hasSpecialChar(incorrectPassword)).toBe(false);
  });

  it('should pass uppercase letter validation', () => {
    expect(hasUppercaseLetter(correctPassword)).toBe(true);
    expect(hasUppercaseLetter(incorrectPassword)).toBe(false);
  });

  it('should pass no consecutive letters validation', () => {
    expect(hasNoConsecutiveLetters(correctPassword)).toBe(true);
    expect(hasNoConsecutiveLetters(incorrectPassword)).toBe(false);
  });
});