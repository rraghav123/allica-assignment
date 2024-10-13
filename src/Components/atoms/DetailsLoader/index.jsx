import LoaderGif from "/src/assets/loader2.gif";

function Loader() {
  return (
    <div>
      <figure>
        <img src={LoaderGif} alt="" width={50} data-testid="atom-loader-img" />
      </figure>
    </div>
  );
}

export default Loader;
