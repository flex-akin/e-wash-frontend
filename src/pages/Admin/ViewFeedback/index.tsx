import { useEffect, useState } from "react"
import { axiosGuestInstance } from "../../../utils/axiosInstance"
import { TFeedback } from "../../../utils/models"
import toast, { Toaster } from "react-hot-toast";

const ViewFeedback = () => {
    const [data, setData] = useState<TFeedback[]>()

    const getFeedback = () => {
        axiosGuestInstance
        .get("/users/feedback")
        .then((response) => {
            setData(response.data.data)
        })
        .catch((error) => {
            toast.error(error.response.data.message);
        })
    }

    useEffect( () => {
        getFeedback()
    }, [])
    return (
      <>
      <h2>
        Feedbacks
      </h2>
      <Toaster />
      {
        data && 
        data.map((datum, index) => (
            <div key={index} className="feedback d-flex flex-column my-3">
               <div className="d-flex flex-row">
                <span className="fw-bolder fs-3">
                    {datum.subject}
                </span>
                <span className="text-muted" style={{fontSize : "10px"}}>
                    {datum.date}
                </span>
               </div>
               <div>
                <p>
                    {datum.message}
                </p>
               </div>
            </div>
        ))
      }
    
      </>
    )
  }
  
  export default ViewFeedback