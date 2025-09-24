import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { registerRequest } from "../api/authorization.js";

const schema = yup.object({
  callSign: yup.string().required("Pilot Call Sign is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Digital Communication is required"),
  password: yup
    .string()
    .min(8, "Min 8 characters")
    .required("Password is required"),
  mission: yup.string().required("Mission Designation is required"),
  pilotId: yup.string().required("Pilot ID is required"),
  agency: yup.string().required("Space Agency is required"),
});

export const Registration= ()=> {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await registerRequest(data);
      navigate("/session");
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div
        className="
          w-[320px] sm:w-[400px] md:w-[500px] 
          rounded-xl border border-primary bg-panel p-6 text-center
          shadow-lg sm:min-h-[568px] md:min-h-[700px]
        "
      >
        <h1 className="mb-4 text-2xl font-bold text-accent">
          COOPER CORP RANGER ZTK~
        </h1>
        <p className="mb-6 text-lg text-warning">AUTHENTICATION REQUIRED</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          {/* Pilot Call Sign */}
          <div>
            <label className="block text-sm font-medium text-label">
              Pilot Call Sign
            </label>
            <input
              type="text"
              {...register("callSign")}
              className="mt-1 w-full rounded bg-input p-2 text-text placeholder-gray-500"
              placeholder="SERENA"
            />
            {errors.callSign && (
              <p className="text-xs text-error">{errors.callSign.message}</p>
            )}
          </div>

          {/* Digital Communication */}
          <div>
            <label className="block text-sm font-medium text-label">
              Digital Communication
            </label>
            <input
              type="email"
              {...register("email")}
              className="mt-1 w-full rounded bg-input p-2 text-text placeholder-gray-500"
              placeholder="JohnDoe@nasa.org"
            />
            {errors.email && (
              <p className="text-xs text-error">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-label">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="mt-1 w-full rounded bg-input p-2 text-text placeholder-gray-500"
              placeholder="********"
            />
            {errors.password && (
              <p className="text-xs text-error">{errors.password.message}</p>
            )}
          </div>

          {/* Mission Designation */}
          <div>
            <label className="block text-sm font-medium text-label">
              Mission Designation
            </label>
            <input
              type="text"
              {...register("mission")}
              className="mt-1 w-full rounded bg-input p-2 text-text placeholder-gray-500"
              placeholder="Lazarus"
            />
            {errors.mission && (
              <p className="text-xs text-error">{errors.mission.message}</p>
            )}
          </div>

          {/* Pilot ID */}
          <div>
            <label className="block text-sm font-medium text-label">
              Pilot ID
            </label>
            <input
              type="text"
              {...register("pilotId")}
              className="mt-1 w-full rounded bg-input p-2 text-text placeholder-gray-500"
              placeholder="0922"
            />
            {errors.pilotId && (
              <p className="text-xs text-error">{errors.pilotId.message}</p>
            )}
          </div>

          {/* Space Agency */}
          <div>
            <label className="block text-sm font-medium text-label">
              Space Agency
            </label>
            <input
              type="text"
              {...register("agency")}
              className="mt-1 w-full rounded bg-input p-2 text-text placeholder-gray-500"
              placeholder="ISSP"
            />
            {errors.agency && (
              <p className="text-xs text-error">{errors.agency.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              mt-6 w-full rounded bg-primary py-3 font-semibold text-buttonText
              hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-accent
            "
          >
            {isSubmitting ? "Processing..." : "INITIATE PROTOCOL"}
          </button>
        </form>
        <p className="mt-3">Did you already are registered? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}
