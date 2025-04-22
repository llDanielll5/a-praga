import AboutUsSection from "@/globals/components/about";
import BookSummarySection from "@/globals/components/bookSummary";
import DestakSection from "@/globals/components/destak";
import Footer from "@/globals/components/footer";
import HeroSection from "@/globals/components/hero";
import BookRoadmap from "@/globals/components/roadmap";
import { Box, Stack } from "@mui/material";

const Home = () => {
  return (
    <Box width={"100%"}>
      <HeroSection />
      <BookSummarySection />
      <AboutUsSection />
      <DestakSection />
      <BookRoadmap />
      <Footer />
    </Box>
  );
};

export default Home;
