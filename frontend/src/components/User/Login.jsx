import * as Yup from 'yup';

// @mui
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography } from '@mui/material';
import { useFormik, Form, FormikProvider } from 'formik';

import { Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useState, useCallback, useEffect } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, loginUser } from '../../actions/userAction';
import { useSnackbar } from 'notistack';
import BackdropLoader from '../Layouts/BackdropLoader';
import MetaData from '../Layouts/MetaData';
// hooks
import useResponsive from '../../utils/useResponsive';
// components
// import Page from '../Home/Dashboard/Page'
// import Logo from '../components/Logo';
// login form auth

import Iconify from '../Home/Dashboard/Iconify';
import axios from 'axios';
const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  width: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

const Login = () => {
  const smUp = useResponsive('up', 'sm');
  const mdUp = useResponsive('up', 'md');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [userNo, setUserNo] = useState(-1);

  const handleLoginChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'email') setLogin((prev) => ({ ...prev, email: value }));
    else setLogin((prev) => ({ ...prev, password: value }));
  }, []);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('이메일은 유효한 이메일 형식이어야 합니다.').required('이메일은 필수 항목입니다.'),
    password: Yup.string().required('비밀번호가 필요합니다'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    handleLoginChange: useCallback((e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (name === 'email') setLogin((prev) => ({ ...prev, email: value }));
      else setLogin((prev) => ({ ...prev, password: value }));
    }, []),
    onSubmit: useCallback(
      async (values) => {
        try {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
          const { data } = await axios.post(`/api/login`, {
            ...login,
          });
          setUserNo(data.user_no);
          navigate('/dashboard/home', { replace: true });
        } catch (err) {
          console.error(err);
        }
      },
      [login],
    ),
  });

  useEffect(() => {
    return () => {
      setLogin({
        email: '',
        password: '',
      });
      setUserNo(-1);
    };
  }, []);

  // onSubmit: async (values) => {
  //   //   values.preventDefault();
  //   alert(JSON.stringify(values, null, 2));
  //   console.log(values);
  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     };
  //     await axios.post('http://localhost:3000/api/login', { values }, config);
  //     navigate('/dashboard/home', { replace: true });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <>
      <MetaData title="Login">
        <RootStyle>
          <HeaderStyle>{/* <Logo /> */}</HeaderStyle>
          {/* {loading && <BackdropLoader />} */}
          {mdUp && (
            <SectionStyle>
              <Typography variant="h3" sx={{ px: 5 }}>
                For Small business.
              </Typography>
              <Typography variant="h3" sx={{ px: 5 }}>
                For Salesperson.
              </Typography>
              <Typography variant="h3" sx={{ px: 5 }}>
                For Everyone.
              </Typography>
              <img src="/static/illustrations/illustration_login.png" alt="login" />
            </SectionStyle>
          )}
          <Container width="sm">
            <ContentStyle>
              <Typography lang="ko" variant="h4" gutterBottom>
                로그인{/* Sign In */}
              </Typography>

              <Typography lang="ko" sx={{ color: 'text.secondary', mb: 5 }}>
                아래에 세부 정보를 입력하세요.{/* Enter your details below. */}
              </Typography>

              {/* <AuthSocial /> */}

              <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      autoComplete="username"
                      type="email"
                      label="이메일"
                      onChange={handleLoginChange}
                      {...getFieldProps('email')}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                    />

                    <TextField
                      fullWidth
                      autoComplete="current-password"
                      type={showPassword ? 'text' : 'password'}
                      label="비밀번호"
                      onChange={handleLoginChange}
                      {...getFieldProps('password')}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword} edge="end">
                              <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}
                    />
                  </Stack>

                  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}></Stack>

                  <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                    로그인
                  </LoadingButton>
                </Form>
              </FormikProvider>
              {userNo !== -1 && <h3>로그인 성공</h3>}
              {smUp && (
                <Typography lang="ko" variant="body2" sx={{ mt: { md: 5 } }}>
                  계정이 없으신가요?{/* Don’t have an account?  */}
                  {''}
                  <Link variant="subtitle2" component={RouterLink} to="/register">
                    회원가입{/* Get started */}
                  </Link>
                </Typography>
              )}
              {!smUp && (
                <Typography lang="ko" variant="body2" align="center" sx={{ mt: 3 }}>
                  계정이 없으신가요?
                  {/* Don’t have an account? */}{' '}
                  <Link lang="ko" variant="subtitle2" component={RouterLink} to="/register">
                    회원가입{/* Get started */}
                  </Link>
                </Typography>
              )}
            </ContentStyle>
          </Container>
        </RootStyle>
      </MetaData>
    </>
  );
};

export default Login;
