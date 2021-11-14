import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const MyOrder = (props) => {
  const [orders, setOrders] = useState([]);

  // object destructring
  const { _id, serviceName, name, email, address, transaction, status } =
    props.orders;

  //load user from auth
  const { user } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        const userOrders = data.filter((order) => order.email === user.email);
        setOrders(userOrders);
      });
  }, []);

  const handleDeleteBooking = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const newArr = orders.filter((x) => x._id !== id);
        fetch(`http://localhost:5000/orders/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingBookings = orders.filter((x) => x._id !== id);
              setOrders(remainingBookings);
              alert("Successfully Deleted");
            }
            setOrders(newArr);
          });
      }
    });
  };

  return (
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
        <span className={status === "Pending" ? "text-danger" : "text-success"}>
          {" "}
          {status}
        </span>
      </h5>
      <h5 className="my-3">
        <button
          className="btn btn-danger mt-3"
          onClick={() => handleDeleteBooking(_id)}
        >
          Delete
        </button>
      </h5>
    </div>
  );
};

export default MyOrder;
