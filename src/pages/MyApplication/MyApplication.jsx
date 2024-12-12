import { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import { MdDelete } from "react-icons/md";

const MyApplication = () => {
    const { user } = UseAuth()
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/job-application/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = jobs.filter(job => job._id !== id)
                setJobs(remaining)
            })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map(job => <tr key={job._id}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={job.company_logo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{job.company}</div>
                                        <div className="text-sm opacity-50">{job.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {job.title}
                                <br />
                                <span className="badge badge-ghost badge-sm">{job.jobType}</span>
                            </td>
                            <td>{job.category}</td>
                            <th>
                                <button onClick={() => handleDelete(job._id)} className="btn"><MdDelete /></button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyApplication;