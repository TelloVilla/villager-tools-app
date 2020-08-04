import React from "react";
import Layout from "../components/layout";
import data from "../static/deepSea";
import {Jumbotron, Container, Table} from "react-bootstrap";

export default function Catch(){
    let currentTime = new Date();

    let currentMonth = currentTime.getMonth() + 1;


        let startTimeFour = new Date();
        startTimeFour.setHours(16);
        startTimeFour.setMinutes(0);
        startTimeFour.setSeconds(0);

        

        let endTimeNine = new Date();
        endTimeNine.setHours(9);
        endTimeNine.setMinutes(0);
        endTimeNine.setSeconds(0);
        endTimeNine.setDate(endTimeNine.getDate() + 1);

        let startTimeNine = new Date();
        startTimeNine.setHours(21);
        startTimeNine.setMinutes(0);
        startTimeNine.setSeconds(0);

        let endTimeFour = new Date();
        endTimeFour.setHours(4);
        endTimeFour.setMinutes(0);
        endTimeFour.setSeconds(0);
        endTimeFour.setDate(endTimeFour.getDate() + 1);

        let startTimeNineIso = new Date();
        startTimeNineIso.setHours(9);
        startTimeNineIso.setMinutes(0);
        startTimeNineIso.setSeconds(0);

        let endTimeFourIso = new Date();
        endTimeFourIso.setHours(16)
        endTimeFourIso.setMinutes(0);
        endTimeFourIso.setSeconds(0);

        


    const Creatures = data.map(function(creature, index){
        if(creature.available.includes(currentMonth.toString())){
            if(creature.time === "4pm - 9am" && currentTime >= startTimeFour && currentTime <= endTimeNine){
                return(
                    <tr key={index}>
                        <th scope="row">{creature.name}</th>
                        <td>{creature.price}</td>
                        <td>{creature.shadowSize}</td>
                        <td>{creature.time}</td>
                    </tr>

                );
            }else if(creature.time === "9pm - 4am" && currentTime >= startTimeNine && currentTime <= endTimeFour){
                return(
                    <tr key={index}>
                        <th scope="row">{creature.name}</th>
                        <td>{creature.price}</td>
                        <td>{creature.shadowSize}</td>
                        <td>{creature.time}</td>
                    </tr>
                );

            }else if(creature.time === "9am - 4pm & 9pm - 4am" && (currentTime >= startTimeNine && currentTime <= endTimeFour) || (currentTime >= startTimeNineIso && currentTime <= endTimeFourIso)){
                return(
                    <tr key={index}>
                        <th scope="row">{creature.name}</th>
                        <td>{creature.price}</td>
                        <td>{creature.shadowSize}</td>
                        <td>{creature.time}</td>
                    </tr>
                );

            }else if(creature.time === "All day"){
                return(
                    <tr key={index}>
                        <th scope="row">{creature.name}</th>
                        <td>{creature.price}</td>
                        <td>{creature.shadowSize}</td>
                        <td>{creature.time}</td>
                    </tr>

                );
            }
        }
    });

    return(
        <Layout>
            <div className="jumbotron fluid">
                <div className="container">
                    <h3 className="display-4">Deep-Sea creatures available on {currentTime.getMonth() + 1 + "/" + currentTime.getDate()} at {currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds()}</h3>
                </div>

            </div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Shadow Size</th>
                        <th scope="col">Time</th>

                    </tr>
                </thead>
                <tbody>
                    {Creatures}
                    
                </tbody>

            </table>

        </Layout>
    );
}

