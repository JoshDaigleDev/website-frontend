import Image from "next/image";

import localFont from "next/font/local";

const boldFont = localFont({
  src: "../../public/Roboto-Bold.ttf",
  display: "swap",
});

const italFont = localFont({
  src: '../../public/Roboto-MediumItalic.ttf',
  display: 'swap'
})


interface ExperienceExampleProps {
  company: string;
  title: string;
  dateFrom: string;
  dateTo: string;
  jobDescription: string;
  imagePath: string;
  imageAlt: string;
  websiteLink: string;
  websiteName: string;
  skills: string[];
}

export default function ExperienceExample(props: ExperienceExampleProps) {
  return (
    <div className="grid bg-neutral-900 min-w-full mb-6">
      <div className={`${boldFont.className} flex justify-between space-x-5  bg-neutral-800  p-2 text-lg lg:text-xl`}>
        <span>{props.title} @ {props.company}</span>
        <span className={`${italFont.className} text-sm lg:text-base items-center`}>{props.dateFrom} - {props.dateTo}</span>
      </div>
      <div className="grid grid-cols-5">
        <div className="flex items-center p-2 justify-center ">
          <Image
            width={100}
            height={100}
            src={props.imagePath}
            alt={props.imageAlt}
          />
        </div>
        <div className="col-span-4 grid">
          <div className="flex p-1 align-center items-center text-xs lg:text-sm">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span className="pr-2">Winnipeg, MB (Remote)</span>
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
            <a className="pr-2 underline underline-offset-1" href={ props.websiteLink }>{ props.websiteName }</a>
          </div>
          <div className="pb-3 pl-2 pt-2">
            <p className="text-sm lg:text-base">
              {props.jobDescription}
            </p>
          </div>
        </div>
      </div>
      <div className="inline-block p-2 truncate overflow-hidden">
            {props.skills.map((skill, index) => (
              <span key={index} className="p-1 m-1 text-xs lg:text-base bg-yellow-600">
                {skill}
              </span>
            ))}
          </div>
    </div>
  );
}

/*
    <div className="bg-neutral-900 m-3">
      <div
        className={`${boldFont.className} flex justify-between space-x-5 bg-neutral-800 p-2 text-md`}
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
            <span key={index} className="p-1 m-1 whitespace-nowrap bg-yellow-600">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
    */