import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginRequest } from "../api/authorization.js";
import { useAuth } from "../context/AuthContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  DigitalCommunication: yup
    .string()
    .email("Enter a valid email")
    .required("Digital communication is required"),
  Password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
});

export const Login = () => {

  const { setPilotAstronaut } = useAuth()

  const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = async (data) => {

    const { DigitalCommunication, Password } = data

    try {
      const res = await loginRequest({ DigitalCommunication, Password })
      setPilotAstronaut(res.data)
      navigate("/session")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div
        className="
          w-[320px] sm:w-[400px] md:w-[500px] 
          rounded-4xl border border-border bg-panel p-6 text-center
          shadow-lg shadow-border sm:min-h-[568px] md:min-h-[700px]
        "
      >
        <h1 className="mb-4 text-2xl font-bold text-title">
          COOPER CORP RANGER ZTK~
        </h1>
        <p className="mb-6 text-lg text-text-buttons">LOAD YOUR PILOT PROFILE</p>
        <form onSubmit={handleSubmit(onSubmit)} className="pace-y-4 text-left border border-border shadow-md shadow-border p-2">
          <div>
            <label className="block text-sm font-medium text-general-text">
              Digital Communication (Email)
            </label>
            <input
              type="email"
              {...register("DigitalCommunication")}
              className="w-full px-3 py-2 mt-1 rounded-md bg-inputBg text-dynamic-text focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
            {errors.DigitalCommunication && (
              <p className="text-xs text-red-400 m-1">
                {errors.DigitalCommunication.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-general-text">
              Password
            </label>
            <input
              type="password"
              {...register("Password")}
              className="w-full px-3 py-2 mt-1 rounded-md bg-inputBg text-dynamic-text focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
            {errors.Password && (
              <p className="text-xs text-red-400 m-1">
                {errors.Password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              mt-6 w-full rounded bg-primary py-3 font-semibold text-general-text
              hover:bg-button-1 focus:outline-none focus:ring-2 focus:ring-skyblue
            "
          >
            <p className="mb-6 text-lg text-warning">GO TO MAIN PANEL</p>
            {isSubmitting ? "Loading main panel..." : ""}
          </button>
        </form>
        <p className="mt-3 text-general-text"><Link to="/register">REGISTER</Link></p>
      </div>
    </div>

  )
}