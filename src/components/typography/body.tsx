import { IBody } from "../../types";

export const Body = ({ title, styles, type, hasEntity }: IBody) => {
  if (hasEntity) {
    if (type === 0.5)
      return (
        <p className={`text-sm md:text-md ${styles}`}>
          &#8358;
          {parseFloat(title).toLocaleString("en", {
            minimumFractionDigits: 2,
          })}{" "}
          /
        </p>
      );
    else
      return (
        <p className={`text-lg md:text-lg ${styles}`}>
          &#8358;
          {parseFloat(title).toLocaleString("en", { minimumFractionDigits: 2 })}
        </p>
      );
  }
  if (type === 0.5)
    return <p className={`text-sm md:text-md ${styles}`}>{title}</p>;
  else if (type === 1)
    return <p className={`text-[13px] ${styles}`}>{title}</p>;
  return <p className={`text-lg md:text-lg ${styles}`}>{title}</p>;
};
