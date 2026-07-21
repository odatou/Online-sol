function PaymentCard({ date, amount, status }) {
  return (
    <div>
      <h3>Paiement</h3>
      <p>Date : {date}</p>
      <p>Montant : {amount} HTG</p>
      <p>Statut : {status}</p>
    </div>
  );
}

export default PaymentCard;