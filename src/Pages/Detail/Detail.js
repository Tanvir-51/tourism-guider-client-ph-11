import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Detail = () => {
  const { serviceId } = useParams();
  const [currentService, setCurentService] = useState({});
  const [services, setServices] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://arcane-headland-98633.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        // setServices(data);
        setCurentService(
          data.find((service) => parseInt(service.id) === parseInt(serviceId))
        );
      });
  }, [serviceId]);
  //   console.log(currentService);

  //object destructuring
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const visibile = {
    visibility: "visible",
  };
  const invisibile = {
    visibility: "hidden",
  };
  useEffect(() => {
    fetch("https://arcane-headland-98633.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const onSubmit = (data) => {
    console.log(data);

    const singleService = services.find(
      (service) => service.id === parseInt(serviceId)
    );

    data.key = serviceId;
    data.serviceName = singleService.name;

    data.status = "pending";
    fetch("https://arcane-headland-98633.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          alert("Order Process successfully");

          reset();
        }
      });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col lg={8}>
            <div className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="col shadow-lg">
                      <div className="card h-100">
                        <img
                          src={currentService?.img}
                          className="card-img-top image"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-info ">
                            {currentService?.name}
                          </h5>
                          <p className="card-text text-secondary">
                            {currentService?.description}
                          </p>
                          <p className="card-text text-success fw-bold">
                            {currentService?.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <form onSubmit={handleSubmit(onSubmit)} className="my-4">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingName"
                  placeholder="Enter your name"
                  value={user.displayName}
                  readOnly
                  {...register("name", { required: true })}
                />
                <label htmlFor="floatingName">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={user.email}
                  readOnly
                  {...register("email", { required: true })}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-2">
                <input
                  type="telephone"
                  className="form-control"
                  id="floatingPhone"
                  placeholder="Enter Phone Number"
                  {...register("phone", { required: true })}
                />
                <label htmlFor="floatingPhone">Phone</label>
                <span
                  style={errors.phone ? visibile : invisibile}
                  className="text-danger ps-2"
                >
                  * Enter a valid Contact number
                </span>
              </div>
              <div className="form-floating mb-2">
                <input
                  className="form-control"
                  list="datalistOptions"
                  id="detailsAddress"
                  placeholder="Enter Your Address"
                  type="text"
                  {...register("address", { required: true })}
                />
                <label htmlFor="detailsAddress">Area, Union, District</label>
                <span
                  style={errors.address ? visibile : invisibile}
                  className="text-danger ps-2"
                >
                  * Enter your address
                </span>
              </div>
              <div className="form-floating mb-2">
                <input
                  className="form-control"
                  list="datalistOptions"
                  id="division"
                  placeholder="Enter Your Division"
                  type="text"
                  {...register("division", { required: true })}
                />
                <label htmlFor="locationInput">Division</label>
                <datalist id="division">
                  <option value="Dhaka" />
                  <option value="Chittagong" />
                  <option value="Rajshahi" />
                  <option value="Khulna" />
                  <option value="Sylhet" />
                  <option value="Barisal" />
                  <option value="Rangpur" />
                  <option value="Mymensingh" />
                </datalist>
                <span
                  style={errors.division ? visibile : invisibile}
                  className="text-danger ps-2"
                >
                  * Enter your division
                </span>
              </div>

              <div className="form-floating mb-2">
                <input
                  className="form-control"
                  list="datalistOptions"
                  id="transaction"
                  placeholder="Enter Your transaction id"
                  type="text"
                  {...register("transaction", { required: true })}
                />
                <label htmlFor="transaction">Transaction ID</label>
                <span
                  style={errors.transaction ? visibile : invisibile}
                  className="text-danger ps-2"
                >
                  * Enter transaction id{" "}
                </span>
              </div>

              <div className="text-center my-5">
                <input
                  className="btn btn-danger"
                  type="submit"
                  value="Confirm Order"
                />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
// desolate-mountain-62875.herokuapp.com
