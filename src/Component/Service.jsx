import React from "react";
import "./service.css";
import client from "../assets/icons/client.png";
import chantier from "../assets/icons/chantier.png";
import ingenieur from "../assets/icons/ingenieur.png";
import projet from "../assets/icons/projet.png";

function Service() {
  return (
    <div className="services">
      <h4 className="titleProjet">Nos Récent Projets</h4>
      <div className="bodyCard">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-4 col-lg-4 col-sm-12"
              style={{ marginBottom: "10px" }}
            >
              <div className="projetone carteall">
                <div className="cards">
                  <p>Salle Polyvalente</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-lg-4 col-sm-12"
              style={{ marginBottom: "10px" }}
            >
              <div className="projetwo carteall">
                <div className="cards ">
                  <p>Maison d'habitation</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-lg-4 col-sm-12 "
              style={{ marginBottom: "10px" }}
            >
              <div className="projettree carteall">
                <div className="cards">
                  <p>Maison commerciale</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-lg-4 col-sm-12 "
              style={{ marginBottom: "10px" }}
            >
              <div className="projetfour carteall">
                <div className="cards">
                  <p>Appartement</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-lg-4 col-sm-12 "
              style={{ marginBottom: "10px" }}
            >
              <div className="projetfive carteall">
                <div className="cards ">
                  <p>Décoration interne</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-lg-4 col-sm-12 "
              style={{ marginBottom: "10px" }}
            >
              <div className="projetsix carteall">
                <div className="cards ">
                  <p>Salle Terrase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div id="main">
     <div id="counts" class="counts">
        <div class="container">
          <div class="row counters">
            <div className="col-lg-3 col-6 text-center">
              <img src={projet} alt="execution" />
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>Projets en exécution</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <img src={client} alt="client" />
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>Clients</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <img src={ingenieur} alt="ingenieur" />
              <span
                data-purecounter-start="0"
                data-purecounter-end="1463"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>Ingenieur</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <img src={chantier} alt="chantier" />
              <span
                data-purecounter-start="0"
                data-purecounter-end="15"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>Chantiers</p>
            </div>
          </div>
        </div>
      </div>

     </div>
      <div id="team" className="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="member"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div className="pic">
                      <img
                        src="assets/img/team/team-1.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="member-info">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <p>
                        Explicabo voluptatem mollitia et repellat qui dolorum
                        quasi
                      </p>
                      <div class="social">
                        <a href="">
                          <i class="ri-twitter-fill"></i>
                        </a>
                        <a href="">
                          <i class="ri-facebook-fill"></i>
                        </a>
                        <a href="">
                          <i class="ri-instagram-fill"></i>
                        </a>
                        <a href="">
                          {" "}
                          <i class="ri-linkedin-box-fill"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                  <div
                    className="member"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div className="pic">
                      <img
                        src="assets/img/team/team-2.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="member-info">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <p>
                        Aut maiores voluptates amet et quis praesentium qui
                        senda para
                      </p>
                      <div className="social">
                        <a href="">
                          <i class="ri-twitter-fill"></i>
                        </a>
                        <a href="">
                          <i class="ri-facebook-fill"></i>
                        </a>
                        <a href="">
                          <i class="ri-instagram-fill"></i>
                        </a>
                        <a href="">
                          {" "}
                          <i class="ri-linkedin-box-fill"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mt-4">
                  <div
                    className="member"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div className="pic">
                      <img
                        src="assets/img/team/team-3.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="member-info">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <p>
                        Quisquam facilis cum velit laborum corrupti fuga rerum
                        quia
                      </p>
                      <div className="social">
                        <a href="">
                          <i class="ri-twitter-fill"></i>
                        </a>
                        <a href="">
                          <i class="ri-facebook-fill"></i>
                        </a>
                        <a href="">
                          <i class="ri-instagram-fill"></i>
                        </a>
                        <a href="">
                          {" "}
                          <i class="ri-linkedin-box-fill"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mt-4">
                  <div
                    className="member"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <div className="pic">
                      <img
                        src="assets/img/team/team-4.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="member-info">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <p>
                        Dolorum tempora officiis odit laborum officiis et et
                        accusamus
                      </p>
                      <div className="social">
                        <a href="">
                          <i class="ri-twitter-fill"></i>
                        </a>
                        <a href="">
                          <i class="ri-facebook-fill"></i>
                        </a>
                        <a href="">
                          <i class="ri-instagram-fill"></i>
                        </a>
                        <a href="">
                          {" "}
                          <i class="ri-linkedin-box-fill"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
