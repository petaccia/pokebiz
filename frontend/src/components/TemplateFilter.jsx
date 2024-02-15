import React from "react";
import "./TemplateFilter.css";

function TemplateFilter({ handleCheck, filterTypes }) {
  return (
    <div>
      <div className="sidebar__trigger" />

      <div className="sidebar ">
        <div
          className="accordion fixed-top container-md  p-0 filterDesktop  "
          id="accordionExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Filter
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse color-accordion text-white"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="form-check mb-1">
                  <input
                    onClick={() => "favoris"}
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Favoris
                  </label>
                </div>
                <div className="form-checkborder border-3 border-bottom border-white" />
                {filterTypes.map((type) => {
                  return (
                    <div className="form-check mb-1 mt-2" key={type.name}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={type.checked}
                        id="checkbox"
                        onChange={() => handleCheck(type)}
                      />
                      <label className="form-check-label" htmlFor="checkbox">
                        {type.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateFilter;
