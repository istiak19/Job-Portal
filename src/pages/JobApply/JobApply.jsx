import { useParams } from "react-router-dom";

const JobApply = () => {
    const { id } = useParams()
    const handleApplySubmit = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const linkedin = form.get('linkedin')
        const resume = form.get('resume')
        const github = form.get('github')
        const applicant = { id, linkedin, resume, github }
        console.log(applicant)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
            </div>
        </div>
    );
};

export default JobApply;