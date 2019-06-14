import React from 'react';

class ZipResult extends React.Component{
    render(){
        return(// the ones below are accessing info from file based on the input
            <div>
                <label>{this.props.City}</label><br />
                <label>{this.props.State}</label><br />
                <label>{this.props.EstimatedPopulation}</label><br />
                <label>{this.props.TotalWages}</label><br />
               
            </div>
        );
    }
}

export default ZipResult;