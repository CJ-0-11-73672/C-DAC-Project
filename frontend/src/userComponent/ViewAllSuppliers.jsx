import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const ViewAllSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const getSuppliers = async () => {
      const allSuplliers = await retrieveAllSuppliers();
      if (allSuplliers) {
        setSuppliers(allSuplliers);
      }
    };

    getSuppliers();
  }, []);

  const retrieveAllSuppliers = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/supplier/all/"
    );
    console.log(response.data);
    return response.data;
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg border-color"
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header text-center bg-color custom-bg-text">
          <h2>All Suppliers</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-hover custom-bg-text text-center">
              <thead className="bg-color table-bordered border-color">
                <tr>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Email id</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody className="text-color">
                {suppliers.map((supplier) => {
                  return (
                    <tr>
                      <td>
                        <b>{supplier.firstName + " " + supplier.lastName}</b>
                      </td>
                      <td>
                        <b>{supplier.emailId}</b>
                      </td>
                      <td>
                        <b>{supplier.phoneNo}</b>
                      </td>
                      <td>
                        <b>
                          {supplier.address.street +
                            " " +
                            supplier.address.city +
                            " " +
                            supplier.address.pincode}
                        </b>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllSuppliers;
