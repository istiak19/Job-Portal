import { CiLocationOn } from "react-icons/ci";

const HotJobCard = ({ job }) => {
    const { company_logo, status, responsibilities, requirements, company, description, salaryRange, applicationDeadline, category, jobType, location, title } = job

    return (
        <div className="card card-compact bg-base-100 shadow-xl border border-blue-300">
            <div className="flex gap-2 items-center m-3">
                <figure>
                    <img className="w-16"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-xl font-semibold">{company}</h4>
                    <p className="text-xs flex gap-1 items-center"><CiLocationOn /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title} <div className="badge badge-secondary">NEW</div></h2>
                <p>{description}</p>
                <div className="flex flex-wrap gap-2">
                    {
                        requirements.map((requirement, idx) => <p
                            className="border border-blue-300 text-center rounded-lg p-1 hover:text-blue-500 hover:bg-slate-200"
                            key={idx}>{requirement}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center">
                    <p>Salary: $ {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <button className="btn bg-blue-600 text-white">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;