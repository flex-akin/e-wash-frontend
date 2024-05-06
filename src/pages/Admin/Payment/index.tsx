import { useEffect, useState } from "react";
import { axiosGuestInstance } from "../../../utils/axiosInstance";
import { TPayment } from "../../../utils/models";
import DataTable, { TableStyles } from "react-data-table-component";
import { customStyles } from "../../../utils/data";

const Payment = () => {
  const column = [
    {
      name: "S/N",
      width: "60px",
      selector: (row: TPayment, index: number | undefined) =>
        index ? index + 1 : 1,
    },
    {
      name: "Date",
      selector: (row: { date: string }) => row.date.split("T")[0],
    },
    {
      name: "Name",
      selector: (row: { name: string }) => row.name,
    },
    {
      name: "Amount",
      selector: (row: { amount: string }) => row.amount,
    },
  ];
  const [data, setData] = useState<TPayment[]>([]);

  const fetchData = () => {
    axiosGuestInstance.get(`/admins/payments`).then((response) => {
        console.log(response)
      setData(response.data.data);
    });
  };
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div>Payment</div>
      <div className="p-3">
        <DataTable
          className="react-data-table-component"
          columns={column}
          data={data}
          pagination
          persistTableHead
          customStyles={customStyles as TableStyles}
        />
      </div>
    </>
  );
};

export default Payment;
