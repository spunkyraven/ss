import React from 'react'
import {Alert} from "react-bootstrap";

const Message = ( {errors} ) => {
    return (
        <Alert variant="danger">
            {errors.from ? errors.from.msg : null} <br/>
            {errors.to ? errors.to.msg : null} <br/>
            {errors.carModel ? errors.carModel.msg : null} <br/>
            {errors.price ? errors.price.msg : null} <br/>
            {errors.dateTime ? errors.dateTime.msg : null} <br/>
            {errors.seatingCapacity ? errors.seatingCapacity.msg : null}
          </Alert>
    )
    
}


export default Message
