import { BsFillCartXFill } from "react-icons/bs";
import { Heading } from "../../../../components/typography";

export const EmptyOrder = () => {
  return (
    <div className="flex flex-col gap-6 h-full items-center justify-center w-full py-12">
      <div className="bg-green-50 border-green-300 text-red-400 mx-auto rounded-full w-48 h-48 flex items-center justify-center p-8">
        <BsFillCartXFill size={80} />
      </div>
      <Heading type={2} title="Empty Order" styles="text-red-500" />
    </div>
  );
};
