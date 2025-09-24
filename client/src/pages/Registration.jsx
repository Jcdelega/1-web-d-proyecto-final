import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { registerRequest } from "../api/authorization.js";

const schema = yup.object({
  PilotCallSign: yup.string().required("Pilot Call Sign is required"),
  DigitalCommunication: yup
    .string()
    .email("Invalid DigitalCommunication")
    .required("Digital Communication is required"),
  Password: yup
    .string()
    .min(8, "Min 8 characters")
    .required("Password is required"),
  MissionDesignation: yup.string().required("Mission Designation is required"),
  PilotId: yup.string().required("Pilot ID is required"),
  SpaceAgency: yup.string().required("Space Agency is required"),
});

export const Registration = () => {
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
      console.error(`Error while trying to register data or navigating to session${err}`);
      alert("Error submitting form");
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
        <p className="mb-6 text-lg text-text-buttons">AUTHENTICATION REQUIRED</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left border border-border shadow-md shadow-border p-2">
          <div className="">
            <label className="block text-sm font-medium text-label text-general-text">
              Pilot Call Sign
            </label>
            <input
              type="text"
              {...register("PilotCallSign")}
              className="w-full rounded bg-input text-dynamic-text placeholder-gray-500"
              placeholder="SERENA"
            />
            {errors.PilotCallSign && (
              <p className="text-xs text-red-400">{errors.PilotCallSign.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-label text-general-text">
              Digital Communication
            </label>
            <input
              type="email"
              {...register("DigitalCommunication")}
              className="w-full rounded bg-input p-2 text-dynamic-text placeholder-gray-500"
              placeholder="JohnDoe@nasa.org"
            />
            {errors.DigitalCommunication && (
              <p className="text-xs text-red-400">{errors.DigitalCommunication.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-label text-general-text">
              Password
            </label>
            <input
              type="password"
              {...register("Password")}
              className="w-full rounded bg-input p-2 text-dynamic-text placeholder-gray-500"
              placeholder="********"
            />
            {errors.Password && (
              <p className="text-xs text-red-400">{errors.Password.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-label text-general-text">
              Mission Designation
            </label>
            <input
              type="text"
              {...register("MissionDesignation")}
              className="w-full rounded bg-input p-2 text-dynamic-text placeholder-gray-500"
              placeholder="Lazarus"
            />
            {errors.MissionDesignation && (
              <p className="text-xs text-red-400">{errors.MissionDesignation.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-label text-general-text">
              Pilot ID
            </label>
            <input
              type="text"
              {...register("PilotId")}
              className="w-full rounded bg-input p-2 text-dynamic-text placeholder-gray-500"
              placeholder="0922"
            />
            {errors.PilotId && (
              <p className="text-xs text-red-400">{errors.PilotId.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-label text-general-text">
              Space Agency
            </label>
            <input
              type="text"
              {...register("SpaceAgency")}
              className="w-full rounded bg-input p-2 text-dynamic-text placeholder-gray-500"
              placeholder="ISSP"
            />
            {errors.SpaceAgency && (
              <p className="text-xs text-red-400">{errors.SpaceAgency.message}</p>
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
          {isSubmitting ? "Processing..." : "INITIATE PROTOCOL"}
        </button>
        </form>
          <figure className="flex items-center justify-center">
            <img className="m-2" src="/public/Frame 28.svg" alt="Fingerprint" />
          </figure>
        <p className="mt-3 text-general-text"><Link to="/login">LOGIN</Link></p>
      </div>
    </div>
  );
}
