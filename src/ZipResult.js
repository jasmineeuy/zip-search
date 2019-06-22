import React from 'react';

class ZipResult extends React.Component{
    render(){
        return(// the ones below are accessing info from file based on the input
            <div className ="zipres">
                <label>City: {this.props.City}</label><br />
                <label>State: {this.props.State}</label><br />
                <label>Population: {this.props.EstimatedPopulation}</label><br />
                <label>Wages: {this.props.TotalWages}</label><br />
               
            </div>
        );
    }
}

export default ZipResult;