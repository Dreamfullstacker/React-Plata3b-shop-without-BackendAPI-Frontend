import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Headertwo";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Instagram from "../layouts/Instagram";
import Footer from "../layouts/Footer";
import Content from "../sections/product-single/Content";

const pagelocation = "Product Single";

class Productsingle extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Plata3b | {pagelocation}</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
        <Content productId={this.props.match.params.id} />
        <Instagram classname={{ style: "secondary-bg" }} />
        <Footer footer={{ style: "", logo: "assets/img/logo.png" }} />
      </Fragment>
    );
  }
}

export default Productsingle;
