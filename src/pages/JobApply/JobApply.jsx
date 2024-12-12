import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams()
    const { user } = UseAuth()
    const navigate = useNavigate()

    const handleApplySubmit = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const linkedin = form.get('linkedin')
        const resume = form.get('resume')
        const github = form.get('github')
        const applicant = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            resume,
            github
        }
        axios.post('http://localhost:5000/job-application', applicant)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your application has been submitted successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplication')
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto my-16 max-w-2xl shadow-2xl">
            <h1 className="text-4xl text-center font-bold mt-5">Apply job and good luck!</h1>
            <form className="card-body" onSubmit={handleApplySubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Linkedin</span>
                    </label>
                    <input type="url" placeholder="Linkedin URL" name="linkedin" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume</span>
                    </label>
                    <input type="url" placeholder="Resume URL" name="resume" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">GitHub</span>
                    </label>
                    <input type="url" placeholder="GitHub URL" name="github" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;