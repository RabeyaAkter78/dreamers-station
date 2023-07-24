import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    const [search, setSearch] = useState("");
    const [allCollege, setAllCollege] = useState([]);
    // for search college btn:
    const handleSearch = () => {
        fetch(`http://localhost:5000/searchCollege/${search}`)
            .then(res => res.json())
            .then(data => {
                setAllCollege(data);
            });
    }

    return (

        <div className="flex justify-center items-center mt-8 mb-8">
            <input onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-md " />{""}
            <button onClick={handleSearch} className="btn btn-info"> <FaSearch /></button>
           
        </div>
    );
};

export default Search;