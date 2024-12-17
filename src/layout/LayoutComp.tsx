import NavBar from "../components/NavBar";
import Backggound from "../components/Backggound";
import { Container } from "@mui/material";
import FooterComp from "../components/FooterComp";
const LayoutComp = () => {
  return (
    <>
      <Container
      // sx={{ display: "flax", flexDirection: "column", alignItems: "center" }}
      >
        <NavBar />
        <Backggound />
        <FooterComp />
      </Container>
    </>
  );
};

export default LayoutComp;
