import React, { useState } from 'react'

export default function TextForm(props) {
    const upcaseclick = () => {
        console.log("Upper case button was clicked", "success");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case successfully ", "success");
    }



    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    const locaseclick = () => {
        console.log("Upper case button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case successfully ", "success");
    }

    const eraselow = () => {
        let h = '';
        setText(h);
        props.showAlert("Cleared successfully ", "success");
    }

    const dates = () => {
        let d = new Date();
        setText(text + "\n" + d);
    }


    const [text, setText] = useState(''); // basically the value of text is now enter text here

    return (
        <>
            <div class="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 >{props.heading} </h2>
                <div class="mb-3">
                    <textarea className="form-control" id="box" value={text} onChange={handleOnChange} rows="5" style={{ backgroundColor: props.mode === 'dark' ? '#282828' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}> </textarea>
                </div>

                <button type="button" className="btn btn-success mx-2" onClick={upcaseclick}  >Change to upper case</button>
                <button type="button" className="btn btn-success mx-2" onClick={locaseclick}  >Change to lower case</button>
                <button type="button" className="btn btn-success mx-2" onClick={eraselow}  >Clear</button>
                <button type="button" className="btn btn-success mx-2" onClick={dates}  >Add Date/Time</button>
            </div>
            <br />

            <div className="container">
                <h2>Your text summary here </h2>
                <p>
                    Your text has {text.split(" ").length} words and {text.length} characters.
                </p>
                <p>
                    {0.008 * text.split(" ").length} Minutes Read
                </p>
            </div>
        </>
    )
}
