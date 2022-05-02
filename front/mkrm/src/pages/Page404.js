import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
// components
import Page from '../components/Page';
// 404pages 출력 함수
// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Page title="404 Page Not Found">
      <Container>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography lang="ko" variant="h3" paragraph>
            {/* Sorry, page not found! */}
            죄송합니다. 페이지를 찾을 수 없습니다!
          </Typography>

          <Typography lang="ko" sx={{ color: 'text.secondary' }}>
            죄송합니다. 찾고 있는 페이지를 찾을 수 없습니다. URL을 잘못 입력했나요? 맞춤법을 반드시 확인하세요.
            {/* Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
            spelling. */}
          </Typography>

          <Box
            component="img"
            src="/static/illustrations/illustration_404.svg"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />

          <Button lang="ko" to="/" size="large" variant="contained" component={RouterLink}>
            홈으로 이동
            {/* Go to Home */}
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}
