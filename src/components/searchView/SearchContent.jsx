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
      backgroundColor: "#F3F3F3",
      "&:hover": { backgroundColor: "#F3F3F3" },
    },

    "& .MuiAccordionDetails-root": {
      borderBottom: "1px solid #E3E3E3",
      borderRadius: "1.3em",
      paddingLeft: "3em",
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

const SearchContent = () => {
  const [expanded, setExpanded] = useState("panelAll");

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
            expanded={expanded === "panelPosts"}
            onChange={handleChange("panelPosts")}
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
            <AccordionDetails>publications options</AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panelFarms"}
            onChange={handleChange("panelFarms")}
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
              Farms
            </AccordionSummary>
            <AccordionDetails>farms options</AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panelPersons"}
            onChange={handleChange("panelPersons")}
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

          <Accordion
            expanded={expanded === "panelPhotos"}
            onChange={handleChange("panelPhotos")}
            className={classes.accordion}
          >
            <AccordionSummary
              expandIcon={<FontAwesomeIcon icon={faAngleDown} size="xs" />}
              aria-controls="panelPhotos-content"
              id="panelPhotos-header"
            >
              <span className={classes.filterIcon}>
                <img
                  src="assets/images/icon-filter-photos.png"
                  alt="icon-filter-photos"
                  className="w-100"
                />
              </span>
              Photos
            </AccordionSummary>
            <AccordionDetails>photos options</AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panelVideos"}
            onChange={handleChange("panelVideos")}
            className={classes.accordion}
          >
            <AccordionSummary
              expandIcon={<FontAwesomeIcon icon={faAngleDown} size="xs" />}
              aria-controls="panelVideos-content"
              id="panelVideos-header"
            >
              <span className={classes.filterIcon}>
                <img
                  src="assets/images/icon-filter-videos.png"
                  alt="icon-filter-videos"
                  className="w-100"
                />
              </span>
              Videos
            </AccordionSummary>
            <AccordionDetails>videos options</AccordionDetails>
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
