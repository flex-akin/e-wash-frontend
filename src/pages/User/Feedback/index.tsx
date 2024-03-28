

const Feedback = () => {
  return (
    <>
 
              <form className="feedback">

              <div className="row text-center">
        <h3>Feedback Form</h3>
    </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    // ref={subject}
                  />
                </div>
              </div>
            </div>

         
            <div className="mb-3 col-12">
              <label htmlFor="specialInstruction" className="form-label">
                Message 
              </label>
              <textarea
                className="form-control"
                name=""
                id="specialInstruction"
                // ref={message}
                rows={7}
              ></textarea>
            </div>

            <button
              type="button"
            //   onClick={submitGuestForm}      
              className="btn btn-dark checkout-button "
            >
              SUBMIT
            </button>
          </form>
    </>
  )
}

export default Feedback