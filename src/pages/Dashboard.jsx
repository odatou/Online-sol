import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGroups } from "../services/groupService";

function Dashboard() {

  const navigate = useNavigate();

  const [groups, setGroups] = useState([]);
  const [totalEpargne, setTotalEpargne] = useState(0);
  const [prochainPaiement, setProchainPaiement] = useState(0);

  useEffect(() => {
    loadGroups();
  }, []);

  const loadGroups = async () => {

    try {

      const data = await getGroups();

      setGroups(data);

      const total = data.reduce(
        (sum, group) => sum + Number(group.montantCotisation || 0),
        0
      );

      setTotalEpargne(total);

      if (data.length > 0) {
        setProchainPaiement(data[0].montantCotisation);
      }

    } catch (error) {
      console.log(error);
    }

  };

  return (

    <div className="container mt-5">

      <h1 className="text-primary mb-4">
        Dashboard
      </h1>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h4>Mes Groupes</h4>
            <h2>{groups.length}</h2>
            <p className="text-muted">Groupes créés</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h4>Montant épargné</h4>
            <h2>{totalEpargne} HTG</h2>
            <p className="text-muted">Total économie</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h4>Prochain paiement</h4>
            <h2>{prochainPaiement} HTG</h2>
            <p className="text-muted">Paiement à venir</p>
          </div>
        </div>

      </div>

      <div className="mt-5">

        <button
          className="btn btn-primary me-3"
          onClick={() => navigate("/create-group")}
        >
          Créer un groupe
        </button>

        <button
          className="btn btn-success"
          onClick={() => navigate("/groups")}
        >
          Voir mes groupes
        </button>

      </div>

      <hr className="my-5"/>

      <h3 className="text-primary mb-4">
        Mes derniers groupes
      </h3>

      <div className="row">

        {
          groups.length === 0 ? (

            <div className="col-12">
              <div className="alert alert-warning">
                Aucun groupe créé.
              </div>
            </div>

          ) : (

            groups.map((group) => (

              <div
                className="col-md-4 mb-4"
                key={group.id}
              >

                <div className="card shadow h-100">

                  <div className="card-body">

                    <h4 className="text-primary">
                      {group.nom}
                    </h4>

                    <hr/>

                    <p>
                      <strong>Montant :</strong> {group.montantCotisation} HTG
                    </p>

                    <p>
                      <strong>Membres :</strong> {group.nombreMembres ?? 0}
                    </p>

                    <p>
                      <strong>Fréquence :</strong> {group.frequence}
                    </p>

                    <p>
                      <strong>Statut :</strong> {group.statut}
                    </p>

                    <button
                      className="btn btn-outline-primary w-100"
                      onClick={() => navigate(`/groups/${group.id}`)}
                    >
                      Voir détails
                    </button>

                  </div>

                </div>

              </div>

            ))

          )
        }

      </div>

    </div>

  );

}

export default Dashboard;