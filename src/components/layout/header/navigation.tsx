import { useState } from "react";
import { PiPlus } from "react-icons/pi";
import { INavigation } from "../../../types";
import { Link } from "react-router-dom";
import { Stack } from "../../ui";

export const Navigation = ({ title, url, list, close }: INavigation) => {
  const [state, setState] = useState(false);

  if (!list)
    return (
      <Link to={url} onClick={close}>
        {title}
      </Link>
    );
  return (
    <div>
      <Link to={state ? url : "#"} onClick={() => setState((prev) => !prev)}>
        <span className="flex justify-between items-center capitalize">
          <span>{title}</span>
          <PiPlus />
        </span>
      </Link>
      <Stack
        direction="flex-col"
        gap="gap-5"
        styles={`pl-3 ${
          state ? "max-h-96" : "max-h-0"
        } overflow-hidden transition-all duration-500 ease-in-out text-slate-500 relative top-4`}
      >
        {list.map((item, i) => (
          <Navigation key={item.url + i + "suburl"} {...item} close={close} />
        ))}
      </Stack>
    </div>
  );
};
