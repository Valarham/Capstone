import { faker } from '@faker-js/faker';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Menu from '@mui/material/Menu';

// @mui
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import { filter } from 'lodash';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import moment from 'moment';
// material
import {
  Grid,
  Card,
  Table,
  Stack,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Iconify from '../Home/Dashboard/Iconify';
// sections
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

// components
import Scrollbar from '../Home/Dashboard/Scrollbar';
import MetaData from '../Layouts/MetaData';
import axios from 'axios';

const DetailStore = ({ match, history }) => {
  const [board, setBoard] = useState('')({
    title: '',
    content: '',
  });
  // Modal
  const values = [true, 'lg-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  useEffect(() => {
    console.log(match);
    getBoard(match.params.id);
  }, []);

  const getBoard = async (id) => {
    const res = await axios.get(`/api/dashboard/${id}`);
    console.log(res.data);
    setBoard(res.data);
  };

  const handleDown = async () => {
    // const res = await axios.get(`/api/dashboard?id=${match.params.id}`);
    // --> delete으로 바꾸면 삭제 요청
    setShow(false);
    history.goBack();
  };

  return (
    <>
      <MetaData title="DetailStore" />
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Button variant="info" onClick={() => history.push(`/board-edit/${match.params.id}`)}>
        수정
      </Button>
      <Button variant="danger" onClick={() => handleShow()}>
        삭제
      </Button>
      <div className="d-flex justify-content-between mt-3">
        <h5>{board?.user?.username}</h5>
        <h5>{moment(board?.created).format('YYYY-MM-DD')}</h5>
      </div>
      <Card className="p-3 my-3">
        <Card.Title className="pb-2" style={{ borderBottom: '1px solid #dddddd' }}>
          {board?.title}
        </Card.Title>
        <Card.Text>{board?.content}</Card.Text>
      </Card>
      {/* <CommentList board_id={match.params.id} history={history}></CommentList> */}
      <Iconify className="justify-content-center mt-3">
        <Button variant="primary" onClick={() => history.goBack()}>
          돌아가기
        </Button>
      </Iconify>
      <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>상세페이지</Modal.Title>
        </Modal.Header>
        <Modal.Body>매장 정보</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel.close
          </Button>
          <Button variant="primary" onClick={handleDown}>
            OK.Down
          </Button>
        </Modal.Footer>
      </Modal>
      ;
    </>
  );
};

export default DetailStore;
