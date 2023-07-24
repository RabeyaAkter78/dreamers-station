import { useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../Providers/AuthProviders";

const Admission = () => {
    const { user } = useContext(AuthContext);


    const handleAddColleges = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const collegeName = form.collegeName.value;
        const photo = form.photo.value;
        const email = form.email.value;


        const addCollege = { name, collegeName, email, photo, };
        console.log(addCollege);


        fetch("http://localhost:5000/addCollege", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCollege)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    toast('Submitted Successfully!');
                }
                form.reset();
            })
        console.log(addCollege);
    };
    const handleToast = () => {
    };

    return (
        <div>

            <form onSubmit={handleAddColleges} className=' mb-12'>
                <div className=" w-full bg-base-200">
                    <h2 className='text-center text-blue-700 font-bold text-4xl'>Admission</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 w-full  shadow-2xl bg-base-100">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">College Name</span>
                            </label>
                            <input type="text" name="collegeName" placeholder="College Name" className="input input-bordered" defaultValue={user?.displayName} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email}
                                placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">subject</span>
                            </label>

                            <input type="text" name='subject' placeholder="Toy subject" className="input input-bordered" />
                        </div>




                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleToast} className="btn btn-primary">Submit</button>
                        <Toaster />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Admission;