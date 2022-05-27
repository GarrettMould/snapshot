import PageDescription from "../PageDescription/PageDescription";
import FilterList from "../FilterList/FilterList";
import ProductSlider from "../ProductSlider/ProductSlider";
import classes from "./Home.module.css";
const Home = (props) => {
  return (
    <>
      <PageDescription></PageDescription>
      <FilterList
        buttonsFilms={props.buttonsFilms}
        buttonsCameras={props.buttonsCameras}
        display={props.display}
        update={props.update}
      ></FilterList>
      <ProductSlider
        cameras={props.cameras}
        films={props.films}
        accessories={props.accessories}
        display={props.display}
        select={props.select}
      ></ProductSlider>
    </>
  );
};

export default Home;
