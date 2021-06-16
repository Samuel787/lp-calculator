import React from "react";

const ResultSpinner = (props) => {
    return (
        <div>
            <h2 style={{ marginBottom: "50px" }}>Recommendation:</h2>
            {/* <div className="resultContainer"> */}
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default ResultSpinner;
