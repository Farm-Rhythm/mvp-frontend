import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Switch,
  FormControlLabel,
  InputBase,
} from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFB800",
    },
  },
  typography: {
    fontFamily: "Karla-regular",
  },
});

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
      "& span.debug": {
        padding: "0.5em",
        borderRadius: "0.5em",
      },
      "& span.debug:hover": {
        backgroundColor: "rgba(255, 184, 0, 0.3)",
      },
      "& .MuiFormControlLabel-label": {
        fontWeight: "bold",
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

const PersonsFilter = ({ expandedAccordion, handleChangeAccordions }) => {
  const [filterState, setFilterState] = useState({ farmersChecked: false });
  const classes = useStyles();

  function handleChangeAccordion(event, isExpandedFilter) {
    handleChangeAccordions("panelPersons")(event, isExpandedFilter);
  }

  function handleChange(event) {
    const newState = {};
    if (event.target.name === "farmersChecked") {
      newState.farmersChecked = event.target.checked;
    }
    setFilterState({ ...filterState, ...newState });
  }

  return (
    <ThemeProvider theme={theme}>
      <Accordion
        expanded={expandedAccordion === "panelPersons"}
        onChange={handleChangeAccordion}
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
        <AccordionDetails>
          <FormControlLabel
            control={
              <Switch
                checked={filterState.farmersChecked}
                onChange={handleChange}
                color="primary"
                name="farmersChecked"
                //inputProps={{ "aria-label": "farmers checkbox" }}
              />
            }
            label="Farmers"
            labelPlacement="start"
            className="mr-3"
          />
          <span role="button" className="debug">
            {/* <InputBase
              placeholder="Localisation"
              className="font-weight-bold border"
              style={{ color: "black" }}
            /> */}
            Localisation
          </span>
          <span role="button" className="debug">
            Publications concernant le projet agricole :
          </span>
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
};

export default PersonsFilter;
