import image from "../../../assets/error.png";

function ErrorScreen({ onRetry = () => {} }) {
  return (
    <button
      className="cursor-pointer mt-4"
      onClick={onRetry}
      data-testid="error-screen"
    >
      <figure>
        <img src={image} alt="error" />
      </figure>
    </button>
  );
}

export default ErrorScreen;
