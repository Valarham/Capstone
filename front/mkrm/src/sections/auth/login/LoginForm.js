import * as Yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useSnackbar } from 'notistack';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
// actions
import { clearErrors, loginUser } from '../../../actions/userAction';
// layouts  -> MetaData title보여주는 페이지인데 안쓰이면 제거 해도 될듯
// import BackdropLoader from '../Layouts/BackdropLoader';
// import MetaData from '../Layouts/MetaData';
// login 관련 form 출력함수
// ----------------------------------------------------------------------

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();

  //   const { loading, isAuthenticated, error } = useSelector((state) => state.user);
  const { isAuthenticated, error } = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const redirect = location.search ? location.search.split('=')[1] : 'account';

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate(`/${redirect}`);
    }
  }, [dispatch, error, isAuthenticated, redirect, navigate, enqueueSnackbar]);

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('이메일은 유효한 이메일 형식이어야 합니다.').required('이메일은 필수 항목입니다.'),
    password: Yup.string().required('비밀번호가 필요합니다'),
    // email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    // password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    },
  });

  const { errors, touched, values, isSubmitting, getFieldProps } = formik;
  //   const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleLogin}>
        <Stack spacing={3}>
          <TextField
            lang="ko"
            fullWidth
            id="email"
            autoComplete="username"
            type="email"
            label="이메일"
            // label="Email address"
            value={email}
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            lang="ko"
            fullWidth
            id="password"
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="비밀번호"
            // label="Password"
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            lang="ko"
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="이메일 기억하기"
            // label="Remember me"
          />

          {/* <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            Forgot password?
          </Link> */}
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          로그인
          {/* Login */}
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
