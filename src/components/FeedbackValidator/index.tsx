import { CloseIcon } from "../CloseIcon";
import { CheckIcon } from "../CheckIcon";

export type FeedbackValidatorProps = {
  valid: boolean,
  requirement: string
}

const FeedbackValidator = ({ valid, requirement }: FeedbackValidatorProps) => {
  const feedbackColor = valid ? "bg-lime-600" : "bg-red-600"

  return (
    <div className="flex items-center gap-4" >
      <div data-testid="icon" className={`rounded-[50%]  ${feedbackColor} p-2 `}>
        {valid ? <CheckIcon /> : <CloseIcon />}
      </div>
      <span className="text-xl">{requirement}</span>
    </div>
  )
}

export default FeedbackValidator