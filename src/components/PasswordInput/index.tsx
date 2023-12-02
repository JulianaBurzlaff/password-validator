import React, { useState } from "react"
import FeedbackValidator from "../FeedbackValidator"

type PasswordReq = {
  text: string;
  isValid: (value: string) => boolean;
}
export type PasswordInputProps = {
  passwordReqs: PasswordReq[],
}

const PasswordInput = ({ passwordReqs }: PasswordInputProps) => {
  const [password, setPassword] = useState("");

  return (
    <div data-testid="password-input" className="flex gap-6 items-center" >
      <input data-testid="input" className="h-10 w-48 border border-black" onChange={(e) => setPassword(e.target.value)} />
      <div className="flex flex-col gap-2">
        {passwordReqs.map((req) => (
          <FeedbackValidator key={req.text} valid={req.isValid(password)} requirement={req.text} />
        ))}
      </div>

    </div>
  )
}

export default PasswordInput