import PasswordInput from "../components/PasswordInput"
import { passwordReqs } from "../utils/passwordReqs"

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center  gap-10 mt-8">
      <h1 className="text-4xl font-bold">Password Component</h1>
      <PasswordInput passwordReqs={passwordReqs} />
    </div>
  )
}

export default Index