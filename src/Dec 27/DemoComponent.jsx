import React from "react";
import { DataCard } from "./DataCard";
export class DemoComponent extends React.PureComponent{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="container-fluid">
                <h2>Product Details</h2>
                <DataCard cardTitle="SamsungTv" items={['LED','QLED','OLED']}/>

            </div>
        )
    }
}