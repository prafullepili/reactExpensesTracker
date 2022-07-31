import React from "react";

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
    const dataPointsValues = dataPoints.map(dataPoint => dataPoint.monthCost); /** get total expense of all month or a year */
    const totalMaximum = Math.max(...dataPointsValues); /** get highest expense cost of year */

    return (
        <div className="chart">
            {
                dataPoints.map(
                    (dataPoint, index) => <ChartBar
                        monthCost={dataPoint.monthCost}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                        key={index}
                    />
                )
            }
        </div>
    )
};

export default Chart;