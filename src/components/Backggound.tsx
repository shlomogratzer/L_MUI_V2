import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import SnaceBar from "./SnaceBar";
import DitalesComp from "./DitalesComp";

// const Styles = {
//   button: { ":hover": { border: "solid 0.5px" } },
// };

const Backggound = () => {
  return (
    <Box
      sx={{
        maxWidth: 1300,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <DitalesComp
          name="moshe"
          title="user card"
          email="moshe@gmail.com"
          image={{
            image:
              "https://www.shutterstock.com/shutterstock/photos/2430794353/display_1500/stock-photo-a-person-s-arm-in-a-red-sleeve-is-wired-to-a-red-clock-referencing-time-management-or-control-2430794353.jpg",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary">Share</Button>
          <Button color="secondary">Learn More</Button>
        </CardActions>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://www.shutterstock.com/shutterstock/photos/2430794353/display_1500/stock-photo-a-person-s-arm-in-a-red-sleeve-is-wired-to-a-red-clock-referencing-time-management-or-control-2430794353.jpg"
        />
        <Typography variant="body2" color="info">
          name
        </Typography>
        <Typography variant="body2" color="info">
          phone
        </Typography>
        <Typography variant="body2" color="info">
          email
        </Typography>
      </Card>
      <SnaceBar />
    </Box>
  );
};

export default Backggound;
