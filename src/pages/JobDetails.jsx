import { CiCalendarDate } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const jobLoaded = useLoaderData()
    const { _id, company_logo, status, responsibilities, requirements, company, description, salaryRange, applicationDeadline, category, jobType, location, title } = jobLoaded

    return (
        <div className="card mx-auto my-16 w-[500px] shadow-xl">
            {/* <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure> */}
            <div className="card-body space-y-3">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{status}</div>
                </h2>
                <p>{company}</p>
                <p>Category : {category}</p>
                <p>Description : {description}</p>
                <div className="flex">
                    <p className="flex items-center gap-1"><FaBusinessTime /> {jobType}</p>
                    <p className="flex items-center gap-1"><CiCalendarDate /> {applicationDeadline}</p>
                </div>
                <div className="card-actions">
                   <Link to={`/apply/${_id}`} className="btn w-full btn-primary">Apply Now</Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;