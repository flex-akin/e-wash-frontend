import { RefObject, useEffect, useRef, useState } from "react";
import "./Content.css";
import DataTable, { TableStyles } from "react-data-table-component";
import { TAdminOrder, TOrderData, TSubData } from "../../../utils/models";
import { axiosGuestInstance } from "../../../utils/axiosInstance";
import toast from "react-hot-toast";
import { customStyles } from "../../../utils/data";
import {
  Cards,
  CloseCircle,
  HashtagDown,
  ReceiptDisscount,
  TickCircle,
} from "iconsax-react";
import { removeTime } from "../../../utils/dataManipulator";
import { Link, useNavigate } from "react-router-dom";


const Content = () => {
  const jsonString = localStorage.getItem("userData") as string;
  const userData = JSON.parse(jsonString);
  const handleClick = () => {
    setIsModalOpen(true);
    setCode(code);
  };

  const navigate = useNavigate()
  const scheduledDate: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  const [data, setData] = useState<TOrderData[]>([]);
  const [subData, setSubData] = useState<TSubData>()
  const [adminData, setAdminData] = useState<TAdminOrder[]>([]);
  const [codeData, setCodeData] = useState<TOrderData[]>([]);
  const [code, setCode] = useState<string>("");
  const [orderCode, setOrderCode] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const orderButton = (code: string, type: string) => {
    navigate(`/dashboard/admin-order/${code}/${type}`)
  }
  const columns = [
    {
      name: "S/N",
      width: "60px",
      selector: (row: TOrderData, index: number | undefined) =>
        index ? index + 1 : 1,
    },
    {
      name: "Clothe Type",
      selector: (row: { clotheType: string }) => row.clotheType,
    },
    {
      name: "Qty",
      selector: (row: { quantity: number }) => row.quantity,
      width: "60px",
    },
    {
      name: "Amount",
      selector: (row: { amount: string }) => row.amount,
    },
    {
      name: "Status",
      selector: (row: { isCompleted: boolean }) => row.isCompleted,
      width: "80px",
      cell: (row: { isCompleted: boolean }) => (
        <>
          {row.isCompleted ? (
            <TickCircle size="25" color="#00ad40" variant="Bold" />
          ) : (
            <CloseCircle size="25" color="#f00707" variant="Bold" />
          )}
        </>
      ),
    },
    {
      name: "Pick up Date",
      selector: (row: { pickUpDate: string }) => row.pickUpDate,
    },

    {
      name: "Order Code",
      selector: (row: { orderCode: string }) => row.orderCode,
    },
  ];

  const AColumn = [
    {
      name: "S/N",
      width: "60px",
      selector: (row: TAdminOrder, index: number | undefined) =>
        index ? index + 1 : 1,
    },
    {
      name: "Code",
      selector: (row: { code: string }) => row.code,
    },
    {
      name: "Type",
      selector: (row: { type: string }) => row.type,
    },
    {
      name: "Order Date",
      selector: (row: { created_at: string }) => row.created_at,
    },
    {
      name: "Status",
      selector: (row: { isCompleted: boolean }) => row.isCompleted,
      width: "80px",
      cell: (row: { isCompleted: boolean }) => (
        <>
          {row.isCompleted ? (
            <TickCircle size="25" color="#00ad40" variant="Bold" />
          ) : (
            <CloseCircle size="25" color="#f00707" variant="Bold" />
          )}
        </>
      ),
    },
    {
      name: "",
     
      width: "150px",
      cell: (row: { type: string, code: string   }) => (
        <>
          <button
          onClick={ () => {
            orderButton(row.code, row.type)
          }
          }
          type="button" 
          className="btn btn-primary"
          style={{fontSize: "10px"}}>
            View
          </button>
        </>
      ),
    },
  ];

  const getSubData = () => {
    axiosGuestInstance
      .get("/users/plan")
      .then((response) => {
        setSubData(response.data.data);
      })
    
  }

  const getData = () => {
    if( userData.role === "ADMIN" ){

      axiosGuestInstance
      .get("/admins/orders")
      .then((response) => {
        setAdminData(response.data.data);
      })
      .catch((error) => {
        // toast.error("unable to complete your request at this time");
      });
    }else {
    axiosGuestInstance
      .get("/users/order")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        // toast.error("unable to complete your request at this time");
      });
    }
  };

  const getOrderCodeData = () => {
    axiosGuestInstance
      .get("/users/getOrderByCOde")
      .then((response) => {
        setCodeData(response.data.data);
      })
      .catch((error) => {
        // toast.error("unable to complete your request at this time");
      });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    axiosGuestInstance
      .post(`/users/schedule/${scheduledDate}`)
      .then((response) => {
        if (response.data.data.isCompleted) {
          toast.success("Your Order is Ready For Delivery");
        } else {
          toast.error("Your Order is not Ready");
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  const handleVerify = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    axiosGuestInstance
      .get(`/users/checkUserOrder?orderCode=${orderCode}`)
      .then((response) => {
        if (response.data.data.isCompleted) {
          toast.success("Your Order is Ready For Delivery");
        } else {
          toast.error("Your Order is not Ready");
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    getData();
    getOrderCodeData();
    getSubData()
  }, []);



  return (
    <>
      {userData.role === "USER" && (
        <>
          <div
            className={`modal fade  ${isModalOpen ? "show" : ""}`}
            id="exampleModal"
            tabIndex={-1}
            style={{ display: isModalOpen ? "block" : "none" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="d-flex flex-row justify-content-between p-3">
                  <p className="fw-bold">Schedule Pick up Date</p>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      setIsModalOpen(false);
                    }}
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body">
                  <form
                    className="d-flex flex-column align-items-center"
                    onSubmit={handleSubmit}
                  >
                    <div className="text-center">
                      <label htmlFor="orderNumber">Select Pick-Up Date</label>
                    </div>

                    <div className="p-3 w-100">
                      <input
                        type="date"
                        className="form-control"
                        id="orderNumber"
                        ref={scheduledDate}
                      />
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        style={{ fontSize: "12px" }}
                        className="btn btn-dark mb-3"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback">
            <div className="d-flex flex-row justify-content-between pb-4">
              <h5 className="fw-bold">
                Welcome, {userData.first_name} {userData.last_name}{" "}
              </h5>
              <div className="d-flex flex-row">
                <div
                  style={{
                    background: "#fae6e6",
                    borderRadius: "10px",
                    padding: "3px 14px",
                    marginRight: "5px",
                  }}
                >
                  <ReceiptDisscount size="25" color="#f00707" variant="Bold" />
                  <span style={{ color: "#f00707" }}>{subData?.remnant} PIECES</span>
                </div>
                <div
                  style={{
                    background: "#ebfcf1",
                    borderRadius: "10px",
                    padding: "3px 14px",
                  }}
                >
                  <Cards size="25" color="#00ad40" variant="Bold" />
                  <span style={{ color: "#00ad40" }}>{subData?.type} PLAN</span>
                </div>
              </div>
            </div>

            <div className="">
              <DataTable
                className="react-data-table-component"
                columns={columns}
                data={data}
                pagination
                persistTableHead
                customStyles={customStyles as TableStyles}
              />
            </div>
          </div>
          <div className="row mt-3 justify-content-between">
            <div className="col-lg-6 col-sm-12">
              <div className="w-90 feedback d-flex flex-column">
                <h5 className="fw-bold pb-3">Schedule Pick Up</h5>
                {/* <div>
                  <div
                    style={{ background: "#000000", color: "#ffffff" }}
                    className="d-flex flex-row justify-content-between p-2"
                  >
                    <span>Order Code</span>
                    <span>Status</span>
                    <span>Pick Up date</span>
                  </div>
                  {codeData.length !== 0 &&
                    codeData.map((item: TOrderData, index: number) => (
                      <div
                        key={index}
                        className="d-flex flex-row border-bottom p-2 justify-content-between align-items-center"
                      >
                        <span className="fw-bold">{item.orderCode}</span>

                        {item.isCompleted ? (
                          <TickCircle
                            size="25"
                            color="#00ad40"
                            variant="Bold"
                          />
                        ) : (
                          <CloseCircle
                            size="25"
                            color="#f00707"
                            variant="Bold"
                          />
                        )}

                        <span>
                          {!item.pickUpDate ? (
                            <button
                              style={{ fontSize: "10px", background: "#fff" }}
                              className="btn btn-light text-muted"
                              onClick={() => {
                                handleClick();
                                setCode(item.orderCode);
                              }}
                            >
                              Schedule
                            </button>
                          ) : (
                            removeTime(item.pickUpDate)
                          )}
                        </span>
                      </div>
                    ))}
                </div> */}
                <div className="d-flex flex-row align-items-center justify-content-evenly">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div>
                  <span className="text-center fw-bold">Scan QR code</span>
                  </div>
                  <div>
                  <img 
                  src="https://res.cloudinary.com/ddaoml7e8/image/upload/v1715006088/qr-code.png"
                  height={300}
                  width={300}
                  />
                  </div>
               
                </div>
                <div>
                  <h2>Or</h2>
                </div>
                <div>
                  <Link to="https://wa.link/nlnz21" target="_blank">
                  <button className="btn btn-success">
                    Click here
                  </button>
                  </Link>
                  
                </div>
                </div>
               
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="w-90 feedback">
                <div>
                  <h5 className="fw-bold pb-2">Verify Order</h5>
                </div>

                <div>
                  <div className="text-center">
                    <label htmlFor="orderNumber">Input Order Code</label>
                  </div>
                  <form
                    className="d-flex flex-column align-items-center"
                    onSubmit={handleVerify}
                  >
                    <div className="p-3 w-100">
                      <input
                        type="text"
                        className="form-control"
                        id="orderNumber"
                        placeholder="Order Number/Email"
                        onChange={(e) => {
                          setOrderCode(e.target.value);
                        }}
                      />
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        style={{ fontSize: "12px" }}
                        className="btn btn-dark mb-3"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {userData.role === "ADMIN" && (
        <>
          <div className="feedback">
            <div className="d-flex flex-row justify-content-between">
              <h5 className="fw-bold">
                Welcome, {userData.first_name} {userData.last_name}
              </h5>
            </div>

            <div className="p-3">
              <DataTable
                className="react-data-table-component"
                columns={AColumn}
                data={adminData}
                pagination
                persistTableHead
                customStyles={customStyles as TableStyles}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Content;
