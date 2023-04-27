function MainPage() {
  return (
    <div className="container-fluid bg-dark text-light py-5 main-page">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 text-center">
          <h1 className="display-2 fw-bold mb-4">CarCar</h1>
          <p className="lead mb-5">
            The ultimate solution for automobile dealership management!
          </p>
          <a href="http://localhost:3000/list-vehicle" className="btn btn-primary btn-lg me-3">Vehicle List</a>
          <a href="http://localhost:3000/create-service" className="btn btn-outline-light btn-lg">Schedule Service</a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
