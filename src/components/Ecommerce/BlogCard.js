import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
// import { AppsSharp, LanguageOutlined } from "@material-ui/icons";
import { CiGlobe } from "react-icons/ci";
import { BiSolidGrid } from "react-icons/bi";
import { Link } from "@mui/material";

const BlogCard = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          width={`${props.width}`}
          image={`${props.image}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={props.web} target="_blank">
            <IconButton aria-label="Web Link" color="primary">
              <CiGlobe style={{fontSize:"bold"}} />
            </IconButton>
          </a>
          <a href={props.app} target="_blank">
            <IconButton aria-label="Web Link" color="primary">
              <BiSolidGrid />
            </IconButton>
          </a>
        </CardActions>
      </Card>
    </>
  );
};

export default BlogCard;
