import "./register.css"

const Register = () => {
  return (
    <>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="email"
              className="form-control"
              id="username"
              placeholder="john_doe"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="email"
              className="form-control"
              id="firstname"
              placeholder="John"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="email"
              className="form-control"
              id="lastname"
              placeholder="Doe"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="johndoe@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phonenumber" className="form-label">
              Phone Number
            </label>
            <input
              type="email"
              className="form-control"
              id="phonenumber"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Profile Picture
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea className="form-control" id="address" rows={2}></textarea>
          </div>
          <div>
            <input type="submit" className="btn btn-warning w-100 reg-button" />
          </div>
  
    </>

  );
};

export default Register;
