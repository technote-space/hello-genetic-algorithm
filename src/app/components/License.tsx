import React, { useMemo, useCallback, FC } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Box from '@mui/material/Box';
import license from '../../../ThirdPartyNotices.txt';

const License: FC = () => {
  const handleClick = useCallback(async() => {
    const res  = await axios.get(license, {
      responseType: 'blob',
    });
    const blob = new Blob([res.data]);
    saveAs(blob, 'ThirdPartyNotices.txt');
  }, []);

  return useMemo(() => <Box sx={{ background: '#555', marginTop: '10px', padding: '5px', textAlign: 'center' }}>
    <Box sx={{ cursor: 'pointer' }}>
      <a onClick={handleClick}>License</a>
    </Box>
  </Box>, []);
};

export default License;
