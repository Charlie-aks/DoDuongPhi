import React from 'react'
import { FaTrash } from 'react-icons/fa';
import Database from "../../../database.json";
import { Link } from 'react-router-dom';

const Menu = () => {
  const menus = Database.menus;
  return (
    <div>
      <main>
        <div className="card mt-5">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <strong>Quản lý liên hệ</strong>
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
                      <th scope="col">Tên Contact</th>
                      <th scope="col">Slug</th>
                      <th scope="col">Mô tả</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Chức năng</th>

                      <th scope="col">Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menus &&
                      menus.length > 0 &&
                      menus.map((menus) => {
                        return (
                          <tr key={menus.id}>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>{menus.name}</td>
                            <td>{menus.slug}</td>
                            <td><img src={menus.image} alt="" /></td>
                            <td>{menus.status}</td>
                            <td>
                              <Link to={"/admin/menus/edit/" + menus.id}>
                                <FaTrash />
                              </Link>
                            </td>
                            <td>{menus.id}</td>
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
  )
}

export default Menu
