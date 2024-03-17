"use client";

import { useCallback, useEffect, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Body, Heading } from "../../components/typography";
import { CustomButton } from "../../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserAccount } from "../../lib/react-query/queriesAndMutations";
import { toast } from "react-toastify";
const initialState = {
  firstname: "",
  lastname: "",
  state: "",
  phone: "",
  email: "",
  address: "",
  password: "",
};
export const SignUpForm = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const update = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setState((previousState) => ({ ...previousState, [name]: value }));
    },
    []
  );

  const { isPending, isSuccess, error, mutateAsync } = useCreateUserAccount();

  const submit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await mutateAsync(state);
    },
    [state, mutateAsync]
  );

  const [show_password, set_show_password] = useState(false);
  const [confirm_pass, set_confirm_pass] = useState("");

  useEffect(() => {
    if (isSuccess) {
      toast.success("Signing you in...");
      navigate("/");
    }

    if (error) {
      toast.error(error.message);
    }
  }, [error, isSuccess, navigate]);
  return (
    <div className="flex items-center justify-around p-6 md:p-0 my-auto">
      <div className="text-white relative z-10 w-5/12 hidden md:block">
        <Heading
          title="Design + Collaboration, all in Mockplus
"
          styles="mb-3"
        />
        <Body title="A virtual center for designers, devs, PMs, and all design parties to perform their duties in unison. At least 200% faster with Mockplus." />
      </div>
      <div className="p-8 rounded-md shadow-2xl shadow-orange-500 text-black bg-orange-50  md:w-3/12 relative z-10">
        <div className="flex flex-col gap-8">
          <div>
            <Heading
              type={3}
              title="Create your account"
              styles="text-center"
            />
            <Body
              type={0.5}
              title="Enter your e-mail and password"
              styles="text-center text-slate-500"
            />
          </div>
          <form onSubmit={submit}>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                className="block bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
                placeholder="First Name"
                name="firstname"
                onChange={update}
              />
              <input
                type="text"
                className="block bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
                placeholder="Last Name"
                name="lastname"
                onChange={update}
              />
            </div>
            <select
              className="block bg-orange-200 p-3 md:px-4 md:py-5 mt-4 w-full text-orange-500 rounded-md outline-orange-400"
              name="state"
              onChange={update}
            >
              <option value="0">State of Residence</option>
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja</option>
              <option value="ogun">Ogun</option>
            </select>
            <input
              type="text"
              className="block mt-4 bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
              placeholder="Address"
              name="address"
              onChange={update}
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="email"
                className="block bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
                placeholder="E-mail"
                name="email"
                onChange={update}
              />
              <input
                type="text"
                className="block bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
                placeholder="Phone"
                name="phone"
                onChange={update}
              />

              <div className="relative">
                <input
                  type={show_password ? "text" : "password"}
                  className="block bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
                  placeholder="Choose password"
                  name="password"
                  onChange={update}
                />
                <span
                  className="absolute right-3 top-2/4 -translate-y-2/4 text-slate-500 cursor-pointer"
                  onClick={() => set_show_password((prev) => !prev)}
                >
                  {!show_password ? (
                    <BsEyeFill size={22} />
                  ) : (
                    <BsEyeSlashFill size={22} />
                  )}
                </span>
              </div>

              <input
                type="password"
                className="block bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400 disabled:opacity-50"
                placeholder="Confirm password"
                disabled={state.password?.length < 3}
                onChange={(e) => set_confirm_pass(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <CustomButton
                type="submit"
                title="Sign Up"
                styles="w-full shadow-lg"
                disabled={
                  isPending ||
                  state.password?.length < 3 ||
                  state.password !== confirm_pass
                }
                loading={isPending}
              />
            </div>
          </form>
          <div className="text-center text-slate-500">
            <p className="text-sm">
              Don&apos;t have an account ?{" "}
              <Link to={"#"} className="text-orange-400">
                Sign Up
              </Link>
            </p>
            <p className="text-sm">
              Forgot password ?{" "}
              <Link to={"#"} className="text-orange-400">
                Recover Password
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
