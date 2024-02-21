import { serviceData } from "../../utils/data";
import { TService } from "../../utils/models";
import Card from "../Card";
import "./service.css"

const Services = () => {
  return (
    <div className="service-icon">
      {serviceData.map((service: TService) => (
        <Card key={service.id} className="mt-5 d-flex align-items-center border-0">
          <div className="d-flex flex-column align-items-center">
            <div className="circle my-3">
              <img
                src={service.icon}
                className="img-fluid icon"
                style={{ width: 25 }}
                alt=""
              />
            </div>
            <h6 className="">{service.title}</h6>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Services;
