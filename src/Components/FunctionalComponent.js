import React from 'react'

// function FunctionalComponent() {
//     return (
//         <div>
            
//         </div>
//     )
// }

const FunctionalComponent=(props)=> {
    const {name}=props
    function click(){
        alert('you clicked me!')
    }
    return (
    <div> I am a functional component {name} <button onClick={click}>Click Me!</button>
    
    </div>
    )
}



export default FunctionalComponent
