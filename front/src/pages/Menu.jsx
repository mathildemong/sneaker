import React from "react";
import '../styles/Menu.css'
import item from '../datas/list'

const Menu = () => {

  
  const [data, setData] = React.useState(null);
   React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
//to do usestate pour les produits //
//to do useeffect pour fetch produit et mettre a jour le state grace au use state produit//


    const {name, image, prix} = item;
    const handleClick = () => {};
  return (
    <div className="menu">
        <div className="image_box">
            <img src={image} alt="seackers" />
        </div>
        <div className="details">
        <p>{!data ? "Loading..." : data}</p>
            <p>{name}</p>
            <p>{prix}</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Menu;