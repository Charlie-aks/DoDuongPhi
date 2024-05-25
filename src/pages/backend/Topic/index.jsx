import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaEdit } from "react-icons/fa";

const Topic = () => {
const topics = database.topics;
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
                  <th>Tên danh mục</th>
                  <th>slug</th>
                  <th>chức năng</th>
                  <th>mô tả</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {topics &&
                  topics.length > 0 &&
                  topics.map((topic) => {
                    return (
                      <tr key={topic.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={topic.image} alt={topic.image} />
                        </td>
                        <td>{topic.name}</td>
                        <td>{topic.slug}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/topic/edit/" + topic.id}
                          >
                          <FaEdit />
                        </Link>

                        <button className="btn btn-danger me-1">
                          <FaTrash/>
                        </button>
                        </td>
                        <td>{topic.description}</td>
                        <td>{topic.id}</td>
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

export default Topic;