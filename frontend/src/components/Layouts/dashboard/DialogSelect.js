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
} from '@mui/material';
import axios from 'axios';
export default function DialogSelect() {
  const [info_addr1, setaddrInfo1] = useState([]);
  const [info_addr2, setaddrInfo2] = useState([]);
  const [info_addr3, setaddrInfo3] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [addr, setAddr] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const handleChange = (event) => {
    setAddr(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/addr_1');
      setaddrInfo1(res.data.results);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Button onClick={handleClickOpen}>Open select 업종/지역</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Addr</InputLabel>
              <Select
                native
                value={addr}
                onChange={handleChange}
                input={<OutlinedInput label="addr" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Addr</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={addr}
                onChange={handleChange}
                input={<OutlinedInput label="addr" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
