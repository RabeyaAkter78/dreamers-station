
const Review = () => {


    return (
        <div className='mt-32 ' >
            <h2 className="text-3xl text-[rgb(192,13,228)] font-bold text-center mt-4 mb-4 "> Let's see whats our Awesome Client says... </h2>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="data:image/jpeg;base64,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" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">BAF Shaheen College Dhaka</h2>
                        <p>BAF Shaheen College Dhaka is a renowned educational institution in Dhaka, Bangladesh. It is affiliated with the Bangladesh Air Force and offers education from primary to higher secondary levels. The college has a good reputation for academic excellence, discipline, and extracurricular activities. It is particularly known for providing a conducive learning environment and producing successful students in various fields.</p>
                        <p>Author: Aria Johnson</p>
                        <div className="card-actions">
                            <button className="btn btn-primary"> <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="data:image/jpeg;base64,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" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"> Notre Dame College Dhaka</h2>
                        <p> Notre Dame College Dhaka is one of the most prestigious higher secondary colleges in Bangladesh. Established in 1949, it has a long history of academic excellence and producing outstanding results in public examinations. The college offers a wide range of subjects and has a reputation for providing a quality education. It also encourages students to participate in co-curricular and extracurricular activities.</p>
                        <p>Author : Zara Lawson</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </button>
                        </div>
                    </div>
                </div><div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className="mask mask-squircle bg-pink-800" src="data:image/jpeg;base64,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" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Viqarunnisa Noon School & College</h2>
                        <p>The XYZ Car Toy unlocks a world of adventure and excitement. Its sleek design and vibrant colors spark the imagination. The precise remote control handling enables thrilling races and daring stunts. The working headlights and taillights add a touch of realism. With outstanding durability, it withstands rough play without a hitch. Get ready for hours of fun and entertainment as this car toy takes playtime to new heights.Viqarunnisa Noon School & College (VNSC) is a well-known institution for girls in Dhaka, Bangladesh. </p>
                        <p>Author Name: john Doe</p>
                        <div className="card-actions">
                            <button className="btn btn-primary"> <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;