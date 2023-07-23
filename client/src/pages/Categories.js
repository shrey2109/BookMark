import React, { useState, useEffect } from "react";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout>
      <div className="container">
        <div className="row">
          {categories?.map((c) => (
            <div className="col-md-6 gx-3 gy-5" key={c._id}>
                <Link to={`/category/${c.slug}`} className="btn btn-outline-warning">{c.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
