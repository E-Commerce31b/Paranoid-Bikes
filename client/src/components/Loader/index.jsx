import "./index.css";

export default function Loader({ loading }) {
  const isLoading = loading === "loading";

  return (
    isLoading && (
      <div className="loader-container">
        <div className="load-container">
          <div className="linespinner"></div>
        </div>
      </div>
    )
  );
}
