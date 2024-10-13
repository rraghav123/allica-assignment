import LoaderGif from "/src/assets/loader.gif";

function Loader() {
  return (
    <div className="h-full">
      <figure className="flex justify-center items-center h-full">
        <img src={LoaderGif} alt="loader" className="h-64" />
      </figure>
    </div>
  );
}

export default Loader;
