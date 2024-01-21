
const GuestOrderStatus = () => {
  return (
    
    <form className="row g-3">
        <div className="col-2">
    <label htmlFor="orderNumber">Order Number</label>

        </div>

  <div className="col-7">
    
    <input type="text" className="form-control" id="orderNumber" placeholder="Order Number/Email" />
  </div>
  <div className="col-3">
    <button type="submit" className="btn btn-primary mb-3">Confirm Order Status</button>
  </div>
</form>

  )
}

export default GuestOrderStatus