import memeData from "../memeData";
import React from "react";
export default function Meme() {

    let meme = {
        topText : " ",
        bottomText : " ",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    }

    const [memeObj , setMemeObj] = React.useState(meme);

    const[input,setInput] = React.useState(
        {

        }
    )
    function getMeme(){
        const memesArray = memeData.data.memes;
        const num = Math.floor(Math.random() * memesArray.length);
        let url = memesArray[num].url;

        setMemeObj(prevMemeObj =>({
            ...prevMemeObj, randomImage:url
            })
        );
    }
    function handleChange(event){
        const{name,value} = event.target;

        setMemeObj(prevState => ({
            ...prevState, [name]:value
        }))
    }
    return (
        <>
            <div className="form">
                <input
                    type="text"
                    placeholder="input1"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}

                />
                <input
                    type="text"
                    placeholder="input2"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getMeme}
                >
                    Get a new meme!!
                </button>
            </div><br/>

            <div className="meme">
                <img src={memeObj.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeObj.topText}</h2>
                <h2 className="meme--text bottom">{memeObj.bottomText}</h2>
            </div>
        </>
    )
}