import { Box, Typography } from "@mui/material";

export default function DestakSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(ellipse at bottom, rgba(255, 106, 0, 0.1) 0%, transparent 70%), url(/images/bg-eliza.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { md: 4, xs: 2 },
        py: { md: 4, xs: 2 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="headingLg"
        sx={{
          fontSize: { md: "5rem", xs: "3.2rem" },
          fontWeight: 500,
          lineHeight: 1.5,
          letterSpacing: "0.5px",
          color: "rgba(255, 255, 255, 0.85)",
        }}
      >
        Destaque aqui uma frase <b style={{ color: "#fff" }}>Sobre o Livro</b>.
        Que desejar <b>Para informar o que desejar</b>
      </Typography>
    </Box>
  );
}
