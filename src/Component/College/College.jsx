import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const College = () => {
    const [allCollege, setAllCollege] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allCollege`)
            .then(res => res.json())
            .then(data => {
                setAllCollege(data);
                console.log(data);
            })
    }, [])

    return (
        <div>
            <SectionTitle
                heading={"Top College"}
                subHeading={""}
            ></SectionTitle>
            <div className='grid md:grid-cols-3'>

                {
                    allCollege?.map((college, index) =>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl "
                            key={college._id}
                        >

                            <figure><img src={college.college_image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{college.college_name}</h2>
                                <p>{college.admission_process}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default College;