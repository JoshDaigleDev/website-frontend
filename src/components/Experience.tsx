import Image from "next/image"
import localFont from 'next/font/local'
import workExperienceData from '../../public/WorkExperience.json'
import ExperienceExample from "./ExperienceExample"

export default function Experience() {
    return (
        <section className="grid max-w-3xl">
            <div className="flex justify-center p-4 text-3xl">
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