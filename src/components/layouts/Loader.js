import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="pagination-loader">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: '#fff', display: 'block', shapeRendering: 'auto' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <g transform="translate(80,50)">
                        <g transform="rotate(0)">
                            <circle cx={0} cy={0} r={6} fill="#eeab56" fillOpacity={1}>
                                <animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.875s" />
                            </circle>
                        </g>
                    </g><g transform="translate(71.21320343559643,71.21320343559643)">
                        <g transform="rotate(45)">
                            <circle cx={0} cy={0} r={6} fill="#eeab56" fillOpacity="0.875">
                                <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s" />
                            </circle>
                        </g>
                    </g><g transform="translate(50,80)">
                        <g transform="rotate(90)">
                            <circle cx={0} cy={0} r={6} fill="#eeab56" fillOpacity="0.75">
                                <animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.625s" />
                            </circle>
                        </g>
                    </g><g transform="translate(28.786796564403577,71.21320343559643)">
                        <g transform="rotate(135)">
                            <circle cx={0} cy={0} r={6} fill="#eeab56" fillOpacity="0.625">
                                <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s" />
                            </circle>
                        </g>
                    </g><g transform="translate(20,50.00000000000001)">
                        <g transform="rotate(180)">
                            <circle cx={0} cy={0} r={6} fill="#eeab56" fillOpacity="0.5">
                                <animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.375s" />
                            </circle>
                        </g>
                    </g><g transform="translate(28.78679656440357,28.786796564403577)">
                        <g transform="rotate(225)">
                            <circle cx={0} cy={0} r={6} fill="#eeab56" fillOpacity="0.375">
                                <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s" />
                            </circle>
                        </g>
                    </g><g transform="translate(49.99999999999999,20)">
                        <g transform="rotate(270)">
                            <circle cx={0} cy={0} r={6} fill="#eeab56" fillOpacity="0.25">
                                <animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.125s" />
                            </circle>
                        </g>
                    </g><g transform="translate(71.21320343559643,28.78679656440357)">
                        <g transform="rotate(315)">
                            <circle cx={0} cy={0} r={6} fill="#eeab56" fillOpacity="0.125">
                                <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s" />
                            </circle>
                        </g>
                    </g>
                </svg>
            </div>
        );
    }
}

export default Loader;