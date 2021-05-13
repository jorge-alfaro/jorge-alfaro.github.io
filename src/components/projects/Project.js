import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const Project = ({ title, url, id, pro }) => {
  const classes = useStyles();

  return (
    <div className="card-mb">
      <div className=" animate__animated animate__pulse ">
        <Card className={classes.root}>
          <CardActionArea>
            <Link to={{ pathname: `./projects/${id}`, state: pro }}>
              <CardMedia className={classes.media} image={url} title={title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
          <CardActions>
            <Link to={{ pathname: `./projects/${id}`, state: pro }}>
              <Button size="small" color="primary">
                see More
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
