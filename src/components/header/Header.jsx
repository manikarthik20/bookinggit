import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);


  const [destination, setDestination] = useState("");
  const [openOptions, setOpenoptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    childern: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" &&
          <><h1 className="headertitle">A lifetime of discounts? It's Genius</h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="headerButton">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={e => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                  {`${format(date[0].startDate, "MM/dd/yyyy")} 
            to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={() => setOpenoptions(!openOptions)} className="headerSearchText">
                  {`${options.adult} adult ${options.childern} children 
              ${options.room} room`}
                </span>
                {openOptions && <div className="options">
                  <div className="optionsItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button className="optionCounterButton"
                        disabled={options.adult <= 1}
                        onClick={() => handleOption("adult", "d")}>-</button>
                      <span className="optionCounterNumber">{options.adult}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button className="optionCounterButton" disabled={options.childern <= 0} onClick={() => handleOption("childern", "d")}>-</button>
                      <span className="optionCounterNumber">{options.childern}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("childern", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button className="optionCounterButton" disabled={options.room <= 1} onClick={() => handleOption("room", "d")}>-</button>
                      <span className="optionCounterNumber">{options.room}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                    </div>
                  </div>
                </div>}
              </div>
              <div className="headerSearchItem">
                <button className="headerButton" onClick={handleSearch}>Search</button>
              </div>
            </div></>}
      </div>
    </div>
  )
}

export default Header;