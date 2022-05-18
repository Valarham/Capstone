import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import FileOpenIcon from '@mui/icons-material/FileOpen';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { faker } from '@faker-js/faker';
import {
  Grid,
  Card,
  Link,
  Container,
  Table,
  Stack,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../Home/Dashboard/@Dashboard/app';
import DetailOrderline from './Detailsection/DetailOrderline';
import DetailMenu from './Detailsection/DetailMenu';
const StyledBox = styled(Card)(({ theme }) => ({
  position: 'absolute',
  top: '40%',
  left: '50%',
  flexDirection: 'colunm',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
  width: '80%',

  bgcolor: 'background.paper',
  border: '2px solid #000',
  margin: theme.spacing(2, 0, 2, 2),
  boxShadow: 24,
  p: 4,
}));

export default function DetailStore(props) {
  const [board, setBoard] = useState({
    store_name: '',
    telephone: '',
    sub_category: '',
    rating: '',
    review_count: '',
    isnew: '',
    address: '',
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = (props) => setOpen(true);
  const handleClose = () => setOpen(false);

  //   useEffect(() => {
  //     console.log(props);
  //     getBoard(props.params.id);
  //   }, []);

  //   const getBoard = async (id) => {
  //     const res = await axios.get(`/api/dashboard/${id}`);
  //     console.log(res.data);
  //     setBoard(res.data);
  //   };

  //   const handleInput = async () => {
  //     const res = await axios.post(`/api/dashgboard?id=${props.params.id}`);
  //     console.log(res.data);
  //     setOpen(false);
  //};
  return (
    <div>
      <GridActionsCellItem icon={<FileOpenIcon />} label="Store" onClick={handleOpen} />
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        closeButton
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Container>
          <StyledBox>
            <Box sx={{ my: 3 }}>
              <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                망원동티라미수 익선동점
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                업종 : 제과 베이커리 별점 : 3.9 리뷰수 : 37
                {/* <br>업종 : 제과 베이커리</br>
                <br>별점 : 3.9 </br>
                <br>리뷰수 : 37</br> */}
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={6} md={2} lg={5}>
                <DetailMenu
                  title="매장 사진"
                  list={[...Array(5)].map((_, index) => ({
                    store_code: faker.datatype.uuid(),
                    title: faker.name.jobTitle(),
                    description: faker.name.jobTitle(),
                    image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                    postedAt: faker.date.recent(),
                  }))}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={5}>
                <DetailOrderline
                  title="Order Timeline"
                  list={[...Array(5)].map((_, index) => ({
                    store_code: faker.datatype.uuid(),
                    title: [
                      '서울 종로구 수표로28길 22',
                      '낙원동 120-2',
                      '매일 12:00 ~ 23:00',
                      '02-745-9446',
                      'https://www.instagram.com/mangti_ikseon/',
                    ][index],
                    type: `order${index + 1}`,
                    subdetail: ['도로명 주소', '지번', '영업시간', '매장 전화번호', '매장 URL'][index],
                  }))}
                />
              </Grid>
            </Grid>
          </StyledBox>
        </Container>
      </Modal>
    </div>
  );
}
