import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {

    return (
        <>
            <Bar

                style={{ 'margin-top': '2em', 'margin-bottom': '4em' }}

                data={data}

                options={{

                    plugins: {
                        legend: {
                            labels: {
                                // This more specific font property overrides the global property
                                boxWidth: 0,
                                font: function (context) {
                                    var width = context.chart.width;
                                    var size = Math.round(width / 32);
                                    return {
                                        size: size,
                                        weight: 400
                                    };
                                }
                            }
                        }
                    },

                    maintainAspectRatio: true,

                    scales: {

                        y: {

                            title: {
                                display: true,
                                text: "Weight in Pounds",
                                font: function (context) {
                                    var width = context.chart.width;
                                    var size = Math.round(width / 36);
                                    return {
                                        size: size,
                                        weight: 400
                                    };
                                }
                            }
                        },

                        x: {

                            title: {
                                display: true,
                                text: "Processing Stages",
                                font: function (context) {
                                    var width = context.chart.width;
                                    var size = Math.round(width / 36);
                                    return {
                                        size: size,
                                        weight: 400
                                    };
                                }
                            }
                        }

                    }


                }}

            />
        </>
    );

};

export default BarChart;