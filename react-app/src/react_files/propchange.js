// export default function Clock({color='red',time='11:30'}){
//     return (
//         <h1 style={{color:color}}>{time}</h1>
//     )
// }

import {  getImageUrls } from './utils.js';

function Profile({
    imageSize=70,
    name,
    imageId,
    profession,
    awards,
    discovery
}){
    return(
        <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrls(imageId)}
          alt={name}
          width={imageSize}
          height={imageSize}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b> 
            {awards}
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
    )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
      imageSize='100'
       name="Maria Skłodowska-Curie"
       imageId='szV5sdG'
       profession="physicist and chemist"
       awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
       discovery="polonium (chemical element)"
       />
       <Profile
       imageSize='70'
       name="Katsuko Saruhashi"
       imageId='YfeOqp2'
       profession="geochemist"
       awards="(Miyake Prize for geochemistry, Tanaka Prize)"
       discovery=" a method for measuring carbon dioxide in seawater"
       />
      
      
    </div>
  );
}