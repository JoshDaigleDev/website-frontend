import Image from "next/image";

import localFont from "next/font/local";

const boldFont = localFont({
  src: "../../public/Roboto-Bold.ttf",
  display: "swap",
});

interface ExperienceExampleProps {
  company: string;
  title: string;
  dateFrom: string;
  dateTo: string;
  jobDescription: string;
  imagePath: string;
  imageAlt: string;
  skills: string[];
}

export default function ExperienceExample(props: ExperienceExampleProps) {
  return (
    <div className="rounded bg-neutral-900 m-3">
      <div
        className={`${boldFont.className} flex justify-between space-x-5 bg-neutral-800 rounded-md p-2 text-md`}
      >
        <span>{props.title} @ {props.company}</span>
        <span>{props.dateFrom} - {props.dateTo}</span>
      </div>
      <div className="grid grid-cols-4 p-2 text-xs">
        <div className="flex justify-center">
          <Image
            width={100}
            height={100}
            src={props.imagePath}
            alt={props.imageAlt}
          />
        </div>
        <div className="col-span-3 inline-block">
          <p className="my-3 mx-3">
            {props.jobDescription}
          </p>
          {props.skills.map((skill, index) => (
            <span key={index} className="p-1 m-1 whitespace-nowrap bg-yellow-600 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
