import * as React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';
// material
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useFormik, Form, FormikProvider } from 'formik';

export default function DialogSelect() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = React.useState(false);
  const [info_category, setCategory] = useState([]); // 1차 카테고리
  const [info_sector, setSector] = useState([]); //2차 카테고리
  const [info_addr1, setaddrInfo1] = useState([]); //시도
  const [info_addr2, setaddrInfo2] = useState([]); //시군구
  const [info_addr3, setaddrInfo3] = useState([]); //읍면도
  const [open, setOpen] = React.useState(false);

  const handleChange1 = (event) => {
    setCategory(Number(event.target.value) || '');
  };
  const handleChange2 = (event) => {
    setSector(Number(event.target.value) || '');
  };
  const handleChange3 = (event) => {
    setaddrInfo1(Number(event.target.value) || '');
  };
  const handleChange4 = (event) => {
    setaddrInfo2(Number(event.target.value) || '');
  };
  const handleChange5 = (event) => {
    setaddrInfo3(Number(event.target.value) || '');
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res1 = await axios.get('/api/cat_1');
      setCategory(res1.data.results);
      enqueueSnackbar('카테고리 전송 성공', { variant: 'success' });
      const res2 = await axios.get('/api/cat_2');
      setSector(res2.data.results);
      enqueueSnackbar('업종 전송 성공', { variant: 'success' });
      const res3 = await axios.get('/api/addr_1');
      setaddrInfo1(res3.data.results);
      enqueueSnackbar('시/도 전송 성공', { variant: 'success' });
      const res4 = await axios.get('/api/addr_2');
      setaddrInfo2(res4.data.results);
      enqueueSnackbar('시군구 전송 성공', { variant: 'success' });
      const res5 = await axios.get('/api/addr_3');
      setaddrInfo3(res5.data.results);
      enqueueSnackbar('읍면동 전송 성공', { variant: 'success' });
    } catch (err) {
      console.error(err);
      enqueueSnackbar(err.message, { variant: 'error' });
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  let init_category = info_category.map((row) => {
    return {
      cat_1: row.cat_1,
      value: row.value,
    };
  });
  let init_sector = info_sector.map((row) => {
    return {
      cat_2: row.cat_2,
      value: row.value,
    };
  });
  let init_addr1 = info_addr1.map((row) => {
    return {
      addr_1: row.addr_1,
      value: row.value,
    };
  });
  let init_addr2 = info_addr2.map((row) => {
    return {
      addr_2: row.addr_2,
      value: row.value,
    };
  });
  let init_addr3 = info_addr3.map((row) => {
    return {
      addr_3: row.addr_3,
      value: row.value,
    };
  });
  const formik = useFormik({
    mapPropsToValues: () => (
      { info_category: '' }, { info_sector: '' }, { info_addr1: '' }, { info_addr2: '' }, { info_addr3: '' }
    ),
    onSubmit: async (values) => {
      try {
        const res = await axios({
          url: `/api/query`,
          headers: {
            'content-Type': 'application/json',
          },
          method: 'POST',
          data: JSON.stringify(values),
        });
        console.log(res.data);
        enqueueSnackbar(res.data.message, { variant: 'success' });
      } catch (err) {
        console.error(err);
        // snackbar variant 값 default | error | success | warning | info
        enqueueSnackbar(err.message, { variant: 'error' });
      }
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };
  const { errors, touched, dirty, handleReset, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <div>
      <Button onClick={handleClickOpen}>Open select 업종/지역</Button>
      <FormikProvider value={formik}>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle>업종/지역을 선택하세요</DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <FormControl sx={{ m: 1, minWidth: 260 }}>
                <InputLabel htmlFor="demo-dialog-native">카테고리</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={init_category.value}
                  onChange={handleChange1}
                  {...getFieldProps('info_category')}
                  input={<OutlinedInput label="info_category" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={init_category.value}>{init_category.cat_1}</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 260 }}>
                <InputLabel htmlFor="demo-dialog-native">업종</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={init_sector.value}
                  onChange={handleChange2}
                  {...getFieldProps('info_sector')}
                  input={<OutlinedInput label="info_sector" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={init_sector.value}>{init_sector.cat_2}</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 168 }}>
                <InputLabel htmlFor="demo-dialog-native">시/도</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={init_addr1.value}
                  onChange={handleChange3}
                  {...getFieldProps('info_addr1')}
                  input={<OutlinedInput label="info_addr1" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={init_addr1.value}>{init_addr1.addr_1}</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 168 }}>
                <InputLabel id="demo-dialog-select-label">시군구</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={init_addr2.value}
                  onChange={handleChange4}
                  {...getFieldProps('info_addr2')}
                  input={<OutlinedInput label="info_addr2" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={init_addr2.value}>{init_addr2.addr_2}</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 168 }}>
                <InputLabel id="demo-dialog-select-label">읍면동</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={init_addr3.value}
                  onChange={handleChange5}
                  {...getFieldProps('info_addr3')}
                  input={<OutlinedInput label="info_addr3" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={init_addr3.value}>{init_addr3.addr_3}</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>

          <DialogActions>
            <Button type="button" className="outline" onClick={handleReset} disabled={!dirty || isSubmitting}>
              Reset
            </Button>
            <Button onClick={handleClose} type="submit" loading={isSubmitting}>
              매장검색
            </Button>
            <Button onClick={handleClose}>닫기</Button>
          </DialogActions>
        </Dialog>
      </FormikProvider>
    </div>
  );
}
