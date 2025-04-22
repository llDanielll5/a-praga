import { Box, Typography, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const BookSummarySection = () => {
  return (
    <Box
      component={motion.section}
      // initial={{ opacity: 0, y: 30 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.8 }}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(ellipse at bottom, rgba(255, 106, 0, 1) 0%, transparent 70%), url(/images/bg-eliza.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Sobreposição escura com esmaecimento */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 60%, #000 100%)",
          zIndex: 0,
        }}
      />

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={6}
        zIndex={2}
        sx={{ width: "100%", maxWidth: 1400 }}
      >
        {/* Texto */}
        <Box sx={{ maxWidth: 600 }}>
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            variant="headingMd"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              color: "#f68a1f",
              lineHeight: 1.1,
            }}
          >
            Sobre o Livro
          </Typography>

          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            sx={{ mt: 3, fontSize: "1rem", color: "#ccc" }}
          >
            Leonel é um jovem caçador, que mora com seu tio em uma pacata vila
            no interior da Itália. Destemido, decide então que é hora de partir
            em busca de novos ares, em uma nova cidade, conhece novos caminhos,
            mesmo com a desaprovação de seu tio. O que ele não sabe, é que uma
            praga assola a Europa do Século XIV, pois as notícias demoram a
            chegar na pequena e isolada vila. Chegando em Lucca, descobre que a
            cidade está em quarentena. Pessoas com vestes negras e máscaras
            assustadoras de pássaros andam pela cidade. Se vê sozinho em um
            lugar desconhecido. Com a Praga se alastrando, não consegue mais
            sair da cidade, ficando assim à mercê da doença que matava mais e
            mais pessoas.
          </Typography>

          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            sx={{ mt: 3, fontSize: "1rem", color: "#ccc" }}
          >
            Mas algo estava estranho... os corpos, há algum tempo inertes no
            chão, sumiam, sem explicação. Sabia que não eram os soldados os
            recolhendo, pois há muito, isso não ocorria. A quantidade de corpos
            era tanta, que os próprios soldados acabaram desistindo de
            recolhê-los. O que estava acontecendo afinal?
          </Typography>

          <Button
            component={motion.a}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.amazon.com.br/Praga-Livro-In%C3%ADcio-Fim-ebook/dp/B0CXB8XMVL?dplnkId=17d4227c-087c-4973-b515-b09c8ddc3b66"
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: "#f68a1f",
              color: "#000",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontSize: "1rem",
              textTransform: "none",
              boxShadow: "0 0 10px rgba(246, 138, 31, 0.6)",
              ":hover": {
                backgroundColor: "#ffa64d",
              },
            }}
          >
            Adquirir Agora
          </Button>
        </Box>

        {/* Imagem do Livro */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          sx={{
            width: { xs: "100%", md: "40%" },
            maxWidth: 400,
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          }}
        >
          <Image
            src="/images/book.jpg" // Substitua pela imagem real
            alt="Capa do Livro A Praga"
            width={400}
            height={550}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default BookSummarySection;
