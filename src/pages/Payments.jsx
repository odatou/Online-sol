import { useEffect, useState } from "react";
import { createPayment } from "../services/paymentService";

function Payments() {

  const [montant, setMontant] = useState("");
  const [methode, setMethode] = useState("MonCash");
  const [userId] = useState(1); // Ranplase pita ak user ki konekte a
  const [groupeSolId, setGroupeSolId] = useState("");
  const [groups, setGroups] = useState([]);

  useEffect(() => {

    const loadGroups = async () => {

      try {

        const response = await fetch(
          "http://localhost:8080/api/groupes"
        );

        const data = await response.json();

        setGroups(data);

      } catch (error) {

        console.log(error);

      }

    };

    loadGroups();

  }, []);

  const handlePayment = async () => {

    if (!montant || !groupeSolId) {

      alert("Veuillez remplir tous les champs.");

      return;

    }

    try {

      const payment = {

        montant: Number(montant),

        methodePaiement: methode,

        userId: Number(userId),

        groupeSolId: Number(groupeSolId)

      };

      await createPayment(payment);

      alert("Paiement envoyé avec succès.");

      setMontant("");

      setGroupeSolId("");

      setMethode("MonCash");

    } catch (error) {

      console.log(error);

      alert("Erreur lors du paiement.");

    }

  };

  return (

    <div className="container mt-5">

      <h2 className="text-primary mb-4">
        Effectuer un paiement
      </h2>

      <div className="card shadow p-4">

        <div className="mb-3">

          <label className="form-label">
            Montant
          </label>

          <input
            type="number"
            className="form-control"
            placeholder="Montant"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Méthode de paiement
          </label>

          <select
            className="form-control"
            value={methode}
            onChange={(e) => setMethode(e.target.value)}
          >

            <option value="MonCash">
              MonCash
            </option>

            <option value="NatCash">
              NatCash
            </option>

          </select>

        </div>

        <div className="mb-4">

          <label className="form-label">
            Groupe Sol
          </label>

          <select
            className="form-control"
            value={groupeSolId}
            onChange={(e) => setGroupeSolId(e.target.value)}
          >

            <option value="">
              -- Choisir un groupe --
            </option>

            {groups.map((group) => (

              <option
                key={group.id}
                value={group.id}
              >
                {group.nom} - {group.montantCotisation} HTG
              </option>

            ))}

          </select>

        </div>

        <button
          className="btn btn-primary"
          onClick={handlePayment}
        >
          Payer maintenant
        </button>

      </div>

    </div>

  );

}

export default Payments;