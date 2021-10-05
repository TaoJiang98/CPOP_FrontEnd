import React from "react";
import ChartistGraph from "react-chartist";
import { dailySalesChart } from "../variables/charts.js";
import { makeStyles } from "@material-ui/core/styles";


import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";

import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);

const Chart_Info = () => {
    const classes = useStyles();
    return (
        <Card chart>
            <CardHeader color="success">
                <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
                />
            </CardHeader>
            <CardBody>
                <h4 className={classes.cardTitle}>Daily Sales</h4>
                <p className={classes.cardCategory}>
                <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
                </p>
            </CardBody>
            <CardFooter chart>
                <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
                </div>
            </CardFooter>
        </Card>
    );
  }
  export default Chart_Info;