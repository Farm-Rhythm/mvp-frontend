import { useState } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPowerOff } from "@fortawesome/free-solid-svg-icons";

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
      backgroundColor: "rgba(255, 184, 0)",
      "&:hover": { backgroundColor: "rgba(255, 184, 0)" },
      "& .Mui-expanded": { color: "white" },
    },
  },
  filterIcon: {
    alignContent: "middle",
    marginRight: "0.3em",
    borderRadius: "1em",
    width: "1.4em",
    height: "1.4em",
    background: "#b4b4b4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const SearchContent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <div
      className="overflow-hidden d-flex px-5"
      style={{ backgroundColor: "#F3F3F3" }}
    >
      <div className="col-3 p-0 bg-white overflow-auto shadow-sm">
        <div className="p-3 border-bottom">
          <span className="h5 font-weight-bold">Search results for</span>
          <br />"<span className="text-secondary">bony</span>"
        </div>

        <div className="p-3">
          <div className="h5">Filter</div>
          <Accordion
            expanded={expanded === "panelAll"}
            onChange={handleChange("panelAll")}
            className={classes.accordion}
          >
            <AccordionSummary
              expandIcon={<FontAwesomeIcon icon={faAngleDown} size="xs" />}
              aria-controls="panelAll-content"
              id="panelAll-header"
            >
              All
            </AccordionSummary>
            <AccordionDetails>bla bla bla bla</AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panelPost"}
            onChange={handleChange("panelPost")}
            className={classes.accordion}
          >
            <AccordionSummary
              expandIcon={<FontAwesomeIcon icon={faAngleDown} size="xs" />}
              aria-controls="panelPost-content"
              id="panelPost-header"
            >
              <span className={classes.filterIcon}>
                <FontAwesomeIcon icon={faPowerOff} size="sm" />
              </span>
              <span style={{ alignContent: "middle" }}>Posts</span>
            </AccordionSummary>
            <AccordionDetails>bla bla bla bla</AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="col-9 overflow-auto">
        <div className="col-9 my-5">
          <h2>group of result 1</h2>
          <p>
            {[...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </p>
        </div>
        <div className="col-9 my-5">
          <h2>group of result 2</h2>
          <p>
            {[...new Array(12)]
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
  );
};

export default SearchContent;
