import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getProfile, updateProfile } from "../services/userService";


function Profile() {


  const { user } = useAuth();


  const [profile, setProfile] = useState(null);


  const [nom, setNom] = useState("");

  const [telephone, setTelephone] = useState("");


  const [edit, setEdit] = useState(false);



  useEffect(()=>{


    const loadProfile = async()=>{


      try{


        const data = await getProfile(user.id);


        setProfile(data);


        setNom(data.nom);

        setTelephone(data.telephone || "");



      }catch(error){


        console.log(error);


      }


    };



    if(user){

      loadProfile();

    }



  },[user]);







  const handleUpdate = async()=>{


    try{


      const data = {


        nom: nom,

        telephone: telephone


      };



      await updateProfile(

        user.id,

        data

      );



      const refreshed = await getProfile(

        user.id

      );



      setProfile(refreshed);


      setNom(refreshed.nom);


      setTelephone(

        refreshed.telephone || ""

      );



      setEdit(false);



      alert(

        "Profil modifié avec succès"

      );



    }catch(error){


      console.log(error);



      alert(

        "Erreur modification profil"

      );


    }


  };








  if(!profile){


    return (

      <div className="container mt-5">

        <h3>Chargement...</h3>

      </div>

    );


  }







  return (


    <div className="container mt-5">


      <div className="row justify-content-center">



        <div className="col-md-6">



          <div className="card shadow p-4">





            <div className="text-center mb-4">



              <div

                className="rounded-circle bg-primary text-white mx-auto d-flex align-items-center justify-content-center"

                style={{

                  width:"100px",

                  height:"100px",

                  fontSize:"40px"

                }}

              >


                {profile.nom?.charAt(0)}


              </div>





              <h2 className="mt-3 text-primary">

                Mon Profil

              </h2>



            </div>









            <div className="mb-3">


              <h5>Nom :</h5>



              {

                edit ?



                <input

                  className="form-control"

                  value={nom}

                  onChange={(e)=>setNom(e.target.value)}

                />



                :



                <p className="text-muted">

                  {profile.nom}

                </p>



              }



            </div>









            <div className="mb-3">


              <h5>Email :</h5>



              <p className="text-muted">

                {profile.email}

              </p>



            </div>









            <div className="mb-3">


              <h5>Téléphone :</h5>




              {

                edit ?



                <input

                  className="form-control"

                  value={telephone}

                  onChange={(e)=>setTelephone(e.target.value)}

                />



                :



                <p className="text-muted">

                  {profile.telephone || "Non renseigné"}

                </p>



              }



            </div>









            <div className="mb-3">


              <h5>Statut :</h5>


              <p className="text-muted">

                Membre Online Sol

              </p>



            </div>









            <hr />



            <h4 className="text-primary">

              Mes statistiques

            </h4>





            <div className="mb-3">


              <h5>Total cotisé :</h5>


              <p className="text-success">

                {profile.totalCotise} HTG

              </p>


            </div>





            <div className="mb-3">


              <h5>Paiements validés :</h5>


              <p className="text-muted">

                {profile.paiementsValides}

              </p>


            </div>





            <div className="mb-3">


              <h5>Paiements en attente :</h5>


              <p className="text-muted">

                {profile.paiementsEnAttente}

              </p>


            </div>





            <div className="mb-3">


              <h5>Nombre de groupes :</h5>


              <p className="text-muted">

                {profile.nombreGroupes}

              </p>


            </div>









            {


              edit ?



              <button

                className="btn btn-success w-100"

                onClick={handleUpdate}

              >


                Enregistrer


              </button>



              :



              <button

                className="btn btn-primary w-100"

                onClick={()=>setEdit(true)}

              >


                Modifier profil


              </button>



            }



          </div>



        </div>



      </div>



    </div>


  );


}


export default Profile;