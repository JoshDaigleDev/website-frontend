import workExperienceData from '../../public/WorkExperience.json'
import ExperienceExample from "./ExperienceExample"

export default function Experience() {
    return (
        <section className="grid min-w-[50%]">
            <div className="flex justify-center p-3 text-4xl">
                <h1>
                    Professional Experience
                </h1>
            </div>
            <div className="gap-6">  
                {
                    workExperienceData.map((experience, index) => (
                        <ExperienceExample key={index} {...experience} />
                    )) 
                }
            </div>
        </section>  
    )
}