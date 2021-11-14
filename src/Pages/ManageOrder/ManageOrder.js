import React, { useEffect, useState } from "react";
import swal from "sweetalert";

const ManageOrder = (props) => {
  const { _id, serviceName, name, email, address, transaction, status } =
    props.order;

  const [orders, setOrders] = useState([]);

  // load all bookings
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  // delete booking function
  const handleDeleteBooking = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const newArr = orders.filter((order) => order._id !== id);
        fetch(`http://localhost:5000/orders/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingorders = orders.filter((x) => x._id !== id);
              setOrders(remainingorders);
              swal({
                title: "Your Order is Deleted.",
                icon: "success",
                button: "Ok",
              });
            }
            setOrders(newArr);
          });
      }
    });
  };

  // update booking status function
  const handleStatusUpdate = (id) => {
    swal({
      title: "Are you sure to Aprove?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((update) => {
      if (update) {
        const newArr = orders.map((order) => {
          if (order._id === id) {
            order.status = "Approved";
          }
          return order;
        });

        fetch(`http://localhost:5000/orders/${id}`, {
          method: "put",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "Approved" }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              setOrders(newArr);
              swal({
                title: "The Order is successfully Approved",
                icon: "success",
                button: "Ok",
              });
            }
          });
      }
    });
  };
  return (
    //single booking
    <div className="border shadow-lg mb-3 p-3">
      <p>
        <span className="fw-bold">Order Id: </span>
        <br />
        {_id}
      </p>
      <p>
        <span className="fw-bold">Service Name: </span>
        <br />
        {serviceName}
      </p>
      <p>
        <span className="fw-bold">Name: </span>
        <br />
        {name}
      </p>
      <p>
        <span className="fw-bold">Email: </span>
        <br />
        {email}
      </p>
      <p>
        <span className="fw-bold">Address: </span>
        <br />
        {address}
      </p>
      <p>
        <span className="fw-bold">Transaction ID: </span>
        <br />
        {transaction}
      </p>
      <h5 className="my-3">
        Status:
        <span
          className={
            status === "pending"
              ? "text-danger fw-bold"
              : "text-success fw-bold"
          }
        >
          {status}
        </span>
      </h5>
      <h5>
        <button
          className="btn btn-success"
          onClick={() => handleStatusUpdate(_id)}
        >
          Approve
        </button>
        <button
          className="btn btn-danger ms-3"
          onClick={() => handleDeleteBooking(_id)}
        >
          Delete
        </button>
      </h5>
    </div>
  );
};

export default ManageOrder;
