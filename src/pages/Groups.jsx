import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GroupCard from "../components/GroupCard";

function Groups() {

  const navigate = useNavigate();

  const [groupes, setGroupes] = useState([]);


  useEffect(() => {

    const loadGroupes = async () => {

      try {

        const response = await fetch(
          "http://localhost:8080/api/groupes"
        );


        if (!response.ok) {
          throw new Error("Erreur récupération groupes");
        }


        const data = await response.json();

        console.log("GROUPES:", data);

        setGroupes(data);


      } catch(error) {

        console.log(error);

      }

    };


    loadGroupes();


  }, []);



  return (

    <div className="container mt-5">


      <div className="d-flex justify-content-between align-items-center mb-4">


        <h1 className="text-primary">
          Mes Groupes
        </h1>


        <button
          className="btn btn-primary"
          onClick={() => navigate("/create-group")}
        >
          Créer un groupe
        </button>


      </div>



      <div className="row g-4">


        {groupes.map((group) => (

          <div
            className="col-md-6"
            key={group.id}
          >


            <div className="card shadow p-4">


              <GroupCard

                id={group.id}

                name={group.nom}

                members={group.nombreMembres}

                amount={group.montantCotisation}

              />


            </div>


          </div>


        ))}


      </div>


    </div>

  );

}


export default Groups;