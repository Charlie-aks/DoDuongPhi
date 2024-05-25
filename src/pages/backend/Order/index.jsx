import React from "react";
import HeaderContent from "../../../layout/admin/HeaderContent";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import Database from "../../../database.json";

const Order = () => {
  const orders = Database.orders;
  return (
    <>
      <HeaderContent title="Quản lý đơn hàng" />
      <div className="row">
        <div className="col-md-3">...</div>
        <div className="col-md-9">
          <table className="table table-bordered table-hover">
            <thead>
              <tr className="text-capitalize">
                <th className="text-center">#</th>
                <th className="text-center">id</th>
                <th>User id</th>
                <th>Tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.length > 0 &&
                orders.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="text-center">{item.id}</td>
                    <td>{item.user_id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td style={{ width: "15%" }}>
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <Link
                          to={`/admin/orders/edit/${item.id}`}
                          className="btn btn-info text-white"
                        >
                          <FaRegEdit />
                        </Link>
                        <button className="btn btn-danger text-white">
                          <CiTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Order;
