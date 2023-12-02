const requirementText = {
  HAS_NUMBER: "Has a number 0-9",
  HAS_SPECIAL_CHAR: "Has a special char !@#$%ˆ&*",
  HAS_UPPERCASE_LETTER: "Has uppercase letter",
  HAS_NO_CONSECUTIVE_LETTERS: "Has no consecutive letters"
}

export const hasNumber = (password: string) => /\d/.test(password)

export const hasSpecialChar = (password: string) => /[!@#$%^&*]/.test(password);

export const hasUppercaseLetter = (password: string) => /[A-Z]/.test(password)

export const hasNoConsecutiveLetters = (password: string) => {
  const passwordLetters = password.replace(/[^a-zA-Z]+/g, '-').toUpperCase();

  for (let i = 0; i < passwordLetters.length - 1; i++) {
    if ((passwordLetters.charCodeAt(i) + 1) === passwordLetters.charCodeAt(i + 1)) {
      return false;
    }
  }
  return true;
}

export const passwordReqs = [
  { text: requirementText.HAS_NUMBER, isValid: hasNumber },
  { text: requirementText.HAS_SPECIAL_CHAR, isValid: hasSpecialChar },
  { text: requirementText.HAS_UPPERCASE_LETTER, isValid: hasUppercaseLetter },
  { text: requirementText.HAS_NO_CONSECUTIVE_LETTERS, isValid: hasNoConsecutiveLetters }
]