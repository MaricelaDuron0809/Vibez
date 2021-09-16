import React, {useState} from 'react'
import '../styles.css'

const SearchDrop = props => {

    const dropdownChanged = e => {
        props.changed(e.target.value);

    }    

    return (
        
        <div className="search-dropdown">     
            <select value={props.selectedValue} onChange={dropdownChanged} className="">
                <option key={0}>Select..</option>
                {props.options.map((item, idx) => <option key={idx + 1} value={item.id}>{item.name}</option>)}
            </select>            
        </div>
    
    );
}

export default SearchDrop;
