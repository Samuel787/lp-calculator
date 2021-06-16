import React from "react";

const ResultSpinner = (props) => {
    return (
        <div>
            <h2 style={{ marginBottom: "50px" }}>Recommendation:</h2>
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default ResultSpinner;
