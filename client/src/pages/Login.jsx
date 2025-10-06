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
    <div className="flex min-h-screen items-center justify-center font-quantico">
      <div
        className="
          rounded-4xl border-2 border-border/50 bg-panel p-3 text-center
          shadow-lg shadow-border/25 w-[320px]
        "
      >
        <h1 className="mb-4 text-lg font-bold text-title">
          COOPER CORP RANGER ZTK~
        </h1>
        <p className="mb-6 text-md text-text-buttons">LOAD YOUR PILOT PROFILE</p>
        <form onSubmit={handleSubmit(onSubmit)} className=''>
          <div className='space-y-2 text-general-text text-left border-2 border-border/50 shadow-md shadow-text-buttons/25 p-2'>
            <div className='md:flex'>
              <label className="block text-sm font-medium ">
                Digital Communication:
              </label>
              <input
                type="email"
                {...register("DigitalCommunication")}
                className="w-full px-3 py-2 mt-1 font-share-tech-mono rounded-md bg-inputBg text-dynamic-text focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
              {errors.DigitalCommunication && (
                <p className="text-xs text-red-400 m-1">
                  {errors.DigitalCommunication.message}
                </p>
              )}
            </div>
            <div className='md:flex'>
              <label className="block text-sm font-medium">
                Password:
              </label>
              <input
                type="password"
                {...register("Password")}
                className="w-full px-3 py-2 mt-1 font-share-tech-mono rounded-md bg-inputBg text-dynamic-text focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
              {errors.Password && (
                <p className="text-xs text-red-400 m-1">
                  {errors.Password.message}
                </p>
              )}
            </div>
          </div>
          <p className=" mt-5 font-bold text-general-text">GO TO MAIN PANEL</p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              mt-6  rounded bg-primary py-3 font-semibold text-general-text
              hover:bg-button-1 focus:outline-none focus:ring-2 focus:ring-skyblue
            "
          >
            <figure className="flex justify-center">
              <img className="h-10 w-10" src="/auth-fingerprint-svgrepo-com.svg" alt="Fingerprint" />
            </figure>
            {isSubmitting ? "Loading main panel..." : ""}
          </button>
        </form>
        <p className="mt-3 text-general-text text-start pl-2"><Link to="/register">GO TO REGISTER</Link></p>
      </div>
    </div>

  )
}