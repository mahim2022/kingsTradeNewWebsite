import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Flexible Recruitment Solutions",
    description:
      "We adapt our services to meet your specific hiring needs, whether for seasonal, temporary, or long-term roles.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Consistent Quality Workforce",
    description:
      "Our unskilled workers are thoroughly vetted, ensuring you receive reliable talent that adds value from day one.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Tailored Approach",
    description:
      "We customize our recruitment strategies based on your industry and location, making sure you get candidates that fit your requirements.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Deep Market Knowledge",
    description:
      "Our expertise spans regions like the Middle East, Malaysia, and Europe, giving us an edge in sourcing the best talent for your projects.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Reliable support",
    description:
      "We provide continuous support throughout the recruitment process, from selection to onboarding and beyond.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Precision in every detail",
    description:
      "Our meticulous screening and selection process ensure only candidates who meet your exact criteria are presented, ensuring a seamless match for your needs.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "hsl(220, 30%, 2%)",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Why Choose Us?
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Explore the key reasons companies trust us for their recruitment
            needs: reliability, flexibility, tailored services, and a deep
            understanding of global labor markets.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: "inherit",
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "hsla(220, 25%, 25%, .3)",
                  background: "transparent",
                  backgroundColor: "grey.900",
                  boxShadow: "none",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: "medium" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
