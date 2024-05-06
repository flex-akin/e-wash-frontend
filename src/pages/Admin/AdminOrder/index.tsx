import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable, { TableStyles } from "react-data-table-component";
import { TSingleOrder, TUserOrderDetails } from "../../../utils/models";
import { customStyles } from "../../../utils/data";
import { axiosGuestInstance } from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

const AdminOrder = () => {
  let { type, code } = useParams();
  let [refresh, setRefresh] = useState(false)
  const [orderData, setOrderData] = useState<TSingleOrder[]>([]);
  const [orderDetails, setOrderDetails] = useState<TUserOrderDetails>();
  const fetchData = () => {
    axiosGuestInstance
      .get(`/admins/orders/${code}/${type}`)
      .then((response) => {
        setOrderDetails(response.data.data.userOrderDetails);
        setOrderData(response.data.data.orderContent);
      })
      .catch((error) => {
        toast.error("unable to complete your request at this time");
      });
  };

  const AColumn = [
    {
      name: "S/N",
      width: "60px",
      selector: (row: TSingleOrder, index: number | undefined) =>
        index ? index + 1 : 1,
    },
    {
      name: "Type",
      selector: (row: { clotheType: string }) => row.clotheType,
    },
    {
      name: "Quantity",
      selector: (row: { quantity: number }) => row.quantity,
    },
    {
      name: "Amount",
      selector: (row: { amount: number }) => row.amount,
    },
  ];
  useEffect(() => {
    fetchData();
  }, [refresh]);

  const handleComplete = () => {
    axiosGuestInstance
    .get(`/admins/orders/completed/${code}/${type}`)
    .then((response) => {
        setRefresh((prevState : boolean)=> {
            return !prevState
        })
    })
    .catch((error) => {
        // toast.error("unable to complete your request at this time");
    });
  }

  return (
    <div className="feedback">
      <div>
        <div className="row m-2">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>{orderDetails?.code}</h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <span
              className={`m-2 fw-bold
                     ${orderDetails?.isCompleted ? `text-success` : `text-danger`}`}
            >
              {orderDetails?.isCompleted ? "Completed" : "In Progress"}
            </span>
            <span
              className={`m-2 fw-bold
                     ${orderDetails?.isDelivered ? `text-success` : `text-danger`}`}
            >
              {orderDetails?.isDelivered 
                ? "Delivered"
                : "Not Delivered"}
            </span>

            <span className="m-2 fw-bold">
              {orderDetails?.date.split("T")[0]}
            </span>
          </div>
        </div>
        <div style={{paddingBottom : "40px"}}>
        </div>
        <div className="row m-2">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-flex flex-column">
              <span className="fw-bold">Email Address</span>
              <span>{orderDetails?.email}</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-flex flex-column">
              <span className="fw-bold">Phone Number</span>
              <span>{orderDetails?.phoneNumber}</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="d-flex flex-column">
              <span className="fw-bold">Address</span>
              <span>{orderDetails?.address}</span>
            </div>
            
          </div>
        </div>
      </div>
      <div style={{paddingBottom : "40px"}}>
        </div>
      <div className="p-3">
        <DataTable
          className="react-data-table-component"
          columns={AColumn}
          data={orderData}
          pagination
          persistTableHead
          customStyles={customStyles as TableStyles}
        />
      </div>
     <div className="d-flex flex-row-reverse">
        <button 
        onClick={handleComplete}
        className={`btn fw-bold ${
            orderDetails?.isCompleted ? "btn-warning" : "btn-success"
        }`} style={{fontSize : "12px"}}>
            {orderDetails?.isCompleted ? "In Progress" : "Completed"}
        </button>
       
     </div>
    </div>
  );
};

export default AdminOrder;