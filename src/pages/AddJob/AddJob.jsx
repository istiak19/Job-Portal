import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const AddJob = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.email)
    const navigate = useNavigate()

    const handleAddJob = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const initialData = Object.fromEntries(form.entries());
        const { max, min, currency, ...newJob } = initialData
        newJob.salaryRange = { max, min, currency }
        newJob.responsibilities = newJob.responsibilities.split('\n')
        newJob.requirements = newJob.requirements.split('\n')
        console.log(newJob)
        axios.post('http://localhost:5000/jobs', newJob)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your job add has been submitted successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Add New Job!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleAddJob}>
                    {/* Job title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Job title" className="input input-bordered" required />
                    </div>
                    {/* Job Location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Job Location" className="input input-bordered" required />
                    </div>
                    {/* Job type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Type</span>
                        </label>
                        <select name="jobType" defaultValue='Pick a job type' className="select select-ghost w-full">
                            <option disabled>Pick a job type</option>
                            <option>Remote</option>
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Intern</option>
                        </select>
                    </div>
                    {/* Job category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        <select defaultValue='Pick a job Category' name="category" className="select select-ghost w-full">
                            <option disabled>Pick a job Category</option>
                            <option>Development</option>
                            <option>Design</option>
                            <option>Data Science</option>
                            <option>Management</option>
                            <option>Teaching</option>
                            <option>Finance</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                        </select>
                    </div>
                    {/* Job date */}
                    <div className="form-control">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="applicationDeadline"
                            required
                        />
                    </div>
                    {/* Salary Range */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-end gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <input type="text" name="max" placeholder="Max" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name="min" placeholder="Min" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name="currency" placeholder="Currency" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <textarea name="description" className="textarea textarea-bordered" placeholder="Job Description"></textarea>
                    </div>
                    {/* Company */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company name</span>
                        </label>
                        <input type="text" name="company" placeholder="Company name" className="input input-bordered" required />
                    </div>
                    {/* Requirements */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Requirements</span>
                        </label>
                        <textarea name="requirements" className="textarea textarea-bordered" placeholder="Job Requirements"></textarea>
                    </div>
                    {/* Responsibilities */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Responsibilities</span>
                        </label>
                        <textarea name="responsibilities" className="textarea textarea-bordered" placeholder="Job Responsibilities"></textarea>
                    </div>
                    {/* Status */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Status</span>
                        </label>
                        <div>
                            <input type="radio" id="active" name="status" value="Active" className="mr-2" />
                            <label htmlFor="active">Active</label>
                        </div>
                        <div>
                            <input type="radio" id="inactive" name="status" value="Inactive" className="mr-2" />
                            <label htmlFor="inactive">Inactive</label>
                        </div>
                    </div>
                    {/* HR name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR name</span>
                        </label>
                        <input type="text" name="hr_name" placeholder="HR name" className="input input-bordered" required />
                    </div>
                    {/* HR email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="hr_email" placeholder="HR Email" className="input input-bordered" required />
                    </div>
                    {/* Company Logo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Logo</span>
                        </label>
                        <input type="url" name="company_logo" placeholder="Company Logo" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;