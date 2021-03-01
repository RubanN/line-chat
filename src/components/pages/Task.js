import React ,{ Component} from 'react';
import {
LineChart,
Line,
CartesianGrid,
XAxis,
YAxis,
Tooltip,
Legend
} from "recharts";

import Chart from '../Chartpage/Chart'
export default class ChartData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:[]
        }
    };
    componentDidMount = async ()=>{
        let ChartData = await Chart();
        this.setState({loading:false,value:ChartData})
        console.log(this.state.value);
    }
    render() {
       
        return (
            <div>
        <LineChart
          width={500}
          height={250}
          data={this.state.value.data}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis padding={{ left: 20 }} domain={[0, 50]} />
          <YAxis type="number" domain={[25, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="data_error" stroke="#8884d8" />
       
          <Line type="monotone" dataKey="input-data" stroke="#82ca9d" />
        </LineChart>


            </div>
        )
    }
    
}
