import { Typography, useTheme } from "@mui/material";
import { FunctionComponent } from "react";
import { chancesOfArrival } from "../utils/constant";

interface DisplaychanceProps {
  chancesOfArrival: chancesOfArrival;
}
const DisplayChanceComponent: FunctionComponent<DisplaychanceProps> = ({
  chancesOfArrival,
}) => {
  const theme = useTheme();
  return (
    <>
      {chancesOfArrival.path.length <= 0 ? (
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
          We have 0% of succes captain
        </Typography>
      ) : (
        <>
          {" "}
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
            We have {chancesOfArrival.percentOfSuccess}% of succes captain
          </Typography>
        </>
      )}
    </>
  );
};
export default DisplayChanceComponent;
