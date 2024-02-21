import { clothingItems } from "../../utils/data";
import StatelessCard from "../../components/ClothesCard/statelessCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Prices = () => {
  return (
  <>
    <div className="container-fluid about-body">
        <Navbar />
     <div className="header-bg">
          <div className="d-flex justify-content-end align-items-center">
            <h1 className="heading">
              We are E-Wash!... Nigeria's first Choice.
            </h1>
          </div>
        </div>
  <div className="container ">
  <div className="sub-head m-5">
            <p className="h1 fw-bold">
              Our Prices
            </p>
          </div>
  <div className="row mb-3">
{clothingItems.map((clothingItem) => (
  <div key={clothingItem.type} className="col-3">
    <StatelessCard
      price={clothingItem.price}
      type={clothingItem.type}
      id={clothingItem.id}
    />
  </div>
))}
</div>
  </div>
  </div>
  <Footer />
  </>
  )
}

export default Prices

