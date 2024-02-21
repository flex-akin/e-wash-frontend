import { FC } from "react";
import { Item } from "../../utils/models";


const StatelessCard: FC<Item> = ({ price, type, image, id }) => {

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

        </div>
      </div>
    </div>
  );
};

export default StatelessCard;
