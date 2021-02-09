import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { makeStyles } from "@material-ui/core/styles";

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

const FarmsFilter = ({ expandedAccordion, handleChangeAccordions }) => {
  const classes = useStyles();

  function handleChangeAccordion(event, isExpandedFilter) {
    handleChangeAccordions("panelFarms")(event, isExpandedFilter);
  }

  return (
    <Accordion
      expanded={expandedAccordion === "panelFarms"}
      onChange={handleChangeAccordion}
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
        <span role="button">Publications concernant le projet agricole :</span>
      </AccordionDetails>
    </Accordion>
  );
};

export default FarmsFilter;
