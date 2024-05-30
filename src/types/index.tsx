import { ReactNode } from "react";
export enum PartnerExperience {
  "no_experience" = "i have no experiance",
  "zero_to_two" = "0 to 2 years",
  "three_to_five" = "3 to 5 years",
  "five above" = "more than 5 yeares",
}
export enum PartnerHelpType {
  "start_academy" = "Looking to start your own Robotics and Coding",
  "shool_sales" = "Looking to get into school sales",
}

export interface ICustomButton {
  title: ReactNode;
  styles?: string;
  gradient?: string;
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type?: "submit" | "button" | "reset";
  whenClicked?: () => void;
}

export interface IContainer {
  children: ReactNode;
  styles?: string;
}
export interface IFrameImage {
  image: string;
  styles?: string;
}
export interface IStack {
  direction?: string;
  gap?: string;
  children: ReactNode;
  styles?: string;
}
export interface IHeading {
  title: string;
  styles?: string;
  type?: number;
}
export interface IBody extends IHeading {
  hasEntity?: boolean;
}
export interface IHeroWall {
  children: ReactNode;
  styles?: string;
  color?: string;
  gradient?: string;
}
export interface IHeroSub {
  page: string;
  color?: string;
  gradient?: string;
  type?: string;
}
export interface IProductPrice {
  curr: number;
  prev: number;
  discount: number;
}
export interface IProductRating {
  rating: number;
  totalreviews: number;
}
export interface IProductCard {
  _id?: string;
  images: { buffer: Buffer; contentType: string; _id: string }[];
  tag: string;
  age_range: string;
  name: string;
  ratings: IProductRating;
  price: IProductPrice;
}

export interface INav {
  title: string;
  url: string;
}

export interface INavigation extends INav {
  list?: INav[];
  close?: () => void;
}

export interface IPartnershipForm {
  name: string;
  email: string;
  phone: string;
  city_state_residence: string;
  experience: PartnerExperience | "please select";
  help_type: PartnerHelpType | null;
  invest_amount: string;
  organization: string;
  note: string;
}

export interface IProductFilter {
  categories: string[];
  skills: string[];
  ages: string[];
}

export interface ICart {
  visible: boolean;
  items: ICartItem[];
  totalQty: number;
  totalPrice: number;
  type: "online" | "offline";
}
export interface ICartItem {
  id: number;
  _id?: string;
  productid?: string;
  quantity: number;
  product: IProduct;
}
export interface IVisitor {
  name: string;
  phone: string;
  email: string;
  address: string;
  state: string;
}
export interface IVisitorOrder extends IVisitor {
  items: IOrderItem[];
}
export interface IPartner {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}
export interface IOrderItem {
  productid: IProduct;
  quantity: number;
  totalAmount?: number;
}
export interface IMyOrderItem {
  _id: string;
  orders: IOrderItem[];
  status: string;
  totalamount: number;
  createdAt: string;
  updatedAt: string;
  product: IProductCard;
}

export interface IUser {
  firstname: string;
  lastname: string;
  state?: string;
  phone: string;
  email: string;
  address?: string;
  password?: string;
}

export interface IUSerProfile {
  id?: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: number;
}

export interface IUserAuth {
  accesToken: string;
  refreshToken: string;
  user: IUSerProfile;
}

export interface IProduct {
  _id?: string;
  categoryid?: string;
  skillid?: string;
  name: string;
  description: string[];
  tag: string;
  agerange: string;
  images: string[];
  price: { curr: number; prev: number; discount: number };
  ratings: { rating: number; totalreviews: number };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IFilterCriteria {
  _id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TUserState = "online" | "offline";

export interface IorderItems {
  _id?: string;
  orders: IOrderItem[];
  totalamount: number;
  status: string;
}

export type IOrderItemsState = "pending" | "successfull" | undefined;

export interface INotification{
  _id?: string;
  userId: string;
  message: string;
  createdAt?: string;
  read?: boolean;
}
