import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import SectionTitle from '../SectionTitle/SectionTitle';
const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => {
                setImages(data);
                console.log(data);
            })
    }, [])

    return (

        <div>
            <SectionTitle
                heading={"Gallery"}
                subHeading={"let's have a look on your Dream!"}
            ></SectionTitle>
            <Marquee>
                {
                    images.map(img => <div key={img._id}
                    >
                        <div className="card w-96 bg-base-100 shadow-xl">

                            <figure><img src={img.college_image} alt="Shoes" /></figure>
                        </div>

                    </div>)
                }
            </Marquee>
        </div>

    );
};

export default Gallery;