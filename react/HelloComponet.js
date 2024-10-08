
// function Hello() {
//     let i = 2;
//     let button = React.createElement("button",null,"Click")
//
//     return (<>
//         <div>
//         <p>hello</p>
//         <ul>
//         <li>he1</li>
//         <li>he2</li>
//         </ul>
//         </div>
//         </>);
// }
const container = document.getElementById('mydiv');
const root = ReactDOM.createRoot(container);
root.render(<Hello/>)