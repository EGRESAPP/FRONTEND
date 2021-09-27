import React, { Fragment, }from "react";
import "./style.scss";

import Logo from "../../Assets/Images/logo.png";
import LogoMobile from "../../Assets/Images/logo-mobile.png";

import Media from "react-media";
import { useHistory } from "react-router-dom";

import { 
  Col, 
  Container, 
  Row,  
} from 'mdbreact';

import{
  Button,
  Label,
  Input,
} from 'reactstrap'

export default function FooterSection (props) {
  const history = useHistory()
      return (
          <footer color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
             <Media
              queries={{
                small: "(max-width: 480px)",
                medium: "(min-width: 481px) and ((max-width: 1024px))",
                large: "(min-width: 1025px)",
              }}
            >
              {(matches) => (
                <Fragment>
                  {matches.small && (
                    <div className="footer-container">               
                      <Container className="text-left">
                       <Row>
                          <Col md="6">
                              <div className="logo" onClick={() => history.push("/")}>
                                <img src={Logo} alt="logo" title="Egresapp"/>
                              </div>
                          </Col>
                          <hr className="clearfix w-100 d-md-none" />
                          <Col md="2">
                              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">INFORMACION</h5>
                              <ul className="list-unstyled">
                                  <li><Button href="#!">about us</Button></li>
                                  <li><Button href="#!">busquedas</Button></li>
                              </ul>
                          </Col>
                          <hr className="clearfix w-100 d-md-none" />
                          <Col md="2">
                              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">COMUNIDAD</h5>
                              <ul className="list-unstyled">
                                  <li><Button href="#!">egresados</Button></li>
                              </ul>
                          </Col>
                          <hr className="clearfix w-100 d-md-none"/>
                          <Col md="2">
                              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">SERVICIOS</h5>
                              <ul className="list-unstyled">
                                  <li><Button href="#!">empleos</Button></li>
                                  <li><Button href="#!">eventos</Button></li>
                              </ul>
                          </Col>
                          <hr className="clearfix w-100 d-md-none" />
                          <Col md="2">
                              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">CONTACTANOS</h5>
                              <ul className="list-unstyled">
                                  <li><Button href="#!">52-5555555555</Button></li>
                                  <li><Button href="#!">correo@gmail.com</Button></li>
                              </ul>
                          </Col>
                        </Row>
                      </Container>
                      <hr />
                      <div className="text-center py-3">
                        <ul className="list-unstyled list-inline mb-0">
                            <li className="list-inline-item">
                                  <h5 className="mb-1">Register for free</h5>
                            </li>
                            <li className="list-inline-item"><Button href="#" className="btn btn-danger btn-rounded">Sign up!</Button></li>
                        </ul>
                      </div>
                      <hr />
                      <div className="text-center">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item"><Button className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></Button></li>
                            <li className="list-inline-item"><Button className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></Button></li>
                            <li className="list-inline-item"><Button className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></Button></li>
                            <li className="list-inline-item"><Button className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></Button></li>
                            <li className="list-inline-item"><Button className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></Button></li>
                        </ul>
                      </div>
                      <div className="footer-copyright text-center">
                            <Container fluid>
                                &copy; {(new Date().getFullYear())} Copyright: <Button href="https://www.MDBootstrap.com"> MDBootstrap.com </Button>
                            </Container>
                      </div>
                    </div>            
                  )}
                  {matches.medium && (
                    <div className="footer-container">               
                    <Container className="text-left">
                     <Row>
                        <Col md="6">
                            <div className="logo" onClick={() => history.push("/")}>
                              <img src={LogoMobile} alt="logo" title="Egresapp"/>
                            </div>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                        <Label for="correo" className="control-Label">subscribe</Label>
                              <Input type="correo" className="form-control" id="correo" placeholder="ingresa tu correo"/>
                              <Button type="submit" className="btn btn-primary">ENVIAR</Button>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">INFORMACION</h5>
                            <ul className="list-unstyled">
                                <li><Button href="#!">about us</Button></li>
                                <li><Button href="#!">busquedas</Button></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">COMUNIDAD</h5>
                            <ul className="list-unstyled">
                                <li><Button href="#!">egresados</Button></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none"/>
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">SERVICIOS</h5>
                            <ul className="list-unstyled">
                                <li><Button href="#!">empleos</Button></li>
                                <li><Button href="#!">eventos</Button></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">CONTACTANOS</h5>
                            <ul className="list-unstyled">
                                <li><Button href="#!">52-5555555555</Button></li>
                                <li><Button href="#!">correo@gmail.com</Button></li>
                            </ul>
                        </Col>
                      </Row>
                    </Container>
                    <hr />
                    <div className="text-center py-3">
                      <ul className="list-unstyled list-inline mb-0">
                          <li className="list-inline-item">
                                <h5 className="mb-1">Register for free</h5>
                          </li>
                          <li className="list-inline-item"><Button href="#" className="btn btn-danger btn-rounded">Sign up!</Button></li>
                      </ul>
                    </div>
                    <hr />
                    <div className="text-center">
                      <ul className="list-unstyled list-inline">
                          <li className="list-inline-item"><Button className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></Button></li>
                          <li className="list-inline-item"><Button className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></Button></li>
                          <li className="list-inline-item"><Button className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></Button></li>
                          <li className="list-inline-item"><Button className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></Button></li>
                          <li className="list-inline-item"><Button className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></Button></li>
                      </ul>
                    </div>
                    <div className="footer-copyright text-center">
                          <Container fluid>
                              &copy; {(new Date().getFullYear())} Copyright: <Button href="https://www.MDBootstrap.com"> MDBootstrap.com </Button>
                          </Container>
                    </div>
                  </div>
                  )}
                  {matches.large && (
                    <div className="footer-container">               
                    <Container className="text-left">
                     <Row>
                        <Col md="6">
                            <div className="logo" onClick={() => history.push("/")}>
                              <img src={LogoMobile} alt="logo" title="Egresapp"/>
                            </div>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                        <Label for="correo" className="control-Label">subscribe</Label>
                              <Input type="correo" className="form-control" id="correo" placeholder="ingresa tu correo"/>
                              <Button type="submit" className="btn btn-primary">ENVIAR</Button>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">INFORMACION</h5>
                            <ul className="list-unstyled">
                                <li><Button href="#!">about us</Button></li>
                                <li><Button href="#!">busquedas</Button></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">COMUNIDAD</h5>
                            <ul className="list-unstyled">
                                <li><Button href="#!">egresados</Button></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none"/>
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">SERVICIOS</h5>
                            <ul className="list-unstyled">
                                <li><Button href="#!">empleos</Button></li>
                                <li><Button href="#!">eventos</Button></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">CONTACTANOS</h5>
                            <ul className="list-unstyled">
                                <li><Button href="#!">52-5555555555</Button></li>
                                <li><Button href="#!">correo@gmail.com</Button></li>
                            </ul>
                        </Col>
                      </Row>
                    </Container>
                    <hr />
                    <div className="text-center py-3">
                      <ul className="list-unstyled list-inline mb-0">
                          <li className="list-inline-item">
                                <h5 className="mb-1">Register for free</h5>
                          </li>
                          <li className="list-inline-item"><Button href="#" className="btn btn-danger btn-rounded">Sign up!</Button></li>
                      </ul>
                    </div>
                    <hr />
                    <div className="text-center">
                      <ul className="list-unstyled list-inline">
                          <li className="list-inline-item"><Button className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></Button></li>
                          <li className="list-inline-item"><Button className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></Button></li>
                          <li className="list-inline-item"><Button className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></Button></li>
                          <li className="list-inline-item"><Button className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></Button></li>
                          <li className="list-inline-item"><Button className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></Button></li>
                      </ul>
                    </div>
                    <div className="footer-copyright text-center">
                          <Container fluid>
                              &copy; {(new Date().getFullYear())} Copyright: <Button href="https://www.MDBootstrap.com"> MDBootstrap.com </Button>
                          </Container>
                    </div>
                  </div>
                  )}
                </Fragment>  
              )}
            </Media>
          </footer>
      );
  }


