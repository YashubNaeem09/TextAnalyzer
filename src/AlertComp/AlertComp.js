// import React from 'react'
// import { Message } from 'primereact/message';

// export default function AlertComp(props) {
//   return (
//     <div className=''>
//      { props.alert && <div className='card flex items-center justify-center '>
//         <Message severity={`${props.alert.severity}`} text={`${props.alert.text}`} />
//       </div>}
//     </div>
//   )
// }


import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function AlertComp(props) {
    // const toast = useRef(null);

    // const show = () => {
    //     toast.current.show({ severity: `${props.alert.severity}`, summary: `${props.alert.severity}`, detail: `${props.alert.text}` });
    // };

    return (
        props.toast && <div className="card flex justify-content-center">
            <Toast ref={props.Toast} severity={props.toast.severity} summary={props.toast.summary} detail={props.toast.detail} />
        </div>
    )
}
        