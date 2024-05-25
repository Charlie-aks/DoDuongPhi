import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegTrashAlt } from "react-icons/fa";
import Database from "../../../database.json"
import { CiEdit } from "react-icons/ci";

const Product = () => {
  const products= Database.products;
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
                  {products && products.length>0 && products.map(products=>{
                    return (
                    <tr key={products.id}>
                      <td>
                        <input type="checkbox"></input>
                      </td>
                      <td>
                        <img src={products.link} alt={products.link} />
                      </td> 
                      <td>
                        {products.name}
                      </td>
                      <td>
                        {products.slug}
                      </td>
                      <td className='text-center'>
                      <Link className='btn btn-sm btn-info me-1'to={"/admin/products/edit/"+products.id}><CiEdit /></Link>
                        <button className='btn btn-sm btn-danger me-1'><FaRegTrashAlt /></button>
                      </td>
                      <td className='text-center'>
                        {products.id}
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

export default Product