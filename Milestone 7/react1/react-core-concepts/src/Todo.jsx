export default function Todo({tasks,isDone}){
//  if(isDone){
//     return (
//         <div>
//             <h1>Todo</h1>
//             <ul>
//                 <li>Finished ?:{tasks}</li>
//             </ul>
//         </div>
//     )
// }
// else{
//     return (
//         <div>
//             <h1>Todo</h1>
//             <ul>
//                 <li><h2>Working on:{tasks}</h2></li>
//             </ul>
//         </div>
//     )
// }

//  return (
//         <div>   
//             <h1>Todo</h1>
//             <ul>
//                 <li><h2>{isDone ? 'Finished' : 'Working on'}:{tasks}</h2></li>
//             </ul>
//         </div>
//         )
 return (
        <div>   
            <ul>
                <li><h2> {tasks} {isDone && 'Finished'}</h2></li>
                <li><h2> {tasks} {isDone || 'Do it '}</h2></li>
            </ul>
        </div>
        )
}