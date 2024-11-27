// import React, { useEffect, useState } from "react";

// export const Six = () => {

//     const [data, setData] = useState(null)
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((res) => res.json())
//             .then((json) => setData(json))



//     }, []);

//     return (
//     <div>
//         {
//             data ? (
//                 <div>
//                     <h1>Tittle: {data.tittle}</h1>
//                     <div />
//                     ):(
//                     <p>
//                         Loading
//                     </p>
//                     )}

//     </div>)
// };
