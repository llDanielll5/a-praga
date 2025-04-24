import { Box, Button, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#fff",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        p: 4,
        gap: 4,
      }}
    >
      <Box sx={{ maxWidth: { md: "100%", xs: "100%" }, flexShrink: 0 }}>
        <StyledImage
          src="/images/autor.png"
          alt="Wellington Miguel"
          style={{ objectFit: "contain" }}
        />
      </Box>

      <Box sx={{ maxWidth: { md: "50%", xs: "100%" } }}>
        <Typography
          variant="headingXl"
          component="h1"
          fontWeight="bold"
          gutterBottom
        >
          <Box component="span" sx={{ color: "#f68a1f" }}>
            SOBRE O AUTOR
          </Box>
        </Typography>

        <Typography variant="bodyLg" sx={{ color: "#aaa", mb: 4 }}>
          Wellington Miguel é servidor público, escritor e entusiasta das
          palavras. Apaixonado por futebol e leitura, hobbies que alimentam sua
          criatividade, Wellington é autor do livro A Praga - O Início do Fim.
          Essa obra independente, disponível na versão eletrônica pela Amazon,
          explora os universos da ficção, fantasia e terror, cativando leitores
          com uma narrativa envolvente e imaginativa.
        </Typography>
      </Box>
    </Box>
  );
}

const StyledImage = styled("img")`
  width: 80%;
`;
