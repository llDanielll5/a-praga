import { Box, Typography, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

const HeroCapturaPage = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 8 },
        pt: { xs: 6, md: 4 },
        pb: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url(/images/background.png)", // Substitua pelo seu background
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      {/* Sobreposição escura com fade para baixo */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 80%, #000 100%)",
          zIndex: 0,
        }}
      />

      {/* Texto à esquerda */}
      <Stack
        spacing={3}
        maxWidth={{ xs: "100%", md: "40%" }}
        zIndex={2}
        mb={{ xs: 4, md: 0 }}
      >
        <Typography variant="headingMd" sx={{ fontWeight: 300 }}>
          Livro I
        </Typography>
        <Typography
          variant="headingLg"
          fontFamily={"Bebas Neue"}
          sx={{
            fontWeight: 600,
            color: "#cf6010",
            lineHeight: 1.1,
            fontSize: { md: "6rem", xs: "3rem" },
          }}
        >
          A Praga
        </Typography>
        <Typography variant="bodySm" color="gray">
          "A Praga" é um mergulho intenso em um universo onde ciência e caos
          colidem. Uma narrativa envolvente que prende o leitor do início ao
          fim, abordando dilemas morais, conspirações governamentais e o
          espírito humano frente ao colapso da civilização.
        </Typography>
      </Stack>

      {/* Imagem à direita */}
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: { xs: "100%", md: "50%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <Box
          component={motion.div}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{ position: "relative", width: "100%", maxWidth: 500 }}
        >
          <StyledImage
            src="/images/character.png" // Troque essa imagem pela sua
            alt="Apresentação do Projeto"
          />

          {/* Ícones com animação */}

          <Box
            component={motion.div}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            onClick={() => router.push("https://instagram.com/apragalivro")}
            sx={{
              position: "absolute",
              top: "20%",
              left: "5%",
              backgroundColor: "#111",
              border: "1px solid #ff6a00",
              borderRadius: 2,
              p: 1,
              color: "#ff6a00",
              zIndex: 100,
              cursor: "pointer",
            }}
          >
            <InstagramIcon fontSize="large" sx={{ justifySelf: "center" }} />
          </Box>

          {/* Indicador gráfico animado */}
          <Box
            component={motion.div}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            sx={{
              position: "absolute",
              top: "15%",
              right: "5%",
              backgroundColor: "#ff6a00",
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontWeight: "bold",
              fontSize: "0.875rem",
            }}
          >
            A praga
          </Box>

          {/* Linha animada (representando o gráfico) */}
          <Box
            component={motion.div}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
            sx={{
              position: "absolute",
              top: "18%",
              right: "0%",
              width: "100px",
              height: "50px",
              borderRight: "3px solid #ff6a00",
              borderTop: "3px solid transparent",
              borderRadius: "50% 0 0 0",
            }}
          />

          {/* Texto flutuante animado */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            sx={{
              position: "absolute",
              bottom: "10%",
              left: "10%",
              color: "#fff",
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
              fontStyle: "italic",
              opacity: 0.6,
            }}
          >
            Leitor: "A história é tão boa, tão intensa que é impossível parar de
            ler."
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const StyledImage = styled("img")`
  object-fit: cover;
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

export default HeroCapturaPage;
