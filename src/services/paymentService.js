const API_URL = "http://localhost:8080/api/paiements";

// Récupérer l'historique des paiements
export async function getPayments() {

  const response = await fetch(`${API_URL}/history`);

  if (!response.ok) {
    throw new Error("Erreur récupération historique");
  }

  return await response.json();

}

// Valider un paiement
export async function validatePayment(id) {

  const response = await fetch(`${API_URL}/${id}/valider`, {
    method: "PUT"
  });

  if (!response.ok) {
    throw new Error("Erreur validation paiement");
  }

  return await response.json();

}

// Créer un paiement
export async function createPayment(payment) {

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payment)
  });

  if (!response.ok) {
    throw new Error("Erreur création paiement");
  }

  return await response.json();

}