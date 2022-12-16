import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "./Item";
import { productData, responsive } from "./data";
export default function Final() {
  const product = productData.map((item) => (
    <Item 
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <div>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}