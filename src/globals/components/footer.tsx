import { Box, Container, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterWrapper = styled("footer")(({ theme }) => ({
  backgroundColor: "black",
  color: "#fff",
  padding: theme.spacing(6, 2),
  textAlign: "center",
}));

const LegalText = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  color: "white",
  maxWidth: 800,
  margin: "0 auto",
  marginBottom: theme.spacing(3),
}));

const LogoText = styled("div")(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.125rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
  margin: `${theme.spacing(2)} 0`,
}));

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <LegalText>
          Este livro é uma obra de ficção. Embora inspirado em eventos
          históricos reais, todos os personagens, locais e acontecimentos foram
          criados para fins narrativos. Qualquer semelhança com pessoas, vivas
          ou mortas, é mera coincidência. Esta obra não deve ser interpretada
          como relato histórico ou científico.
        </LegalText>

        <Divider
          sx={{
            backgroundColor: "primary.main",
            margin: "16px auto",
            width: "100%",
            maxWidth: 800,
          }}
        />

        <Typography variant="bodyXs" color="white">
          © Copyright 2024. Todos os direitos reservados
        </Typography>
      </Container>
    </FooterWrapper>
  );
}
