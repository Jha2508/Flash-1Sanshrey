import React, { useState } from "react";
import "./SearchBarSection.css";
import { Link } from 'react-router-dom'
import { BiSearchAlt } from "react-icons/bi";
import { IconContext } from "react-icons";
import { RiUserFollowLine,  RiCloseCircleFill } from "react-icons/ri";

function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase()) || value.category.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="SearchBarSection">
        <div className="header__left">
          <div className="header__input">
            <input
              type="text"
              placeholder="Search Friends"
              value={wordEntered}
              onChange={handleFilter}
            />

            {filteredData.length === 0 ? (
              <IconContext.Provider value={{ color: "green", size: 20 }}>
                <BiSearchAlt />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ color: "blue", size: 20 }}>
                <RiCloseCircleFill id="react-icons" onClick={clearInput} />
              </IconContext.Provider>
            )}
          </div>
        </div>
        
    <div className='sidebar' style={filteredData.length===0?{zIndex:'-10',overflow:'hidden'}:{zIndex:'1000'}}>
    <div className="header__left">
          <div className="header__input" style={{marginTop:'17px'}}>
            <input
              type="text"
              placeholder="Search Friends"
              value={wordEntered}
              onChange={handleFilter}
            />

            {filteredData.length === 0 ? (
              <IconContext.Provider value={{ color: "green", size: 20 }}>
                <BiSearchAlt />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ color: "blue", size: 20 }}>
                <RiCloseCircleFill id="react-icons" onClick={clearInput} />
              </IconContext.Provider>
            )}
          </div>
        </div>
        
      <div className="display" style={filteredData.length===0?{zIndex:'-10'}:{zIndex:'1000'}}>
        {filteredData.length !== 0 && (
          <div className="data">
            {filteredData.slice(0, 15).map((value, key) => {

              return (
                <Link to='/showProfile'>
                <div className="product">
                <div className='row'>
                <div className='col'><h6>{value.category}</h6>
                  <h5>{value.name}</h5>
                  <div className='row'>
                  <IconContext.Provider value={{ color: "green", size: 25, className: "follow" }}>
                    <RiUserFollowLine />
                  </IconContext.Provider>
                  </div></div>

                  <div className='col'>
                  <img alt='...' src={value.Image} className="profilePic" />
                  </div>
                  </div>
                  
                  
                 
                </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default SearchBar;
