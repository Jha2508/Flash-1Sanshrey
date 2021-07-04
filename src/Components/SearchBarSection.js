import React, { useState } from "react";
import "./SearchBarSection.css";
import { BiSearchAlt } from "react-icons/bi";
import { IconContext } from "react-icons";
import { RiUserFollowLine, RiUserUnfollowFill, RiCloseCircleFill} from "react-icons/ri";

function SearchBar({ placeholder, data }) {
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
      <div className="header">
        <div className="header__left">
          <div className="header__input">
            <input
              type="text"
              placeholder="Search Friends"
              value={wordEntered}
              onChange={handleFilter}
            />

            {filteredData.length === 0 ? (
              <IconContext.Provider value={{ color: "green", size: 25 }}>
                <BiSearchAlt />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ color: "blue", size: 25 }}>
                <RiCloseCircleFill id="react-icons" onClick={clearInput} />
              </IconContext.Provider>
            )}
          </div>
        </div>
      </div>
      <div className="display">
        {filteredData.length !== 0 && (
          <div className="data">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <div className="product">
                  <h6>{value.category}</h6>
                  <h4>{value.name}</h4>
                  <img alt='...' src={value.Image} className="profilePic"/>
                  <IconContext.Provider value={{ color: "green", size: 25, className:"follow" }}>
                    <RiUserFollowLine />
                  </IconContext.Provider>
                  <IconContext.Provider value={{ color: "gray", size: 25, className:"unfollow" }}>
                    <RiUserUnfollowFill />
                  </IconContext.Provider>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
