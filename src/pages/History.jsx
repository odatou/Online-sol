import { useEffect, useState } from "react";
import { getPayments, validatePayment } from "../services/paymentService";

function History() {

  const [payments, setPayments] = useState([]);

  const loadPayments = async () => {

    try {

      const data = await getPayments();

      setPayments(data);

    } catch (error) {

      console.log(error);

    }

  };

  const handleValidate = async (id) => {

    try {

      await validatePayment(id);

      await loadPayments();

    } catch (error) {

      console.log(error);

      alert("Erreur lors de la validation");

    }

  };

  useEffect(() => {

    loadPayments();

  }, []);

  return (

    <div className="container mt-5">

      <h2 className="text-primary mb-4">
        Historique des paiements
      </h2>

      <table className="table table-bordered table-hover">

        <thead className="table-primary">

          <tr>
            <th>Montant</th>
            <th>Méthode</th>
            <th>Date</th>
            <th>Statut</th>
          </tr>

        </thead>

        <tbody>

          {payments.length > 0 ? (

            payments.map((payment) => (

              <tr key={payment.id}>

                <td>{payment.montant} HTG</td>

                <td>{payment.methodePaiement}</td>

                <td>
                  {new Date(payment.datePaiement).toLocaleString()}
                </td>

                <td>

                  {payment.statut === "PAYE" ? (

                    <span className="badge bg-success">
                      Payé
                    </span>

                  ) : (

                    <>
                      <span className="badge bg-warning text-dark me-2">
                        En attente
                      </span>

                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleValidate(payment.id)}
                      >
                        Valider
                      </button>
                    </>

                  )}

                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td colSpan="4" className="text-center">
                Aucun paiement trouvé.
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  );

}

export default History;