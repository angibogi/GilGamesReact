import React from 'react';
import {HiOutlineSearch} from  'react-icons/hi'

const SearchBar = ({value, onChange}) => {

    return(
        <div className="search-container">
            <div className="search-inner">
                <input type="text" placeholder="search" value={value} onChange={onChange} /> <HiOutlineSearch/>
            </div>
        </div>
    );
}

export default SearchBar;