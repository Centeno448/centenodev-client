const FetchSpinner = ({ subject }) => {
  return (
    <>
      <div className="row justify-content-center text-center text-white">
        <div className="spinner-border" role="status"></div>
        <p className="text-white">
          <b>Fetching {subject}...</b>
        </p>
      </div>
    </>
  );
};

export default FetchSpinner;
