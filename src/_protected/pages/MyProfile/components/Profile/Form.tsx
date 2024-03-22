"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUSerProfile } from "../../../../../types";
import { toast } from "react-toastify";
import { useUserSession } from "../../../../../contexts/user";
import { useUpdateUserProfile } from "../../../../../lib/react-query/queriesAndMutations";
const initial_state = {
  name: "",
  phone: "",
  email: "",
  role: "",
  status: 0,
};
export const Form = () => {
  const navigate = useNavigate();
  const { session, updateSession } = useUserSession();
  const [details, setDetails] = useState<IUSerProfile>(
    session?.user || initial_state
  );

  const { mutateAsync, isPending, isSuccess } = useUpdateUserProfile();

  const update = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((previousState) => ({ ...previousState, [name]: value }));
  }, []);

  const submit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await mutateAsync(details);
    },
    [details, mutateAsync]
  );

  useEffect(() => {
    if (isSuccess) {
      updateSession();
      toast.success("Profile updated successfully");
      navigate("/settings");
    }
  }, [isSuccess, navigate, updateSession]);
  return (
    <form onSubmit={submit}>
      <div className="px-6 py-6 flex flex-col gap-6">
        <div>
          <label className="mb-2 block" htmlFor="firsname">
            First Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={details?.name}
            onChange={update}
            placeholder="Enter first name"
            className="block bg-slate-200 px-4 py-5 w-full  rounded-md outline-orange-400"
          />
        </div>

        <div>
          <label className="mb-2 block" htmlFor="email">
            Email ID
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={details?.email}
            readOnly
            placeholder="Enter Last name"
            className="block bg-slate-200 px-4 py-5 w-full  rounded-md outline-orange-400"
          />
        </div>
        <div>
          <label className="mb-2 block" htmlFor="email">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={details?.phone}
            readOnly
            placeholder="Enter Last name"
            className="block bg-slate-200 px-4 py-5 w-full  rounded-md outline-orange-400"
          />
        </div>
        <div className="text-center flex justify-center">
          <button
            disabled={isPending}
            type="submit"
            className={`text-sm md:text-lg bg-green-500 text-green-100 px-4 py-1 md:py-2 rounded-full font-semibold capitalize md:w-56 mx-auto ${
              isPending ? " opacity-75" : ""
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
