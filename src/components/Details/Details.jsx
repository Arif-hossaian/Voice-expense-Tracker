import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Doughnut } from "react-chartjs-2"

import useTransaction from "../../useTransaction"

import useStyles from "./style.js"



const Details = ({title}) => {

    const classes = useStyles();
    const { total, chartData } = useTransaction(title)
    return (
        <Card className={ title ==="Income" ? classes.income : classes.expense}>

            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5"> ${total} </Typography>
                <Doughnut data={chartData}/>
            </CardContent>
        </Card>
    )
}

export default Details
