import { AxiosError } from "axios";
import AxiosInstance from "../lib/axios/config";
import { IUSerProfile } from "../types";
import { updateAuthUser } from "./auth";

export const updateUserProfile = async (user: IUSerProfile) => {
  const { name, ...rest } = user;
  const [firstname, lastname] = name.split(" ");
  try {
    const newProfile = await AxiosInstance.patch<{
      message: string;
      profile: IUSerProfile;
    }>(`${import.meta.env.VITE_API_PARTNER_BASE_URL}/profile/user`, {
      firstname,
      lastname,
      ...rest,
    }).then((res) => res.data);
    if (newProfile.profile) return Boolean(updateAuthUser(newProfile.profile));
    else throw Error;
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};
