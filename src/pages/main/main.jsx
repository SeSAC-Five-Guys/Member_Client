import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import Header from '../../components/header';
import ItemIcon from '../../components/itemIcon';
import BasicCard from '../../components/basicCard';
import BasicAlert from '../../components/basicAlert';

import { axiosAuth } from '../../apis';

export default function Main() {
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState('info');
  const [message, setMessage] = useState('');

  const [, , removeCookie] = useCookies(['accessTokenSFG']);

  useEffect(() => {
    axiosAuth
      .get(`authorization/all/member`, { withCredentials: true })
      .catch(() => {
        setOpenAlert(true);
        setSeverity('error');
        setMessage('로그인 정보가 만료 되었습니다.');

        removeCookie('accessTokenSFG');
      });
  }, []);

  const closeAlert = () => setOpenAlert(false);

  return (
    <Container maxWidth="xl">
      <BasicAlert
        open={openAlert}
        handleClose={closeAlert}
        severity={severity}
        message={message}
      />

      <Header />

      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={12} md={6}>
          <BasicCard />
        </Grid>

        <Grid xs={12} sm={12} md={6}>
          <Box display="flex" flexDirection="column" height="100%">
            <Box mb={2}>
              <Grid container spacing={3}>
                <Grid xs={12} sm={6}>
                  <ItemIcon
                    title="Kibana"
                    param="kibana"
                    icon={<img alt="icon" src="/assets/logos/kibana.png" />}
                  />
                </Grid>

                <Grid xs={12} sm={6}>
                  <ItemIcon
                    title="Grafana"
                    param="grafana"
                    icon={<img alt="icon" src="/assets/logos/grafana.png" />}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Grid container spacing={3}>
                <Grid xs={12} sm={6}>
                  <ItemIcon
                    title="Kafka UI"
                    param="kafkaui"
                    icon={<img alt="icon" src="/assets/logos/kafka.webp" />}
                  />
                </Grid>

                <Grid xs={12} sm={6}>
                  <ItemIcon
                    title="Argo CD"
                    param="argocd"
                    icon={<img alt="icon" src="/assets/logos/argocd.png" />}
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
