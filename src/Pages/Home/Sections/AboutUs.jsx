import { Rocket as RocketIcon, Star as StarIcon, Explore as CompassIcon, Lightbulb as LightbulbIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Box, Card, CardContent, Typography, Button, Container } from "@mui/material";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AboutUs() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        bgcolor: "black",
        color: "white",
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('space.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.1)",
            filter: "brightness(0.7) contrast(1.2)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, black, rgba(0, 0, 0, 0.5), black)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "25%",
            left: "25%",
            width: 384,
            height: 384,
            bgcolor: "rgba(156, 39, 176, 0.3)",
            borderRadius: "50%",
            filter: "blur(120px)",
            animation: "pulse 4s infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "25%",
            right: "25%",
            width: 384,
            height: 384,
            bgcolor: "rgba(255, 152, 0, 0.2)",
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Vision Statement */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.2 } } }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "96px 16px" }}
        >
          <Typography variant="h2" fontWeight="bold" gutterBottom>Nossa Visão</Typography>

          <Typography variant="h6" >Ser o centro de empreendedorismo mais impactante do Brasil</Typography>
        

          <motion.div
            variants={fadeIn}
            style={{
              marginTop: "16px",
              display: "flex",
              gap: "8px",
              fontSize: "1.125rem",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <Typography variant="body" fontFamily='Roboto Mono' style={{ color: "#FF9800", fontWeight: 400 }}>Liderança</Typography>
            <span>×</span>
            <Typography variant="body" fontFamily='Roboto Mono' style={{ color: "#9C27B0", fontWeight: 400 }}>Engajamento</Typography>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <Container sx={{ paddingBottom: "96px" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
              maxWidth: "1120px",
              margin: "0 auto",
            }}
          >
            {[
              { icon: RocketIcon, title: "Inovação", desc: "Expandindo limites e explorando novas possibilidades" },
              { icon: StarIcon, title: "Excelência", desc: "Buscando os mais altos padrões em tudo o que fazemos" },
              { icon: CompassIcon, title: "Liderança", desc: "Guiando e inspirando a próxima geração de empreendedores" },
              { icon: LightbulbIcon, title: "Ação", desc: "Nós somos VLEF - Nós fazemos acontecer e colocamos a mão na massa." },
            ].map((item) => (
              <Card
                key={item.title}
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.5s",
                  '&:hover': { bgcolor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <item.icon sx={{ fontSize: 48, mb: 2, color: "#FF9800", transition: "transform 0.5s", '&:hover': { transform: "scale(1.1)" } }} />
                  <Typography variant="h5" color="secondary.light" sx={{ mb: 1 }}>{item.title}</Typography>
                  <Typography fontSize='1.2rem' sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </motion.div>
          <Box textAlign="center" mt={10}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        We are{" "}
        <Box component="span" color="orange">
          VLEF
        </Box>{" "}
        -{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(to right, orange, purple)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Vai lá e faz
        </Box>
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "orange",
          "&:hover": {
            backgroundColor: "darkorange",
          },
          color: "black",
          px: 4,
          py: 1.5,
          fontWeight: "bold",
          borderRadius: "9999px", // Full rounded
          transition: "background-color 0.3s",
        }}
      >
        Conheça nossa história
      </Button>
    </Box>
        </Container>
      </Box>
    </Box>
  );
}
