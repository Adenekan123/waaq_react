import { Body, Heading } from "../../../../../components/typography";

export const Card = ({ image,heading, title }: { image: string; heading:string; title: string }) => {
  return (
    <div className="card rounded-2xl overflow-hidden shadow-md">
      <img
        src={image}
        alt="robotics"
        className="h-36 md:h-48 w-full object-cover"
      />
      <div className="p-4 md:p-6 bg-white">
        <Heading type={4} title={heading} />
        <Body type={0.5} title={title} styles="text-grey-500" />
      </div>
    </div>
  );
};

