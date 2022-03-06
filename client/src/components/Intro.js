import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "cursive",
    margin: 20,
    marginTop: 100,
  },
  advert: {
    height: "250px",
    background: "#eee",
    maxWidth: "800px",
  },
  imageStyle: {
    width: "100%",
    height: "250px",
  },
}));

function Intro() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header>
        <h1>Products Grid</h1>
        <p>
          Here you're sure to find a bargain on some of the finest ascii
          available to purchase. Be sure to peruse our selection of ascii faces
          in an exciting range of sizes and prices.
        </p>
        <p>But first, a word from our sponsors:</p>
        <div className={classes.advert}>
          <img
            className={classes.imageStyle}
            src={`http://localhost:3000/ads/?r=${Math.floor(
              Math.random() * 1000
            )}`}
            alt="Advert"
          />
        </div>
      </header>
    </div>
  );
}

export default Intro;
