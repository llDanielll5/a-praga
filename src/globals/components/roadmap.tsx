import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const books = [
  {
    title: "Livro I: O Começo do Fim",
    description:
      "Leonel chega a Lucca e se vê preso durante o avanço da peste negra, sem saber o que está por vir...",
    step: "01",
  },
  {
    title: "Livro II: Em breve...",
    description: "Em breve...",
    step: "02",
  },
  {
    title: "Livro III: Em breve...",
    description: "Em breve...",
    step: "03",
  },
];

export default function RoadmapSection() {
  return (
    <Box
      sx={{
        position: "relative",
        py: 10,
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(ellipse at top, rgba(255, 106, 0, 0.1) 0%, transparent 70%), url(/images/bg-eliza.png)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          mx: "auto",
          px: 3,
        }}
      >
        <Typography
          variant="headingMd"
          fontWeight="bold"
          color="white"
          gutterBottom
        >
          O ROADMAP DA SÉRIE
        </Typography>

        <Box display="flex" justifyContent="center" my={4}>
          <Box
            sx={{
              height: "2px",
              width: "100%",
              maxWidth: "600px",
              background: "linear-gradient(to right, #222, #ff5f2e, #222)",
            }}
          />
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {books.map((book, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    p: 2,
                    backgroundColor: "#1a1a1a",
                    color: "white",
                    borderRadius: 4,
                    textAlign: "center",
                    boxShadow: "0 0 15px rgba(255, 95, 46, 0.3)",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "200px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="headingSm"
                    sx={{ fontWeight: "bold", mb: 1, color: "#fff" }}
                  >
                    {book.title}
                  </Typography>
                  <Typography variant="bodySm" sx={{ color: "#aaa" }}>
                    {book.description}
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      mx: "auto",
                      backgroundColor: "#ff5f2e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    {book.step}
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
