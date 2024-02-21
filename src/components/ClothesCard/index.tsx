import { FC } from "react";
import { Item } from "../../utils/models";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../utils/features/cartSlice";

const ClothesCard: FC<Item> = ({ price, type, image, id }) => {
  const dispatch = useDispatch();
  const addItemToCart = (item: Item) => {
    dispatch(addToCart({ item }));
  };
  const removeItemToCart = (item: Item) => {
    dispatch(removeFromCart({ item }));
  };
  return (
    <div className="m-1 row border">
      <div className="col-9">
        <div>₦{price}</div>
        <div>
          <p className="fw-bolder fs-6">{type.toUpperCase()}</p>
        </div>
      </div>
      <div className="col-3">
        <div className="d-flex flex-column m-0">
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                addItemToCart({ price, type, id, image });
              }}
              className="btn btn-success"
              style={{ width: 50 }}
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                removeItemToCart({ price, type, id, image });
              }}
              className="btn btn-danger"
              style={{ width: 50 }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothesCard;
