import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { login as loginApi } from "../services/authService";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleLogin = async (e) => {

    e.preventDefault();


    const user = {
      email,
      password
    };


    try {

      const result = await loginApi(user);

      console.log("Reponse API:", result);

      localStorage.setItem(
        "user",
        JSON.stringify(result)
      );

      alert("Connexion réussie");

      navigate("/dashboard");


    } catch (error) {

      console.log(error);

      alert("Email ou mot de passe incorrect");

    }

  };


  return (
    <div className="min-vh-100 d-flex flex-column">


      <div className="container mt-5 flex-grow-1">


        <div className="row justify-content-center">


          <div className="col-md-5">


            <div className="card shadow p-4">


              <h2 className="text-center text-primary mb-4">
                Connexion
              </h2>



              <form onSubmit={handleLogin}>


                <div className="mb-3">

                  <label className="form-label">
                    Email
                  </label>


                  <input

                    type="email"

                    className="form-control"

                    placeholder="Votre email"

                    value={email}

                    onChange={(e) => setEmail(e.target.value)}

                    required

                  />

                </div>




                <div className="mb-3">

                  <label className="form-label">
                    Mot de passe
                  </label>


                  <input

                    type="password"

                    className="form-control"

                    placeholder="Votre mot de passe"

                    value={password}

                    onChange={(e) => setPassword(e.target.value)}

                    required

                  />

                </div>




                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >

                  Se connecter

                </button>



                <p className="text-center mt-3">

                  Vous n'avez pas de compte ?


                  <button

                    type="button"

                    className="btn btn-link"

                    onClick={() => navigate("/register")}

                  >

                    Créer un compte

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


export default Login;