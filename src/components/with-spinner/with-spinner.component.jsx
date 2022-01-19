import React from "react";
import {SpinnerOverlay,SpinnerContainer} from "./with-spinner.styles"

// const WithSpinner = WrapperComponent => ({isLoading, ...otherProps})=>{
//     return isLoading? <SpinnerOverlay><SpinnerContainer/></SpinnerOverlay>
//     :<WrapperComponent {...otherProps}/>
// }

const WithSpinner = WrapperComponent => ({isLoading})=>{
    return isLoading? <SpinnerOverlay><SpinnerContainer/></SpinnerOverlay>
    :<WrapperComponent/>
}

export default WithSpinner