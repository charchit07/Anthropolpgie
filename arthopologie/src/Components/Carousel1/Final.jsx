import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item1 from "./Item1";
import { productData, responsive } from "./data1";
export default function Final1() {
  const product = productData.map((item) => (
    <Item1
      name={item.name}
      url={item.imageurl}
      // price={item.price}
      // description={item.description}
    />
  ));
  return (
    <div>
      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}