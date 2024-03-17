import { IHeading } from "../../types";

export const Heading = ({ title, styles, type }: IHeading) => {
  if (type === 1)
    return (
      <h2
        className={`text-5xl md:text-6xl xl:text-9xl leading-tight  font-extrabold ${styles}`}
      >
        {title}
      </h2>
    );
  if (type === 2)
    return (
      <h2 className={`text-xl md:text-[1.8rem] font-bold ${styles}`}>
        {title}
      </h2>
    );
  if (type === 3)
    return (
      <h2 className={`text-xl md:text-2xl font-bold ${styles}`}>{title}</h2>
    );
  if (type === 4)
    return (
      <h2 className={`text-md md:text-xl font-bold ${styles}`}>{title}</h2>
    );

  return (
    <h2 className={` text-3xl md:text-4xl font-bold ${styles}`}>{title}</h2>
  );
};
