function PortalCard({ icon, title, features, buttonText, onAccess }) {
  return (
    <article className="role-card">
      <div className="role-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <ul className="feature-bullets">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>

      <button
        className="btn-portal student-bg"
        onClick={onAccess}
      >
        {buttonText}
      </button>
    </article>
  );
}

export default PortalCard;