import React, { Component } from 'react';
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg";
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import About from "../Common/About";
import Team from "../Common/Team";

class Home extends Component{
    render(){
        return(
            <div>
          <Header
          title="Welcome to the studio"
          subtitle="nice to meet"
          buttonText="tell me more"
          link="/services"  
          showButton={true}
          image={image}
          ></Header>
          <Services></Services>
          <Portfolio></Portfolio>
          <About></About>
          <Team></Team>
            </div>
        )
    }
}

export default Home;