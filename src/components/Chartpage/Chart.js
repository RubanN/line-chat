import axios from 'axios'
import url from '../config/url'

const Chart = async ()=>{
    try{
        let ChartData = await axios.get(url);
        return ChartData
    }catch(err){
        
        return err
    }
}
export default Chart
