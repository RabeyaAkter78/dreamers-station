import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCollege = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [loading, setLoading] = useState(true);
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        if (user && user.email) {
            fetch(`http://localhost:5000/myCollege?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyData(data);
                    console.log(data);
                    setLoading(false);
                });
        }
    }, [user]);
    if (loading) {
        return <div>Loading...</div>;
    }


    console.log(user.email);
    console.log(myData);

    const handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myCollege/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            fetch(`http://localhost:5000/myCollege/?email=${user?.email}`)
                                .then(res => res.json())
                                .then(data => { setMyData(data) })
                        }
                        console.log(result)
                    })
            }
        })
    }



    return (
        <div>
            <div className="grid md:grid-cols-3">


                {
                    myData?.map((data) =>
                        <div
                            key={data._id}
                        >

                            <figure><img src={data.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Student Name:{data.name}</h2>
                                <h2 className="card-title">Student Email:{data.email}</h2>
                                <p>{data.collegeName}</p>
                                
                            </div>
                            <td><button className='btn btn-primary'>
                                <Link to={`/updateData/${data._id}`}>UPDATE</Link>
                            </button></td>
                            <td><button onClick={() => handleDelete(data._id)} className='btn btn-danger'>DELETE</button></td>
                        </div>




                    )
                }

            </div>


        </div>
    );
};

export default MyCollege;