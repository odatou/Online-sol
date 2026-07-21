import { useNavigate } from "react-router-dom";

function GroupCard({ id, name, members, amount }) {

  const navigate = useNavigate();

  return (
    <div>

      <h3>{name}</h3>

      <p>Membres : {members}</p>

      <p>Cotisation : {amount} HTG</p>

      <button
        className="btn btn-outline-primary"
        onClick={() => navigate(`/groups/${id}`)}
      >
        Voir détail
      </button>

    </div>
  );
}

export default GroupCard;