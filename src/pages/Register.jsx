import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { register } from "../services/authService";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    nom: "",
    email: "",
    telephone: "",
    password: ""
  });


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };


  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      await register(user);

      alert("Compte créé avec succès");

      navigate("/login");

    } catch (error) {

      console.log(error);
      alert("Erreur lors de la création du compte");

    }
  };


  return (
    <div className="min-vh-100 d-flex flex-column">

      <div className="container mt-5 flex-grow-1">

        <div className="row justify-content-center">

          <div className="col-md-5">

            <div className="card shadow p-4">

              <h2 className="text-center text-primary mb-4">
                Créer un compte
              </h2>


              <form onSubmit={handleRegister}>

                <div className="mb-3">
                  <label className="form-label">
                    Nom complet
                  </label>

                  <input
                    type="text"
                    name="nom"
                    className="form-control"
                    placeholder="Votre nom complet"
                    value={user.nom}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Votre email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    Téléphone
                  </label>

                  <input
                    type="text"
                    name="telephone"
                    className="form-control"
                    placeholder="Votre numéro"
                    value={user.telephone}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    Mot de passe
                  </label>

                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Créer un mot de passe"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />

                </div>


                <button type="submit" className="btn btn-primary w-100">
                  S'inscrire
                </button>


                <p className="text-center mt-3">

                  Vous avez déjà un compte ?

                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => navigate("/login")}
                  >
                    Connexion
                  </button>

                </p>


              </form>

            </div>

          </div>

        </div>

      </div>


      <Footer />

    </div>
  );
}

export default Register;