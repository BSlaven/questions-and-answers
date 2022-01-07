import Questions from '../components/Questions';

const Profile = () => {
  return (
    <div className="rounded m-3 mt-5 mx-auto col-md-12">
      <div className="row m-4 mt-5 d-flex justify-content-center">
      <div className="col-sm-12 col-md-5 m-3" style={{color: "#2C3E50"}}>
        <h3 style={{color: "#1C2833"}} className="my-4">User info</h3>
        <div className="d-flex align-items-center mb-3 gx-1">
          <p className="fs-4 m-0 col-5">Name:</p>
          <p className="fs-4 m-0 col-3">Slaven</p>
        </div>
        <div className="row mb-3 gx-2">
          <p className="fs-4 m-0 col-5">Likes:</p>
          <p className="fs-4 m-0 col-5">14</p>
        </div>
        <div className="row mb-3 gx-2">
          <p className="fs-4 m-0 col-5">Questions:</p>
          <p className="fs-4 m-0 col-5">36</p>
        </div>
        <div className="row mb-3 gx-2">
          <p className="fs-4 m-0 col-5">Answers:</p>
          <p className="fs-4 m-0 col-5">23</p>
        </div>
        <button style={{backgroundColor: "#D2E7FC"}} className="my-3 btn btn-light text-dark">Change info</button>
      </div>
      <Questions />
      </div>
    </div>
  )
}

export default Profile
