/* eslint-disable */
import { useEffect, useRef, useContext } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
} from "@material-ui/core";
import Loading from "./Loading";
import { formatRelativeTime } from "./RelativeTime";
import { AppContext } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: 100,
    fontFamily: "cursive",
  },
  media: {
    height: 300,
    width: 470,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileMedia: {
    height: 300,
    width: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  end: {
    margin: 10,
  },
  card: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "purple",
  },
  advertCard: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "milk",
  },
}));

export function InfiniteScroll() {
  const {
    productList,
    setProductList,
    page,
    setPage,
    sort,
    hasMorePages,
    setHasMorePages,
  } = useContext(AppContext);
  const classes = useStyles();
  const mobile = useMediaQuery("(min-width:600px)");

  // add loader reference
  const loader = useRef(null);

  // here we handle what happens when user scrolls to Load More div
  // in this case we just increment page number
  const handleObserver = (entities) => {
    if (entities[0].isIntersecting) {
      setPage((_page) => _page + 1);
    }
  };

  useEffect(() => {
    if (hasMorePages) getProducts(page, sort);
  }, [page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    // initialize IntersectionObserver and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  const getProducts = async (page, sort) => {
    try {
      const data = await axios.get(
        `http://localhost:3000/api/products?_page=${page}&_limit=20&_sort=${sort}`
      );
      setProductList([...productList, ...data?.data]);
      setHasMorePages(data?.data.length > 0);
      console.log(hasMorePages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <div className="product-list">
        <Grid container direction="row" item xs={12} md={12}>
          {/* product grid */}
          {productList?.map((post, index) => (
            <div key={index} className="post">
              <Card variant="outlined" className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={mobile ? classes.media : classes.mobileMedia}
                  >
                    <p
                      style={{
                        fontSize: post.size,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {post.face}
                    </p>
                  </CardMedia>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{ color: "white" }}
                    >
                      $ {post.price / 100}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ color: "white" }}
                    >
                      {formatRelativeTime(post.date) === "Greater than 1 week"
                        ? post.date
                        : formatRelativeTime(post.date)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
          {/* advert card */}
          <Card variant="outlined" className={classes.advertCard}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`http://localhost:3000/ads/?r=${Math.floor(
                  Math.random() * 1000
                )}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {"A word from our sponsors"}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* loading animation */}
        {hasMorePages ? (
          <div className="loading" ref={loader}>
            <Loading />
          </div>
        ) : (
          <div>
            <h1 className={classes.end}>{"~ end of catalogue ~"}</h1>
          </div>
        )}
      </div>
    </div>
  );
}
