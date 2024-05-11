"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

function MyProfile() {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.auth.user.currentUser);
    const originaluser = JSON.parse(loggedInUser);
    const userId = originaluser._id;

    const handleUpdate = () => {
        console.log("Update button clicked");
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            {originaluser && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                        marginTop: "20px",
                    }}
                >
                    <img
                        src={originaluser.img}
                        alt={originaluser.username}
                        style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            marginRight: "20px",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                        }}
                    >
                        <p style={{ fontSize: "1.2rem" }}>
                            <strong>Username:</strong> {originaluser.username}
                        </p>
                        <p style={{ fontSize: "1.2rem" }}>
                            <strong>Email:</strong> {originaluser.email}
                        </p>
                        <p style={{ fontSize: "1.2rem" }}>
                            <strong>Country:</strong> {originaluser.country}
                        </p>
                        <p style={{ fontSize: "1.2rem" }}>
                            <strong>Phone:</strong> {originaluser.phone}
                        </p>
                        <p style={{ fontSize: "1.2rem" }}>
                            <strong>Description:</strong> {originaluser.desc}
                        </p>
                        {originaluser.isSeller && (
                            <p style={{ fontSize: "1.2rem" }}>
                                <strong>I am a Seller</strong>
                            </p>
                        )}
                    </div>
                </div>
            )}



<section className="vh-100" style="background-color: #f4f5f7;">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0">
        <div className="card mb-3" style="border-radius: .5rem;">
          <div className="row g-0">
            <div className="col-md-4 gradient-custom text-center text-white"
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" className="img-fluid my-5" style="width: 80px;" />
              <h5>Marie Horwitz</h5>
              <p>Web Designer</p>
              <i className="far fa-edit mb-5"></i>
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h6>Information</h6>
                <hr className="mt-0 mb-4">
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">info@example.com</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">123 456 789</p>
                  </div>
                </div>
                <h6>Projects</h6>
                <hr className="mt-0 mb-4">
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Recent</h6>
                    <p className="text-muted">Lorem ipsum</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Most Viewed</h6>
                    <p className="text-muted">Dolor sit amet</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                  <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                  <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            {/* <button
                onClick={handleUpdate}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                }}
            >
                Update
            </button> */}
        </div>
    );
}

export default MyProfile;
