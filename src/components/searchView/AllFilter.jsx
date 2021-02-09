import { Accordion, AccordionSummary } from "@material-ui/core";

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

const AllFilter = ({ expandedAccordion, handleChangeAccordions }) => {
  const classes = useStyles();

  function handleChangeAccordion(event, isExpandedFilter) {
    handleChangeAccordions("panelAll")(event, isExpandedFilter);
  }

  return (
    <Accordion
      expanded={expandedAccordion === "panelAll"}
      onChange={handleChangeAccordion}
      className={classes.accordion}
    >
      <AccordionSummary aria-controls="panelAll-content" id="panelAll-header">
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
  );
};

export default AllFilter;
