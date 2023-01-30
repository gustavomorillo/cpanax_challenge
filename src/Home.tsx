import { FC } from "react";
import {
  Box,
  Button as MUIButton,
  ButtonProps,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Button = styled(MUIButton)<ButtonProps>(() => ({
  margin: 10,
}));

const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      justifyContent="center"
      display="flex"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
    >
      <Typography variant="h4" mb={5}>
        CPANAX: Desarrollador en React
      </Typography>
      <Box>
        <Button variant="contained" onClick={() => navigate("/challenge-1")}>
          Challenge 1
        </Button>
        <Button variant="contained" onClick={() => navigate("/challenge-2")}>
          Challenge 2
        </Button>
        <Button variant="contained" onClick={() => navigate("/challenge-3")}>
          Challenge 3
        </Button>
      </Box>
    </Box>
  );
};
export default Home;
