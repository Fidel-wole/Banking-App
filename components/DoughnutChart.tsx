import React from 'react'
import {Chart as ChartJs,ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from 'react-chartjs-2'
ChartJs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }:DoughnutChartProps) => {
    const data = {
datasets:[
    -{
        label:"Banks",
        data:[1250, 2500, 3750],
        backgroundColor:'#'
    }
]
    }
  return <Doughnut data={[]} />
}

export default DoughnutChart