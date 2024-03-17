"use client";
import { checkAuthUser } from "../../../API/auth";
import { SignInForm } from "../../../__auth/forms/signin";
import { CustomButton } from "../../ui";
import { ProfileDropdown } from "./profile-dropdown";

export const UserGateway = ({
  togglesignin,
  signin,
}: {
  togglesignin: (v: boolean) => void;
  signin: boolean;
  mobile?: boolean;
}) => {
  const user = checkAuthUser();

  return (
    <>
      {user?.user ? (
        <ProfileDropdown />
      ) : (
        <>
          <CustomButton
            whenClicked={() => togglesignin(!signin)}
            title="Sign In"
          />
          {signin ? <SignInForm close={() => togglesignin(false)} /> : null}
        </>
      )}
    </>
  );
};
