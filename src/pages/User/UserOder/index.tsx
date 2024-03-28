import React from 'react'
import ClothesCard from '../../../components/ClothesCard'
import { clothingItems } from '../../../utils/data'
import { ShoppingCart } from 'iconsax-react'
import { singleCartState } from '../../../utils/models'
import { useSelector } from 'react-redux'
import { selectCart } from '../../../utils/features/cartSlice'

const UserOrder = () => {
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
  return (
    <>
          <div className="row guest pt-5">
        <div className="col-lg-9">
          <form>

            <div className="row mb-3 mr-4 ml-2">
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
            //   onClick={submitGuestForm}      
              className="btn btn-dark checkout-button w-100"
            >
              
              SUBMIT (₦{getSumTotal}
              )
            </button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default UserOrder