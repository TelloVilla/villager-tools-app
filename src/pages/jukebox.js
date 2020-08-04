import React from "react";
import ReactDOM from "react-dom";
import Layout from "../components/layout";
import data from "../static/kkSong";
import {Form, Button, Row, Col, Container, Card} from "react-bootstrap";

export default function Jukebox(){
    let songTitle = "N/A";
    let songMood = "Mood not selected"
    function handleSong(e){
        e.preventDefault();
        let grumpyMood = e.target.elements[0].checked;
        let laidbackMood = e.target.elements[1].checked;
        let feelgoodMood = e.target.elements[2].checked;
        let blueMood = e.target.elements[3].checked;
        let hardsayMood = e.target.elements[4].checked;

        function checkMood(song){
            if(grumpyMood === true){
                if(song.mood === "A little grumpy..."){
                    return true;
                }

            }
            if(laidbackMood === true){
                if(song.mood === "Laid-back."){
                    return true;
                }
                
            }
            if(feelgoodMood === true){
                if(song.mood === "I feel good!"){
                    return true;
                }
                
            }
            if(blueMood === true){
                if(song.mood === "A little blue..."){
                    return true;
                }
                
            }
            if(hardsayMood === true){
                if(song.mood === "It's hard to say."){
                    return true;
                }
            }
            return false;

        }

        let moodCollection = data.filter(checkMood);
        if(moodCollection.length <= 0){
            console.log()
            return;
        }

        let randNum = Math.floor(Math.random() * (moodCollection.length - 1));

        songTitle = moodCollection[randNum].name;
        songMood = moodCollection[randNum].mood;
        songCard();

    
    }
    function songCard(){
        const CardElement =(
            
                <div className="card text-dark" id="songCard">
                    <div className="card-header">
                        Now Playing
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{songTitle}</h3>
                        <p className="card-text">{songMood}</p>
                        <a href="#" className="card-link">Next</a>
                    </div>

                </div>
            
        );
        ReactDOM.render(CardElement, document.getElementById("songPlace"));
    }

    return(
        <Layout>
            <div className="container jukebox bg-dark text-white">
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSong}>
                            <h3>Slider Jukebox</h3>
                            <h5>Include Moods:</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="moodCheck1"></input>
                                <label className="form-check-label" htmlFor="moodCheck1">
                                    A little grumpy...
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="moodCheck2"></input>
                                <label className="form-check-label" htmlFor="moodCheck2">
                                    Laid-back.
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="moodCheck3"></input>
                                <label className="form-check-label" htmlFor="moodCheck3">
                                    I feel good.
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="moodCheck4"></input>
                                <label className="form-check-label" htmlFor="moodCheck4">
                                    A little blue...
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="moodCheck5"></input>
                                <label className="form-check-label" htmlFor="moodCheck5">
                                    It's hard to say.
                                </label>
                            </div>
                            <button className="btn btn-light" type="submit">Random Song</button>

                        </form>

                    </div>
                    <div className="col" id="songPlace">
                        

                    </div>

                </div>

            </div>

        </Layout>
    );
}