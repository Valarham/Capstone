import * as Yup from 'yup';
import * as React from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useState, useCallback, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useSnackbar } from 'notistack';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, registerUser } from '../../actions/userAction';
import BackdropLoader from '../Layouts/BackdropLoader';
import MetaData from '../Layouts/MetaData';
// import FormSidebar from './FormSidebar';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography, Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import useResponsive from '../../utils/useResponsive';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
//hooks
import { useInput } from '../../hooks/useInput';
// component
import Iconify from '../Home/Dashboard/Iconify';
// register page 관련 form 출력함수
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
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));
const Register = () => {
  const smUp = useResponsive('up', 'sm');
  const mdUp = useResponsive('up', 'md');
  const navigate = useNavigate();
  // 빨간색 글씨로 오류 처리하는 부분
  const RegisterSchema = Yup.object().shape({
    first_name: Yup.string().min(1, '너무 짧습니다.').max(5, '너무 깁니다.').required('이름은 필수 항목입니다.'),
    last_name: Yup.string().min(1, '너무 짧습니다.').max(5, '너무 깁니다.').required('성은 필수 항목입니다.'),
    email: Yup.string().email('이메일은 유효한 이메일 형식이어야 합니다.').required('이메일은 필수 항목입니다.'),
    password: Yup.string().min(8, '너무 짧습니다.').max(20, '너무 깁니다.').required('비밀번호는 필수 항목입니다.'),
    phone: Yup.string().required('핸드폰 번호는 필수 항목입니다.'),
  });
  const [state, setState] = useState(null || '');
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const [signUp, setSignUp] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
  });

  const [checkEmail, setCheckEmail] = useState(false);

  const handleSignUpChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'first_name':
        setSignUp((prev) => ({
          ...prev,
          first_name: value,
        }));
        break;
      case 'last_name':
        setSignUp((prev) => ({
          ...prev,
          last_name: value,
        }));
        break;
      case 'email':
        setSignUp((prev) => ({
          ...prev,
          email: value,
        }));
        setCheckEmail(false);
        break;
      case 'password':
        setSignUp((prev) => ({
          ...prev,
          password: value,
        }));
        break;
      case 'phone':
        setSignUp((prev) => ({
          ...prev,
          phone: value,
        }));
        break;
      default:
    }
  }, []);
  const handleCheckEmailClick = useCallback(async () => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!signUp.email.match(emailRegex)) return alert('이메일을 정확히 입력하세요!');
    try {
      await axios.get(`http://localhost:3000/api/check`, {
        params: { email: signUp.email },
      });
      setCheckEmail(true);
    } catch (err) {
      if (err?.response?.status === 401) {
        setCheckEmail(false);
        return alert('이미 가입된 이메일 입니다.');
      }
      console.error(err);
    }
  }, [signUp]);
  // register (sign up)
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone: '',
    },
    validationSchema: RegisterSchema,

    // register 확인될 경우 dashboard로 navigate
    onSubmit: async (values) => {
      try {
        alert(JSON.stringify(values, null, 2));
        console.log(values);
        const result = await axios({
          //body: JSON.stringify(values),
          url: `http://localhost:3000/api/login`,
          headers: {
            //Authorization: `Basic ${TOKEN}`,
            'content-Type': 'application/json',
          },
          method: 'POST',
          data: JSON.stringify(values),
        });
        setState(result.data.message);
      } catch (error) {
        setState('error');
      }
    },
  });

  useEffect(() => {
    setSignUp({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone: '',
    });
    setCheckEmail(false);
  }, []);
  // error handler 및 유저 선택적 api 변수
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <>
      <MetaData title="Register" />
      <RootStyle>
        <HeaderStyle>{/* <Logo /> */}</HeaderStyle>
        {mdUp && (
          <SectionStyle>
            <Typography lang="ko" variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              우리와 함께 더 효과적으로 작업을 관리하십시오.
              {/* Manage the job more effectively with us */}
            </Typography>
            <img alt="register" src="/static/illustrations/illustration_register.png" />
          </SectionStyle>
        )}

        <Container>
          <ContentStyle>
            <Typography lang="ko" variant="h4" gutterBottom>
              오신 것을 환영합니다.{/* Get started free account. */}
            </Typography>

            <Typography lang="ko" sx={{ color: 'text.secondary', mb: 5 }}>
              지금 회원 가입하신 후 다양한 서비스를 만나보세요.
              {/* Free forever. No credit card needed. */}
            </Typography>

            {/* <AuthSocial /> */}

            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField
                      lang="ko"
                      fullWidth
                      label="이름"
                      {...getFieldProps('first_name')}
                      error={Boolean(touched.first_name && errors.first_name)}
                      helperText={touched.first_name && errors.first_name}
                    />

                    <TextField
                      lang="ko"
                      fullWidth
                      label="성"
                      {...getFieldProps('last_name')}
                      error={Boolean(touched.last_name && errors.last_name)}
                      helperText={touched.last_name && errors.last_name}
                    />
                  </Stack>
                  {/* <div> */}
                  <TextField
                    lang="ko"
                    fullWidth
                    autoComplete="username"
                    type="email"
                    label="이메일"
                    {...getFieldProps('email')}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  {/* {signUp.email.length > 5 && checkEmail && (
                      <span style={{ color: `green`, fontWeight: `bold` }}>사용가능한 이메일</span>
                    )} */}
                  {/* <button onClick={handleCheckEmailClick}>중복 확인</button> */}
                  {/* </div> */}
                  <TextField
                    lang="ko"
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? 'text' : 'password'}
                    label="비밀번호"
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
                  <TextField
                    lang="ko"
                    fullWidth
                    label="핸드폰 번호"
                    {...getFieldProps('phone')}
                    error={Boolean(touched.phone && errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                  <LoadingButton
                    lang="ko"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                  >
                    계정 생성
                    {/* Create Account */}
                  </LoadingButton>
                </Stack>
              </Form>
            </FormikProvider>
            {smUp && (
              <Typography lang="ko" variant="body2" sx={{ mt: { md: 5 } }}>
                이미 계정이 있습니까? {/* Already have an account?  */}
                {''}
                <Link lang="ko" variant="subtitle2" component={RouterLink} to="/login">
                  로그인{/* Login */}
                </Link>
              </Typography>
            )}
            <Typography lang="ko" variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
              계정 등록함으로써 HUFS_CAPSTONE
              <Link lang="ko" underline="always" color="text.primary" href="#">
                {''} 서비스 약관 {/* Terms of Service */}
              </Link>
              {''}및 {/* and */}
              {''}
              <Link lang="ko" underline="always" color="text.primary" href="#">
                개인 정보 보호 정책{''}
                {/* Privacy Policy */}
              </Link>
              에 동의합니다.&nbsp;
              {/* By registering, I agree to HUFS_CAPSTONE */}
            </Typography>

            {!smUp && (
              <Typography lang="ko" variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                이미 계정이 있습니까?{/* Already have an account? */}{' '}
                <Link lang="ko" variant="subtitle2" to="/login" component={RouterLink}>
                  로그인{/* Login */}
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
};
export default Register;
