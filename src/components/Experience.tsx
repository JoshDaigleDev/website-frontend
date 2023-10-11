import Image from "next/image"
import localFont from 'next/font/local'
import workExperienceData from '../../public/WorkExperience.json'
import ExperienceExample from "./ExperienceExample"

export default function Experience() {
    return (
        <section className="grid max-w-3xl gap-4 ">
            <div className="flex justify-center p-3 text-4xl">
                <h1>
                    Professional Experience
                </h1>
            </div>
            {workExperienceData.map((experience, index) => (
                    <ExperienceExample key={index} {...experience} />
                ))}
        </section>  
    )
}