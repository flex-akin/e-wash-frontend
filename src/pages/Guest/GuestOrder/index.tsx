import { clothingItems } from "../../../utils/data";
import ClothesCard from "../../../components/ClothesCard";
import "./guestOrder.css";
import { useSelector } from "react-redux";
import { selectCart } from "../../../utils/features/cartSlice";
import { singleCartState } from "../../../utils/models";
import { ShoppingCart } from "iconsax-react";

const GuestOrder = () => {
  const cartItem = useSelector(selectCart);

  const getTotals = (price: number, quantity: number): number => {
    return price * quantity;
  };

  const getSumTotal = cartItem.cart.reduce(getSum, 0);

  function getSum(total: number, cart: singleCartState) {
    return total + cart.item.price * cart.quantity;
  }

  return (
    <>
      <div className="row guest">
        <div className="col-lg-9">
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input type="text" className="form-control" id="firstName" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input type="text" className="form-control" id="lastName" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Select a locaton</option>
                    <option value="1">Alagbaka</option>
                    <option value="2">FUTA</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="streetAddress" className="form-label">
                    Street Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="streetAddress"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="specialInstruction" className="form-label">
                Special Instructions
              </label>
              <textarea
                className="form-control"
                name=""
                id="specialInstruction"
                rows={3}
              ></textarea>
            </div>

            <div className="row mb-3">
              {clothingItems.map((clothingItem) => (
                <div key={clothingItem.type} className="col-3">
                  <ClothesCard
                    price={clothingItem.price}
                    type={clothingItem.type}
                    id={clothingItem.id}
                  />
                </div>
              ))}
            </div>
          </form>
        </div>
        <div className="checkout-section col-lg-3 col-md-12 border d-flex flex-column justify-content-between">
     <div>
          <div className="p-2 checkout-head">
            <ShoppingCart size="20" color="#ffffff" variant="Outline" />
            <span className="flex-item">YOUR ORDER DETAILS</span>
          </div>
          <div className="checkout">
            {cartItem &&
              cartItem.cart.map((item) => (
                <div
                  key={item.item.id}
                  className="d-flex justify-content-between"
                >
                  <p>
                    {item.item.type.toUpperCase()} x {item.quantity}
                  </p>
                  <p>{`₦${getTotals(item.item.price, item.quantity)}`}</p>
                </div>
              ))}
          </div>

          <div>
            <div className="d-flex justify-content-between">
              <h6 className="checkout">Total: </h6>
              <h6 className="checkout">₦{getSumTotal}</h6>
            </div>
          </div>
          </div>

          <div className="mb-3">
            <button type="button" className="btn btn-dark checkout-button w-100"> CHECKOUT (₦{getSumTotal}{})</button>

          </div>
        </div>


      </div>

      <div></div>
    </>
  );
};

export default GuestOrder;
