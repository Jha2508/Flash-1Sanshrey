import React, { useState } from "react";
import "./SearchBarSection.css";
import { BiSearchAlt } from "react-icons/bi";
import { IconContext } from "react-icons";
import { RiCloseCircleFill } from "react-icons/ri";
import person from '../sources/person.jpeg'
import { withRouter } from "react-router";
function SearchBar(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    var newFilter = []
    newFilter = props.data.filter((value) => {
      if (value.name !== undefined && value.passingYear !== undefined && searchWord !== undefined) {
        return value.name.toLowerCase().includes(searchWord.toLowerCase()) || value.passingYear.toString().toLowerCase().includes(searchWord.toLowerCase());
      }
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

      <div className='sidebar' style={filteredData.length === 0 ? { zIndex: '-10', overflow: 'hidden' } : { zIndex: '1000' }}>
        <div className="header__left">
          <div className="header__input" style={{ marginTop: '17px', marginLeft:'8px' }}>
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

        <div className="display" style={filteredData.length === 0 ? { zIndex: '-10' } : { zIndex: '1000' }}>
          {filteredData.length !== 0 && (
            <div className="data">
              {filteredData.slice(0, 15).map((value, key) => {

                return (
                  <div key={key} onClick={()=>{
                    props.history.push(`/profile/${value.uid}`)
                    
            window.location.reload(false);}} className="product">
                    <div className='row'>
                      <div className='col'><h6>{value.passingYear.toString()}</h6>
                        <h5>{value.name}</h5>
                      </div>

                      <div className='col'>
                        <img alt='...' onError={(e)=>e.target.src=person} src={value.userImg} className="profilePic" />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default withRouter(SearchBar);
