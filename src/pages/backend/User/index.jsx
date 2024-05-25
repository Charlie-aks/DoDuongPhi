import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaEdit } from "react-icons/fa";

const User = () => {
const users = database.users;
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quan li danh muc</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn danger">
              {" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">Thiet ke form them</div>
          <div className="col-md-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>chức năng</th>
                  <th>phone</th>
                  <th>chức quyền</th>
                  <th>địa chỉ</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.length > 0 &&
                  users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={user.image} alt={user.image} />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/user/edit/" + user.id}
                          >
                          <FaEdit />
                        </Link>

                        <button className="btn btn-danger me-1">
                          <FaTrash/>
                        </button>
                        </td>
                        <td>{user.phone}</td>
                        <td>{user.roles}</td>
                        <td>{user.address}</td>
                        <td>{user.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default User;