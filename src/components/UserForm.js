const UserForm = () => {
  return (
    <form className="col-sm-8 col-md-6">
      <div className="mb-3 text-start">
        <label htmlFor="name" className="px-0 form-control-lg col-form-label">Name</label>
        <input type="text" id="name" placeholder="Enter your name..." className="form-control" />
      </div>
      <div className="mb-3 text-start">
        <label htmlFor="email" className="px-0 form-control-lg col-form-label">Email</label>
        <input type="email" id="email" placeholder="Enter your email..." className="form-control" />
      </div>
      <div className="mb-3 text-start">
        <label htmlFor="password" className="px-0 form-control-lg col-form-label">Password</label>
        <input type="password" id="password" placeholder="Enter your password..." className="form-control" />
      </div>
      <div className="col-6 text-start">
        <button type="submit" className="my-3 col-6 btn btn-primary">Sign in</button>
      </div>
    </form>
  )
}

export default UserForm
