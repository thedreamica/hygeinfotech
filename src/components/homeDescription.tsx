/** @jsx jsx */
import { jsx } from "theme-ui";

const HomeDescription = () => {
  return (
    <div
      sx={{
        margin: "auto",
        padding: "0 5em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div sx={{ width: "20%" }}>
        <h1>01</h1>
        <h1>Medical Coding</h1>
      </div>
      <div sx={{ width: "40%" }}>
        <p
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2.5em",
          }}
        >
          One of the finest firms in the list of organizations that providing
          medical coding services to ensure accuracy in maintaining your health
          information is documented and coded efficiently.
        </p>
      </div>
    </div>
  );
};

export default HomeDescription;
