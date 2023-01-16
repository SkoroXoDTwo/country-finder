import "./ErrorMessage.scss"

function ErrorMessage({ title, subtitle }) {
  return (
    <section className="error-message">
      <div className="error-message__container">
        <div className="error-message__img" />
        <h2 className="error-message__title">{title}</h2>
        <p className="error-message__subtitle">{subtitle}</p>
      </div>
    </section>);
}

export default ErrorMessage;
