import { InputTextarea } from "primereact/inputtextarea";
import {Button} from "primereact/button";
import {Card} from "primereact/card";
import { useState } from "react";

export default function TextformComp (props) {
    const [value, text] = useState('');
    const handleOnChange = (event) => {
        text(event.target.value)
    }
    const upperCase = () => {
        let newText = value.toUpperCase();
        text(newText)
        props.showAlert("success", "Converted To Uppercase")
    }
    const lowerCase = () => {
        let lowerText = value.toLowerCase();
        text(lowerText)
        props.showAlert("success", "Converted To Lowercase")
    }
    const clear = () => {
        let clearText = value.replace(value, '');
        text(clearText)
        props.showAlert("warn", "Text has been cleared")
    }
    return (
        <>
       <div className="container mx-auto w-full h-auto">
       <div className="contentSection lg:ml-8">
            <h1 className={`my-6 mx-4 text-1xl lg:text-2xl text-${props.mode === 'gray-800'? 'gray-900' : 'white' } text-left font-bold`}>{props.heading}</h1>
            <InputTextarea value={value} onChange={handleOnChange} className="mx-5 border-5 outline outline-offset-2 outline-black border-black focus:border-black bg-white-500"  rows={8} cols={80} />
            <div className="Buttons my-3 mx-2">
            <Button disabled={value.length==0} onClick={upperCase} label="Uppercase" className="bg-blue-300 px-3 py-2 text-gray-900 font-bold mx-2" />
            <Button disabled={value.length==0} onClick={lowerCase} label="Lower Case" className="bg-blue-300 px-3 py-2 text-gray-900 font-bold"/>
            <Button disabled={value.length==0} onClick={clear} label="Clear" className="bg-blue-300 px-3 py-2 text-gray-900 font-bold mx-2" />
            {/* <Button onClick={emailExtract} label="Extract Email" className="bg-blue-300 px-3 py-2 text-gray-900 font-bold mx-2" /> */}
            </div>
        </div>
        <div className="summarySection lg:ml-8">
        <h1 className={`text-1xl lg:text-2xl text-${props.mode === 'gray-800'? 'gray-900' : 'white' } text-left font-bold mx-4`}>Your Text Contains: {value.length} characters & {value.trim().split(/\s+/).filter(Boolean).length} words.</h1>
        <p className={`text-1xl lg:text-2xl text-${props.mode === 'gray-800'? 'gray-900' : 'white' } text-left font-bold mx-4`}>Time Required: {0.008 * value.trim().split(/\s+/).filter(Boolean).length} </p>
        <div className="card mx-4 my-1">
            <Card className="bg-blue-300 w-auto">
            <h1 className="text-2xl text-gray-900 text-left font-bold my-3">Preview: </h1>
                <p className="m-0 text-black font-medium">
                    {value.length > 0 ? value : "Enter text to preview it here!"}
                </p>
            </Card>
        </div>
        </div>

       </div>
        </>
    )
}

TextformComp.defaultProps = {
    heading : 'Enter Your Text Here To Analyze'
}
