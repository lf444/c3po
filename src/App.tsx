import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import DisplayChanceComponent from "./components/DisplayChanceComponent";
import UploadJson from "./components/Upload";
import { computerURL, chancesOfArrival } from "./utils/constant";
import { Empire } from "./utils/Empire";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function App() {
  const theme = useTheme();
  const [files, setFiles] = useState<Empire>();
  const [chancesOfArrival, setChancesOfArrival] = useState<chancesOfArrival>();
  const [isLoading, setIsLoading] = useState(false);
  const [reqError, setReqError] = useState(false);

  const handleChangeFiles = (e: Empire) => {
    setFiles(e);
  };

  const resetAlldata = () => {
    setFiles(undefined);
    setReqError(false);
    setIsLoading(false);
    setChancesOfArrival(undefined);
  };

  const fetchChanceOfArrival = () => {
    setIsLoading(true);

    if (files) {
      fetch(computerURL + "/computeChanceOfarrival", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        // @ts-ignore
        body: files,
      })
        .then((response) => response.json())
        .then((data) => setChancesOfArrival(data))
        .then(() => setIsLoading(false))
        .catch((error) => {
          setReqError(true);
          setIsLoading(false);
        });
    }
    setIsLoading(false);
  };

  return (
    <Container sx={{ height: "100%", width: "100%" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ height: "100%", width: "100%", p: "2rem" }}
      >
        <Grid item xs={12} sx={{ display: "flex" }}>
          <Typography
            sx={{
              backgroundColor: theme.palette.secondary.main,
              width: "fit-content",
              height: "fit-content",
              p: 1,
              borderRadius: "10px",
              marginLeft: "auto",
              marginRight: "1em",
              mt: "1em",
            }}
          >
            {" "}
            C3p0 i need our chance to arrive at endor !
          </Typography>
          <CardMedia
            sx={{
              height: "auto",
              width: "150px",
              marginRight: "0",
              borderRadius: "10px",
            }}
            component="img"
            image={require("./assets/solo.jpg")}
            alt="Paella dish"
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex" }}>
          <CardMedia
            sx={{
              height: "auto",
              width: "135px",
              marginLeft: "0",
              borderRadius: "10px",
            }}
            component="img"
            image={require("./assets/C3p0_dialog.jpg")}
            alt="C"
          />
          <Typography
            sx={{
              backgroundColor: theme.palette.secondary.main,
              width: "fit-content",
              p: 1,
              borderRadius: "10px",
              height: "fit-content",
              mt: "1em",
              ml: "1em",
            }}
          >
            {" "}
            Please give me the data from the rebels
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex" }}>
          <Box
            sx={{
              backgroundColor: theme.palette.secondary.main,
              width: "fit-content",
              height: "fit-content",
              borderRadius: "10px",
              p: 1,
              marginLeft: "auto",
              marginRight: "1em",
              mt: "1em",
            }}
          >
            {" "}
            {!files ? (
              <UploadJson handleChangeFiles={handleChangeFiles} />
            ) : (
              <>
                <Button
                  onClick={fetchChanceOfArrival}
                  sx={{
                    color: "#ffffff",
                    backgroundColor: theme.palette.text.secondary,
                  }}
                >
                  {" "}
                  TAKE IT C3po
                </Button>
                <IconButton
                  onClick={resetAlldata}
                  sx={{
                    color: "#ffffff",
                    ml: "0.5em",
                    backgroundColor: theme.palette.text.secondary,
                  }}
                >
                  {" "}
                  <DeleteIcon />
                </IconButton>
              </>
            )}
          </Box>
          <CardMedia
            sx={{
              height: "auto",
              width: "150px",
              marginRight: "0",
              borderRadius: "10px",
            }}
            component="img"
            image={require("./assets/Imperial_datapad.png")}
            alt="Paella dish"
          />
        </Grid>
        <Grid item xs={12} sx={{}}>
          {isLoading ? (
            <Slide
              direction="right"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  width: "fit-content",
                  p: 1,
                  borderRadius: "10px",
                }}
              >
                {" "}
                Computing......
              </Typography>
            </Slide>
          ) : (
            <></>
          )}
        </Grid>
        <Grid item xs={12} sx={{ display: "flex" }}>
          {chancesOfArrival ? (
            <>
              <CardMedia
                sx={{
                  height: "auto",
                  width: "135px",
                  marginLeft: "0",
                  borderRadius: "10px",
                }}
                component="img"
                image={require("./assets/C3p0_dialog.jpg")}
                alt="C"
              />
              <DisplayChanceComponent chancesOfArrival={chancesOfArrival} />
            </>
          ) : reqError ? (
            <>
              <CardMedia
                sx={{
                  height: "auto",
                  width: "135px",
                  marginLeft: "0",
                  borderRadius: "10px",
                }}
                component="img"
                image={require("./assets/C3p0_dialog.jpg")}
                alt="C"
              />
              <Typography
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  width: "fit-content",
                  p: 1,
                  borderRadius: "10px",
                  height: "fit-content",
                  mt: "1em",
                  ml: "1em",
                }}
              >
                {" "}
                CRAP THE DATA IS CORRUPTED CAPTAIN !
              </Typography>
            </>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
