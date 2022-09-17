import React, { useState } from "react";
import { CircleMenu, CircleMenuItem } from "react-circular-menu";

const FloatingMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const useOutsideClick = (callback) => {
    const ref = React.useRef();
  
    React.useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [ref]);
  
    return ref;
  };

     const handleClickOutside = () => {
    setToggleMenu(false);
  };

  const myref = useOutsideClick(handleClickOutside);
  
  return (
    <div 
    ref={myref}
      style={{
        position: "fixed",
        right: "2rem",
        top: "45%",
        zIndex: "10",
        marginLeft: "100px",
      }}
    >
      <CircleMenu
        startAngle={90}
        rotationAngle={270}
        itemSize={2}
        radius={4}
        menuToggleElement={
          <div>
            {!toggleMenu ? (
              <div className="btn" onClick={()=>{
                setToggleMenu(!toggleMenu)
              }}>
                <i
                  class="fa-solid fa-ellipsis"
                  style={{ fontSize: "28px", color: "#fff" }}
                ></i>
              </div>
            ) : (
              <div className="btn" onClick={()=>{
                setToggleMenu(!toggleMenu)
              }}>
                <i class="fa-solid fa-xmark"
                  style={{ fontSize: "28px", color: "#fff" }}>
                </i>
              </div>
            )}
          </div>
        }
        rotationAngleInclusive={false}
      >
    
        <CircleMenuItem tooltip="About" tooltipPlacement="left">
          <a href="#info">
            <div className="btn">
              <i
                class="fa-solid fa-info"
                style={{ fontSize: "20px", color: "#fff" }}
              ></i>
              {/* <img src={Info} alt="info" height={50} width={50} /> */}
            </div>
          </a>
        </CircleMenuItem>
            <CircleMenuItem tooltip="Contact">
          <a>
          <div className="btn">
              <i
                class="fa-solid fa-phone"
                style={{ fontSize: "20px", color: "#fff" }}
              ></i>
            </div>
            {/* <img src={Art} alt="Art" height={50} width={50} /> */}
          </a>
        </CircleMenuItem>
        <CircleMenuItem tooltip="Home" tooltipPlacement="top">
          <a href="#home">
            {/* <img src={Home} alt="Home" height={50} width={50} />
             */}
            <div className="btn">
              <i
                class="fa-solid fa-house"
                style={{ fontSize: "20px", color: "#fff" }}
              ></i>
            </div>
          </a>
        </CircleMenuItem>
      </CircleMenu>
    </div>
  );
};

export default FloatingMenu;
