import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGroup } from "../services/groupService";

function CreateGroup() {

  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [montant, setMontant] = useState("");
  const [membres, setMembres] = useState("");
  const [frequence, setFrequence] = useState("Hebdomadaire");
  const [dateDebut, setDateDebut] = useState("");
  const [penaliteRetard, setPenaliteRetard] = useState("");

  const handleCreate = async (e) => {

    e.preventDefault();

    const group = {
      nom: nom,
      montantCotisation: Number(montant),
      nombreMembres: Number(membres),
      frequence: frequence,
      dateDebut: dateDebut,
      penaliteRetard: Number(penaliteRetard)
    };

    try {

      const result = await createGroup(group);

      console.log(result);

      alert("Groupe créé avec succès");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Erreur création groupe");

    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h2 className="text-primary text-center mb-4">
              Créer un groupe
            </h2>

            <form onSubmit={handleCreate}>

              <div className="mb-3">
                <label className="form-label">Nom du groupe</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: Sol Famille"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Montant</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Ex: 1000 HTG"
                  value={montant}
                  onChange={(e) => setMontant(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Nombre de membres</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Ex: 10"
                  value={membres}
                  onChange={(e) => setMembres(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Fréquence</label>
                <select
                  className="form-select"
                  value={frequence}
                  onChange={(e) => setFrequence(e.target.value)}
                >
                  <option>Hebdomadaire</option>
                  <option>Mensuel</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Date de début</label>
                <input
                  type="date"
                  className="form-control"
                  value={dateDebut}
                  onChange={(e) => setDateDebut(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Pénalité de retard</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Ex: 100"
                  value={penaliteRetard}
                  onChange={(e) => setPenaliteRetard(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Créer le groupe
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CreateGroup;