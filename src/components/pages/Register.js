import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Headertwo";
import Instagram from "../layouts/Instagram";
import Footer from "../layouts/Footer";
import Content from "../sections/register/Content";

const pagelocation = "Register";

class Register extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Plata3b | {pagelocation}</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Content />
        <Instagram classname={{ style: "secondary-bg" }} />
        <Footer footer={{ style: "", logo: "assets/img/logo.png" }} />
      </Fragment>
    );
  }
}

export default Register;
