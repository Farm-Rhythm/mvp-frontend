import { useState } from "react";

import AllFilter from "./AllFilter";
import PostsFilter from "./PostsFilter";
import FarmsFilter from "./FarmsFilter";
import PersonsFilter from "./PersonsFilter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const FiltersBlockContent = ({ closePanel }) => {
  const [expandedAccordion, setExpandedFilter] = useState("panelAll");

  const handleChangeAccordions = (panel) => (event, isExpandedFilter) => {
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
        <button onClick={() => closePanel()} className="btn d-md-none">
          <FontAwesomeIcon icon={faWindowClose} />
        </button>
      </div>

      <div className="p-3">
        <div className="h5">Filter</div>
        <AllFilter
          expandedAccordion={expandedAccordion}
          handleChangeAccordions={handleChangeAccordions}
        />

        <PostsFilter
          expandedAccordion={expandedAccordion}
          handleChangeAccordions={handleChangeAccordions}
        />

        <FarmsFilter
          expandedAccordion={expandedAccordion}
          handleChangeAccordions={handleChangeAccordions}
        />

        <PersonsFilter
          expandedAccordion={expandedAccordion}
          handleChangeAccordions={handleChangeAccordions}
        />
      </div>
    </>
  );
};

export default FiltersBlockContent;
