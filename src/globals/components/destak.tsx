import { Box, Grid, styled, Typography } from "@mui/material";

export default function DestakSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(ellipse at bottom, rgba(255, 106, 0, 0.1) 0%, transparent 70%), radial-gradient(ellipse at right, rgba(255, 106, 0, 0.1) 0%, transparent 70%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { md: 8, xs: 2 },
        py: { md: 4, xs: 2 },
        textAlign: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="headingLg"
            sx={{
              // fontSize: { md: "5rem", xs: "3.2rem" },
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: "0.5px",
              color: "rgba(255, 255, 255, 0.85)",
            }}
          >
            "Em tempos de <b>peste e medo</b>, a maior ameaça pode não ser a
            doença... mas aquilo que espreita nas sombras. Descubra os segredos
            ocultos de Lucca nesta história de coragem, mistério e
            sobrevivência!"
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <StyledImage src={"/images/compilation.png"} />
        </Grid>
      </Grid>
    </Box>
  );
}

const StyledImage = styled("img")`
  width: 100%;
  max-width: 100%;
`;
