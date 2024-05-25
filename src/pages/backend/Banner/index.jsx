import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegTrashAlt } from "react-icons/fa";
import Database from "../../../database.json"
import { CiEdit } from "react-icons/ci";

const Banner = () => {
  const banners = Database.banners;
  return (
    <div className='card'>
        <div className='card-header'>
            <div className="row">
              <div className="col-md-6">
                <strong>Quản lý danh mục</strong>
              </div>
              <div className="col-md-6 text-end">
                <Link to="/" className='btn btn-sm btn-danger'><FaRegTrashAlt />Thùng rác</Link>
              </div>
            </div>
        </div>
        <div className='card-body'>
          <div className="row">
            <div className="col-md-3">
              THIET KE FORM THEM
            </div>
            <div className="col-md-9">
              <table className='table table-border table-hover'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tên danh mục</th>
                    <th>Slug</th>
                    <th className='text-center' style={{width:"150px"}}>Chức Năng</th>
                    <th className='text-center' style={{width:"50px"}}>ID</th>
                  </tr>
                </thead>
                <tbody>
                  {banners && banners.length>0 && banners.map(banners=>{
                    return (
                    <tr key={banners.id}>
                      <td>
                        <input type="checkbox"></input>
                      </td>
                      <td>
                        <img src={banners.image} alt={banners.image} />
                      </td> 
                      <td>
                        {banners.name}
                      </td>
                      <td>
                        {banners.slug}
                      </td>
                      <td className='text-center'>
                      <Link className='btn btn-sm btn-info me-1'to={"/admin/banner/edit/"+banners.id}><CiEdit /></Link>
                        <button className='btn btn-sm btn-danger me-1'><FaRegTrashAlt /></button>
                      </td>
                      <td className='text-center'>
                        {banners.id}
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
  )
}

export default Banner