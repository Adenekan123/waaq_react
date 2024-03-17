import React, { useCallback, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { Body, Heading } from "../../components/typography";
import { CustomButton } from "../../components/ui";
import { useLoginUserAccount } from "../../lib/react-query/queriesAndMutations";
import { toast } from "react-toastify";
import { checkAuthUser } from "../../API/auth";
const initialState = {
  email: "",
  password: "",
};

export const SignInForm = ({ close }: { close?: () => void }) => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const update = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const { mutateAsync, isPending, isSuccess, error } = useLoginUserAccount();

  const signInWithCredentials = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await mutateAsync(state);
    },
    [mutateAsync, state]
  );

  useEffect(() => {
    if (isSuccess && checkAuthUser()) {
      toast.success("Login Successfull");
      navigate("/");
    }

    if (error) {
      toast.error(error.message);
    }
  }, [isSuccess, error,navigate]);
  return (
    <div
      className={`p-8 ${
        close ? "pt-32" : ""
      } z-[1500] rounded-md shadow-2xl shadow-orange-500 text-black bg-orange-50 md:w-96  md:before:w-6 md:before:h-4 before:bg-orange-100 before:absolute before:z-10 triangle-clip-path md:absolute md:top-24 md:-left-3 fixed top-0 left-0 w-full h-full md:h-auto `}
    >
      {/* close menu */}
      {close ? (
        <div
          className="absolute top-5 right-4 rounded-full w-12 h-12 bg-white shadow-lg flex justify-center items-center"
          onClick={() => (close ? close() : false)}
        >
          <CgClose size={18} />
        </div>
      ) : null}
      <div className="flex flex-col gap-8">
        <div>
          <Heading
            type={3}
            title="Sign-In to my account"
            styles="text-center"
          />
          <Body
            type={0.5}
            title="Enter your e-mail and password"
            styles="text-center text-slate-500"
          />
        </div>
        <form onSubmit={signInWithCredentials}>
          <input
            type="text"
            name="email"
            className="block bg-orange-200 px-4 py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
            placeholder="Email"
            onChange={update}
          />
          <input
            name="password"
            type="password"
            className="block bg-orange-200 px-4 py-5 mt-4 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
            placeholder="Password"
            onChange={update}
          />
          <div className="mt-4">
            <CustomButton
              title="Login"
              styles="w-full shadow-lg"
              loading={isPending}
              disabled={isPending}
              type="submit"
            />
          </div>
        </form>
        <div className="text-center text-slate-500">
          <p className="text-sm">
            Don&apos;t have an account ?{" "}
            <Link to={"/signup"} className="text-orange-400">
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
  );
};
