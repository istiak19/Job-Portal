import { div } from "motion/react-client";
import { useEffect, useState } from "react";

const About = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center my-10">
                <h2 className="text-4xl font-semibold">Browse by category</h2>
                <p className="text-xl">Find the job that’s perfect for you. about 800+ new jobs everyday</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
                {
                    jobs.map(job => <div key={job.id} className="card bg-base-100 shadow-xl border border-blue-500">
                        <div className="card-body">
                            <div>
                                <h2 className="font-bold">{job.jobTitle}</h2>
                                <p>{job.jobsAvailable} Jobs Available</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default About;