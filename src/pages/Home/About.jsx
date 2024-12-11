import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
        });

        fetch('/category.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div>
            {/* Header Section with Fade Animation */}
            <Fade>
                <div className="text-center my-10">
                    <h2 className="text-4xl font-semibold">Browse by category</h2>
                    <p className="text-xl">Find the job that’s perfect for you. About 800+ new jobs every day</p>
                </div>
            </Fade>

            {/* Cards Section with Slide Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
                {jobs.map((job, index) => (
                    <Slide key={job.id} direction={index % 2 === 0 ? 'left' : 'right'}>
                        <div className="card bg-base-100 shadow-xl border border-blue-500">
                            <div className="card-body">
                                <div>
                                    <h2 className="font-bold">{job.jobTitle}</h2>
                                    <p>{job.jobsAvailable} Jobs Available</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                ))}
            </div>
        </div>
    );
};

export default About;
