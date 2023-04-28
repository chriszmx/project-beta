function Footer() {
        return (
        <footer className="bg-dark text-light text-center text-lg-start">
            <div className="container p-2">
            <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Contact Information</h5>

                <ul className="list-unstyled mb-0" style={{ fontSize: "0.9rem" }}>
                    <li>
                    <i className="fas fa-map-marker-alt fa-2x me-2"></i>
                    1234 Main St, Suite 200<br />
                    Anytown, USA 12345
                    </li>
                    <li>
                    <i className="fas fa-envelope fa-2x me-2"></i>
                    info@carcar.com
                    </li>
                    <li>
                    <i className="fas fa-phone-alt fa-2x me-2"></i>
                    (123) 456-7890
                    </li>
                </ul>
                </div>

                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">About CarCar</h5>

                <p>
                    CarCar is the ultimate solution for automobile dealership management. Our state-of-the-art software helps dealerships streamline their operations, increase efficiency, and boost sales.
                </p>
                </div>
            </div>
            </div>

            <div className="text-center p-3">
            © 2023 CarCar
            </div>
        </footer>
        );
    }

export default Footer;
