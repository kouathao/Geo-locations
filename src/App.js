import React, { useEffect, useState } from "react";
import { products as dataProduct } from "./utils/data";
import AppleImage from "./assets/apple-logo.png";
import GoogleImage from "./assets/google.png";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filterProductCategory, setFilterProductCategory] = useState("All");

  const handleclick = (lat, lng) => {
    window.open(`http://maps.google.com/maps?t=k&q=${lat},${lng}`);
  };

  const handleClickApple = (lat, lng) => {
    window.open(`http://maps.apple.com/?t=k&q=${lat},${lng}`);
  };

  const handleOnCategoryClicked = (event, category) => {
    event.preventDefault();
    setFilterProductCategory(category);
  };

  useEffect(() => {
    // set products with data
    setProducts(dataProduct);
  }, []);

  return (
    <div className="wrapper">
      <div className="inner-wrap">
        <div className="row">
          <ul id="project-gallery-post-nav">
            <li>
              <a
                href="!#"
                onClick={(event) => handleOnCategoryClicked(event, "All")}
              >
                All Products
              </a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-ec_store menu-item-898">
              <a
                href="!#"
                onClick={(event) => handleOnCategoryClicked(event, "Garden")}
              >
                Garden &amp; Lawn Soil
              </a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-ec_store menu-item-899">
              <a
                href="!#"
                onClick={(event) => handleOnCategoryClicked(event, "Mulch")}
              >
                Mulch
              </a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-ec_store current-menu-item menu-item-900">
              <a
                href="!#"
                onClick={(event) => handleOnCategoryClicked(event, "Rock")}
              >
                Rock &amp; Road Base
              </a>
            </li>
          </ul>

          <section id="content" style={{ marginTop: 50 }}>
            <article className="post-85 page type-page status-publish hentry">
              <section className="entry-content">
                <section className="ec_product_page" id="ec_product_page">
                  <ul id="ec_store_product_list">
                    {products
                      .filter((item) => {
                        if (filterProductCategory === "All") {
                          return true;
                        }
                        return item.category === filterProductCategory;
                      })
                      .map((product, index) => (
                        <li key={index} className="ec_product_li">
                          <div
                            // style="padding:0px; margin:auto; vertical-align:middle;"
                            className="ec_product_type1"
                          >
                            <div className="ec_image_container_none ec_dynamic_image_height">
                              <div className="ec_product_image_display_type ec_single_grow_container ec_dynamic_image_height">
                                <div className="ec_dynamic_image_height ec_product_image_container ">
                                  <div className="ec_dynamic_image_height ec_product_image_1 ">
                                    <img
                                      src={product.productImage}
                                      alt={product.productName}
                                      className="skip-lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <h3 className="ec_product_title_type1">
                              {product.productName}
                            </h3>

                            {/* <div className="ec_price_container_type1">
                      <span className="ec_price_type1">Location:</span>{" "}
                      <span className="custom-per">{product.location}</span>
                    </div> */}

                            <div className="ec_product_addtocart_container">
                              <span className="ec_product_addtocart ec_product_addtocart_no_margin">
                                <a
                                  href="!#"
                                  onClick={() =>
                                    handleclick(product.lat, product.lng)
                                  }
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  Navigate{" "}
                                  <img
                                    src={GoogleImage}
                                    width={25}
                                    alt="apple icon"
                                    style={{ marginLeft: 10 }}
                                  />
                                </a>
                              </span>
                            </div>
                            <div className="ec_product_addtocart_container">
                              <span className="ec_product_addtocart ec_product_addtocart_no_margin">
                                <a
                                  href="!#"
                                  onClick={() =>
                                    handleClickApple(product.lat, product.lng)
                                  }
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  Navigate{" "}
                                  <img
                                    src={AppleImage}
                                    width={25}
                                    alt="apple icon"
                                    style={{ marginLeft: 10 }}
                                  />
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </section>
              </section>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
