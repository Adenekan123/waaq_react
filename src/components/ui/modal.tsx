import React, { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Modal = ({
  children,
  title,
  matcher,
  onclose: actionOnClose,
}: {
  children: ReactNode;
  title?: string;
  matcher: string;
  onclose?: () => void;
  closeIcon?: boolean;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    if (actionOnClose) actionOnClose();
    navigate(-1);
  };

  React.useEffect(() => {
    if (location.search.includes(matcher)) setOpen(true);
    else setOpen(false);
  }, [matcher, location.search]);

  if (!location.search.includes(matcher)) return null;
  return (
    <div
      id="default-modal"
      className={`${
        !open ? "hidden" : ""
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen bg-black/80 `}
    >
      <div className="relative p-4 pt-12 w-full h-full max-h-full flex justify-center items-start">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow basis-full md:basis-6/12 ">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <button
              onClick={handleClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
