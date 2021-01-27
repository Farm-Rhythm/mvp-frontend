import { useState, useRef, useEffect } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  SwipeableDrawer,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faFilter,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  accordion: {
    boxShadow: "none",
    "&::before": { height: "0px" },
    "& .MuiAccordionSummary-root": {
      borderRadius: "1.3em",
      height: "2.6em",
      minHeight: "auto",
      "& .MuiAccordionSummary-content": {
        display: "flex",
        alignItems: "center",
      },

      "&:hover": { backgroundColor: "rgba(255, 184, 0, 0.3)" },
    },
    "& .MuiAccordionSummary-root.Mui-expanded": {
      backgroundColor: "#F3F3F3",
      "&:hover": { backgroundColor: "#F3F3F3" },
    },

    "& .MuiAccordionDetails-root": {
      borderBottom: "1px solid #E3E3E3",
      borderRadius: "1.3em",
      paddingLeft: "3em",
      fontSize: "small",
      display: "flex",
      flexDirection: "column",
      "& span": {
        padding: "0.3em 0.6em",
        borderRadius: "0.5em",
      },
      "& span:hover": {
        backgroundColor: "rgba(255, 184, 0, 0.3)",
      },
    },
  },
  filterIcon: {
    alignContent: "middle",
    marginRight: "0.3em",
    width: "1.8em",
    height: "1.8em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const FiltersBlockContent = ({ closePanel }) => {
  const classes = useStyles();
  const [expandedFilter, setExpandedFilter] = useState("panelAll");

  const handleChangeFilters = (panel) => (event, isExpandedFilter) => {
    setExpandedFilter(panel);
    //console.log(isExpandedFilter);
  };

  return (
    <>
      <div className="p-3 d-flex justify-content-between border-bottom">
        <span>
          <span className="h5 font-weight-bold">Search results for</span>
          <br />"<span className="text-secondary">bony</span>"
        </span>
        <button onClick={() => closePanel(false)} className="btn">
          <FontAwesomeIcon icon={faWindowClose} />
        </button>
      </div>

      <div className="p-3">
        <div className="h5">Filter</div>
        <Accordion
          expanded={expandedFilter === "panelAll"}
          onChange={handleChangeFilters("panelAll")}
          className={classes.accordion}
        >
          <AccordionSummary
            aria-controls="panelAll-content"
            id="panelAll-header"
          >
            <span className={classes.filterIcon}>
              <img
                src="assets/images/icon-filter-all.png"
                alt="icon-filter-all"
                className="w-100"
              />
            </span>
            All
          </AccordionSummary>
        </Accordion>
        <Accordion
          expanded={expandedFilter === "panelPosts"}
          onChange={handleChangeFilters("panelPosts")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faAngleDown} size="xs" />}
            aria-controls="panelPosts-content"
            id="panelPosts-header"
          >
            <span className={classes.filterIcon}>
              <img
                src="assets/images/icon-filter-posts.png"
                alt="icon-filter-posts"
                className="w-100"
              />
            </span>
            Publications
          </AccordionSummary>
          <AccordionDetails>
            {/* <span>Publications que vous avez vues</span> */}
            <span role="button">Date de publication</span>
            <span role="button">Publications de :</span>
            <span role="button">
              Publications concernant le projet agricole :
            </span>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expandedFilter === "panelFarms"}
          onChange={handleChangeFilters("panelFarms")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faAngleDown} size="xs" />}
            aria-controls="panelFarms-content"
            id="panelFarms-header"
          >
            <span className={classes.filterIcon}>
              <img
                src="assets/images/icon-filter-farms.png"
                alt="icon-filter-farms"
                className="w-100"
              />
            </span>
            Projets agricoles
          </AccordionSummary>
          <AccordionDetails>
            <span role="button">Date de publication</span>
            <span role="button">Publications de :</span>
            <span role="button">
              Publications concernant le projet agricole :
            </span>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedFilter === "panelPersons"}
          onChange={handleChangeFilters("panelPersons")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faAngleDown} size="xs" />}
            aria-controls="panelPersons-content"
            id="panelPersons-header"
          >
            <span className={classes.filterIcon}>
              <img
                src="assets/images/icon-filter-persons.png"
                alt="icon-filter-persons"
                className="w-100"
              />
            </span>
            Persons
          </AccordionSummary>
          <AccordionDetails>persons options</AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

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
            closePanel={toggleDrawer}
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
