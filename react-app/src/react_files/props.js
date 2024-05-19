import Avatar from "./avatar";


function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
        
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}




// //props are the infromation that we pass to the jsx tag

// import { getImageUrl } from "./utils";

// function Avatar({person,size}) {
// // let  person = props.person;
// // let size = props.size;
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// function Card({children}){
//     return(
//         <div className="card">
//             {children}
//         </div>
//     )
// }
// export default function Profile1() {
//   return (
//     <div>
//       {/* <Avatar
//         {...props}
//       /> */}
//       <Card>
//         <Avatar
//             size={100}
//             person={{
//             name: "Aklilu Lemma",
//             imageId: "OKS67lh",
//             }}
//         />
//       </Card>
//       {/* <Avatar
//         size={50}
//         person={{
//           name: "Lin Lanying",
//           imageId: "1bX5QH6",
//         }}
//       /> */}
//     </div>
//   );
// }
