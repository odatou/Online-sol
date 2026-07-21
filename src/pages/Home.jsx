import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {

  const navigate = useNavigate();

  return (
    <div>

      {/* HERO */}
      <section className="bg-primary text-white py-1 sticky-top shadow-sm">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-7">

              <h1 className="display-6 fw-bold">Online Sol</h1>

              <h2>La gestion moderne de vos tontines</h2>

              <p className="lead mt-4">
                Créez, gérez et suivez vos groupes de solidarité facilement grâce à une plateforme simple, rapide et sécurisée.
              </p>

              <button className="btn btn-light me-2" onClick={() => navigate("/register")}>
                Créer un compte
              </button>

              <button className="btn btn-outline-light " onClick={() => navigate("/login")}>
                Connexion
              </button>

            </div>


            <div className="col-md-5 mt-5 ">

              <div id="pubCarousel" className="carousel slide shadow rounded overflow-hidden" data-bs-ride="carousel" data-bs-interval="3000">

                <div className="carousel-inner">

                  <div className="carousel-item active">

                    <img src="/images/pub1.jpg" className="d-block w-100" style={{height:"230px",objectFit:"cover"}} alt="Online Sol"/>

                    <div className="carousel-caption bg-dark bg-opacity-50 rounded p-2">

                      <h5>💰 Gestion facile</h5>

                      <p>Gérez vos tontines rapidement avec Online Sol.</p>

                      <button className="btn btn-light" onClick={() => navigate("/register")}>
                        Commencer
                      </button>

                    </div>

                  </div>


                  <div className="carousel-item">

                    <img src="/images/pub2.jpg" className="d-block w-100" style={{height:"230px",objectFit:"cover"}} alt="Sécurité"/>

                    <div className="carousel-caption bg-dark bg-opacity-50 rounded p-2">

                      <h5>🔒 Sécurité garantie</h5>

                      <p>Vos informations sont protégées.</p>

                    </div>

                  </div>


                  <div className="carousel-item">

                    <img src="/images/pub3.jpg" className="d-block w-100" style={{height:"230px",objectFit:"cover"}} alt="Groupes"/>

                    <div className="carousel-caption bg-dark bg-opacity-50 rounded p-2">

                      <h5>👥 Gestion des groupes</h5>

                      <p>Créez vos groupes et ajoutez vos membres.</p>

                    </div>

                  </div>

                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#pubCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>


                <button className="carousel-control-next" type="button" data-bs-target="#pubCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>


              </div>

            </div>

          </div>

        </div>

      </section>


      {/* A PROPOS */}

      <section className="py-5">

        <div className="container text-center">

          <h2 className="text-primary mb-4">
            À propos de Online Sol
          </h2>

          <p className="lead">
            Online Sol est une plateforme qui permet de digitaliser la gestion des tontines.
            Les utilisateurs peuvent créer des groupes, gérer les membres, suivre les cotisations
            et effectuer leurs paiements facilement. </p>


        </div>

      </section>


      {/* FONCTIONNALITES */}

      <section className="bg-light py-5">

        <div className="container">

          <h2 className="text-center mb-5">
            Nos fonctionnalités
          </h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card shadow p-3 text-center">
                <h4>Gestion des groupes</h4>
                <p>Créez vos groupes et ajoutez facilement vos membres.</p>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card shadow p-3 text-center">
                <h4>Suivi des paiements</h4>
                <p>Suivez vos cotisations et vos transactions.</p>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card shadow p-3 text-center">
                <h4>Historique complet</h4>
                <p>Consultez toutes vos opérations facilement.</p>
              </div>
            </div>


          </div>

        </div>

      </section>

            {/* COMMENT ÇA MARCHE */}

            <section className="py-5">

              <div className="container">

                <h2 className="text-center mb-5">
                  Comment ça marche ?
                </h2>


                <div className="row text-center">


                  <div className="col-md-3">

                    <h1 className="text-primary">1</h1>

                    <h5>Créer un compte</h5>

                    <p>Inscrivez-vous rapidement.</p>

                  </div>


                  <div className="col-md-3">

                    <h1 className="text-primary">2</h1>

                    <h5>Créer un groupe</h5>

                    <p>Invitez vos membres.</p>

                  </div>


                  <div className="col-md-3">

                    <h1 className="text-primary">3</h1>

                    <h5>Cotiser</h5>

                    <p>Effectuez vos paiements.</p>

                  </div>


                  <div className="col-md-3">

                    <h1 className="text-primary">4</h1>

                    <h5>Recevoir votre tour</h5>

                    <p>Profitez de votre épargne.</p>

                  </div>


                </div>

              </div>

            </section>



            {/* SECURITE */}

            <section className="bg-light py-5">

              <div className="container">

                <div className="card shadow p-5 text-center">

                  <h2>
                    Sécurité et confiance
                  </h2>

                  <p className="lead">
                    Vos informations personnelles, vos groupes et vos transactions sont protégés.
                  </p>

                </div>

              </div>

            </section>



            {/* STATISTIQUES */}

            <section className="bg-primary text-white py-5">

              <div className="container">

                <div className="row text-center">


                  <div className="col-md-4">

                    <h1>500+</h1>

                    <p>Utilisateurs</p>

                  </div>


                  <div className="col-md-4">

                    <h1>100+</h1>

                    <p>Groupes créés</p>

                  </div>


                  <div className="col-md-4">

                    <h1>10000+</h1>

                    <p>Transactions</p>

                  </div>


                </div>

              </div>

            </section>



            <Footer />


          </div>
        );
      }


      export default Home;