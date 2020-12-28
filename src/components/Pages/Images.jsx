import React from 'react'
import whithFileUpload from '../HOC/withFileUpload'


const Images = (props) => (
    <div className="square">
        <form action="">
            <input type="file" name="" id="" onChange={props.addFile}/>
        </form>
        {props.files.map((file,index) => (
        
            <div className="image" key={index}>
                <img src={file} alt=""/>
            </div>
        ))}
    </div>
)

export default whithFileUpload(Images)