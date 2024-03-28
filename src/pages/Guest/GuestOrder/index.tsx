import { clothingItems } from "../../../utils/data";
import ClothesCard from "../../../components/ClothesCard";
import "./guestOrder.css";
import { useSelector } from "react-redux";
import { selectCart } from "../../../utils/features/cartSlice";
import { singleCartState } from "../../../utils/models";
import { ShoppingCart } from "iconsax-react";
import { axiosGuestInstance } from "../../../utils/axiosInstance";
import { RefObject, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";



const GuestOrder = () => {
  const firstName: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const lastName: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const email: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const phoneNumber: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const location: RefObject<HTMLSelectElement> = useRef<HTMLSelectElement>(null);
  const instructions: RefObject<HTMLTextAreaElement> =
    useRef<HTMLTextAreaElement>(null);
  const streetAddress: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const cartItem = useSelector(selectCart);
  const guestOrders = cartItem.cart.map((item : singleCartState) => {
    return {
      clotheType : item.item.type,
      quantity : item.quantity,
      amount : item.item.price
    }
  })




  const getTotals = (price: number, quantity: number): number => {
    return price * quantity;
  };

  const getSumTotal = cartItem.cart.reduce(getSum, 0);

  function getSum(total: number, cart: singleCartState) {
    return total + cart.item.price * cart.quantity;
  }

  const data = {
    fullName : firstName.current?.value + " " + lastName.current?.value,
    email : email.current?.value,
    phoneNumber : phoneNumber.current?.value ,
    location : location.current?.value,
    instructions : location.current?.value,
    streetAddress : streetAddress.current?.value,
    amount : getSumTotal,
    guestOrders
  }


  const submitGuestForm = () => {
    axiosGuestInstance.post("/guest", data)
    .then(
      (response) => {
        axiosGuestInstance.post("/payment", {
          amount : getSumTotal,
          id : response.data.data.id
        })
        .then((response) => {
          window.location.href = response.data.data.authorization_url
        })
        .catch((error) => {
          toast.error("payment service not available")
        })
       
      }
    )
    .catch((error) => {
      console.log(error)
      toast.error("unable to complete your request at this time")
    });
  };

  return (
    <>
    <div><Toaster/></div>
      <div className="row guest">
        <div className="col-lg-9">
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    ref={firstName}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    ref={lastName}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    ref={email}
                  />
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
                    ref={phoneNumber}
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
                    ref={location}
                  >
                    <option value="others">Others</option>
                    <option value="alagbaka">Alagbaka</option>
                    <option value="futa">FUTA</option>
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
                    ref={streetAddress}
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
                ref={instructions}
                rows={3}
              ></textarea>
            </div>

            <div className="row mb-3">
              {clothingItems.map((clothingItem) => (
                <div key={clothingItem.type} className="col-lg-3 col-xs-5">
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
        <div className="checkout-section-user col-lg-3 col-md-12 border d-flex flex-column justify-content-between">
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
            <button
              type="button"
              onClick={submitGuestForm}      
              className="btn btn-dark checkout-button w-100"
            >
              
              CHECKOUT (₦{getSumTotal}
              )
            </button>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default GuestOrder;
