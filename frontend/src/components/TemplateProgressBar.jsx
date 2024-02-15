import React from "react";

function TemplateProgressBar({ stats, statName }) {
  return (
    <div className="d-flex flex-column align-items-start w-100">
      <h3 className="text-white ms-2 mt-2 mb-1 fs-6 text-capitalize">
        {statName}
      </h3>
      <div className="d-flex w-100 align-items-center justify-content-around">
        <div className="progress" style={{ width: 100 * 2.8 }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            style={stats && { width: stats * 2.8 }}
          />
        </div>
        <h4 className="mb-0 text-white fs-5">{stats}</h4>
      </div>
    </div>
  );
}

export default TemplateProgressBar;
