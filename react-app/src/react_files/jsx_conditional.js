function Item({name,isPacked}){
    // if(isPacked){
    //     //what null does is it removes the list and says empty
    //     // return null;
    //     return <li className="item">{name} ✔</li>
    // }
    let jsxContent = name;
    if(isPacked){
        jsxContent= name + '✔';
    }
    return (
        <li className="item">
            {jsxContent}
            {/* {name}{isPacked && '✔'} */}
            {/* {isPacked ?name +' ✔':name} */}
            {/* {isPacked ?(<del>{name +' ✔'}</del>) : (name)  } */}
            </li>
    );
}

export default function PackingList(){
    return(
        <section>
            <h1>Packing List</h1>
            <ul>
                <Item isPacked={true} name="tshirts"/>
                <Item isPacked={false} name="jeans"/>
                <Item isPacked={true} name="sneakers"/>
            </ul>
        </section>
    )
}