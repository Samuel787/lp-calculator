import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

const DiscreteSlider = ({ title, rangeChange, sliderId }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
                {title}
            </Typography>
            <Slider
                id={sliderId}
                defaultValue={30}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                min={10}
                max={110}
                onChangeCommitted={rangeChange}
            />
        </div>
    );
};

export default DiscreteSlider;
