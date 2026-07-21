import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  joinGroup,
  deleteMember
} from "../services/participationService";



function GroupDetails(){


  const { id } = useParams();

  const navigate = useNavigate();



  const [group,setGroup] = useState(null);

  const [members,setMembers] = useState([]);

  const [email,setEmail] = useState("");





  const loadData = async()=>{


    try{


      // Charger groupe

      const groupResponse = await fetch(
        `http://localhost:8080/api/groupes/${id}`
      );


      const groupData = await groupResponse.json();


      setGroup(groupData);





      // Charger membres

      const membersResponse = await fetch(
        `http://localhost:8080/api/participations/groupe/${id}`
      );


      const membersData = await membersResponse.json();


      setMembers(membersData);



    }catch(error){


      console.log(error);


    }


  };






  useEffect(()=>{


    if(id){

      loadData();

    }


  },[id]);







  // Ajouter membre


  const handleJoin = async()=>{


    try{


      await joinGroup(
        email,
        id
      );



      alert(
        "Membre ajouté avec succès"
      );



      setEmail("");



      loadData();



    }catch(error){


      alert(
        "Erreur : email incorrect ou membre déjà dans le groupe"
      );


    }


  };







  // Supprimer membre


  const handleDelete = async(memberId)=>{



    const confirmDelete = window.confirm(
      "Voulez-vous supprimer ce membre ?"
    );



    if(!confirmDelete){

      return;

    }






    try{


      await deleteMember(
        memberId
      );



      alert(
        "Membre supprimé"
      );



      loadData();




    }catch(error){


      alert(
        "Erreur suppression membre"
      );


    }


  };









  if(!group){


    return(

      <div className="container mt-5">

        <h3>
          Chargement...
        </h3>

      </div>

    );


  }







  return(


    <div className="container mt-5">





      <button

        className="btn btn-secondary mb-3"

        onClick={()=>navigate("/groups")}

      >

        Retour

      </button>







      <div className="card shadow p-4">





        <h2 className="text-primary">

          {group.nom}

        </h2>



        <hr/>






        <p>

          <b>Cotisation :</b>

          {" "}

          {group.montantCotisation} HTG

        </p>






        <p>

          <b>Fréquence :</b>

          {" "}

          {group.frequence}

        </p>






        <p>

          <b>Date début :</b>

          {" "}

          {group.dateDebut}

        </p>







        <p>

          <b>Date fin :</b>

          {" "}

          {group.dateFin}

        </p>







        <p>

          <b>Membres :</b>

          {" "}

          {members.length} / {group.nombreMembres}

        </p>







        <p>

          <b>Total groupe :</b>

          {" "}

          {group.montantTotal} HTG

        </p>






        <p>

          <b>Statut :</b>

          {" "}

          {group.statut}

        </p>







        <hr/>







        {/* Ajouter membre */}



        <div className="card p-3 mb-4">



          <h4 className="text-primary">

            Inviter un membre

          </h4>






          <input

            type="email"

            className="form-control mb-2"

            placeholder="Email du membre"

            value={email}

            onChange={(e)=>setEmail(e.target.value)}

          />






          <button

            className="btn btn-primary"

            onClick={handleJoin}

          >

            Ajouter membre

          </button>




        </div>









        <h4 className="text-primary">

          Liste des membres

        </h4>









        <table className="table table-bordered mt-3">



          <thead>


            <tr>

              <th>Nom</th>

              <th>Email</th>

              <th>Role</th>

              <th>Statut</th>

              <th>Action</th>


            </tr>


          </thead>







          <tbody>



          {members.map((member)=>(



            <tr key={member.id}>


              <td>

                {member.user?.nom}

              </td>





              <td>

                {member.user?.email}

              </td>





              <td>

                {member.role}

              </td>





              <td>


                {member.statut === "ACTIF" ? (


                  <span className="badge bg-success">

                    ACTIF

                  </span>



                ):(


                  <span className="badge bg-warning">

                    {member.statut}

                  </span>


                )}



              </td>








              <td>



                <button

                  className="btn btn-danger btn-sm"

                  onClick={()=>handleDelete(member.id)}

                >

                  Supprimer

                </button>



              </td>






            </tr>



          ))}



          </tbody>






        </table>







      </div>







    </div>


  );


}



export default GroupDetails;