const FetchSpinner = ({ subject }) => {
  return (
    <>
      <div className="row justify-content-center text-center">
        <div className="spinner-border" role="status"></div>
        <p>
          <b>Fetching {subject}...</b>
        </p>
      </div>
    </>
  );
};

export default FetchSpinner;
