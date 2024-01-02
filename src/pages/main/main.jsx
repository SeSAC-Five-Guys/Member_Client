import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import Header from '../../components/header';
import ItemIcon from '../../components/itemIcon';
import BasicCard from '../../components/basicCard/basicCard';

export default function Main() {
  return (
    <Container maxWidth="xl">
      <Header />

      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={12} md={6} >
          <BasicCard />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            height="100%">
            <Box mb={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <ItemIcon
                    title="Kibana"
                    icon={<img alt="icon" src="/assets/logos/kibana.png" />}
                    link="/"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <ItemIcon
                    title="Grafana"
                    icon={<img alt="icon" src="/assets/logos/grafana.png" />}
                    link="/"
                  />
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <ItemIcon
                    title="Kafka UI"
                    icon={<img alt="icon" src="/assets/logos/kafka.webp" />}
                    link="/"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <ItemIcon
                    title="Argo CD"
                    icon={<img alt="icon" src="/assets/logos/argocd.png" />}
                    link="/"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}