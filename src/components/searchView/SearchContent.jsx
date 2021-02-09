import { useState, useRef, useEffect } from "react";

import FiltersBlockContent from "./FiltersBlockContent";

import { SwipeableDrawer } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";




const SearchContent = () => {
  const rootRef = useRef(null);
  const [stateDrawerSmDevices, setStateDrawerSmDevices] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 767.98) {
        setStateDrawerSmDevices(false);
      }
    };
  });

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setStateDrawerSmDevices(isOpen);
  };

  return (
    <div
      className="overflow-hidden d-flex"
      style={{
        backgroundColor: "#F3F3F3",
        fontFamily: "Karla-Regular",
        transform: "translateZ(0)",
      }}
      id="componentBackground"
      ref={rootRef}
    >
      <div className="d-none d-md-block col-5 col-md-4 col-lg-3 p-0 bg-white overflow-auto shadow-sm">
        <FiltersBlockContent />
      </div>

      <div className="col-auto p-0 p-sm-2 d-md-none border shadow">
        <button
          className="mt-4 btn btn-sm btn-success font-weight-bold"
          onClick={toggleDrawer(true)}
        >
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <SwipeableDrawer
          anchor="left"
          open={stateDrawerSmDevices}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          container={() => rootRef.current}
        >
          <FiltersBlockContent
            closePanel={() => setStateDrawerSmDevices(false)}
          />
        </SwipeableDrawer>
      </div>

      <div className="col p-0 overflow-auto">
        <div className="col-12 col-lg-10 mx-auto">
          <div className="my-4 my-md-5 bg-white p-3 rounded-lg shadow-sm">
            <h2>group of result 1</h2>
            <p>
              {[...new Array(5)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join("\n")}
            </p>
          </div>
          <div className="my-4 my-md-5 bg-white p-3 rounded-lg shadow-sm">
            <h2>group of result 2</h2>
            <p>
              {[...new Array(4)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join("\n")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
