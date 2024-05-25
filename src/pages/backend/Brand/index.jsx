import React from "react";
import { FaTrash } from "react-icons/fa";
import Database from "../../../database.json";
import { Link } from "react-router-dom";

const Brand = () => {
  const brands = Database.brands;
  return (
    <div>
      <main>
        <div className="card mt-5">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <strong>Quản lý thương hiệu</strong>
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
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Tên Brand</th>
                      <th scope="col">Slug</th>
                      <th scope="col">Mô tả</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Chức năng</th>

                      <th scope="col">Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {brands &&
                      brands.length > 0 &&
                      brands.map(brands => {
                        return (
                          <tr key={brands.id}>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>{brands.name}</td>
                            <td>{brands.slug}</td>
                            <td>
                              <img src={{}} alt="" />
                            </td>
                            <td>{brands.status}</td>
                            <td>
                              <Link to={"/admin/brand/edit/" + brands.id}>
                                <FaTrash />
                              </Link>
                            </td>
                            <td>{brands.id}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Brand;
