import React, { useMemo, FC } from 'react';
import { useStoreContext } from '@technote-space/ga-framework';
import { sprintf } from 'sprintf-js';
import Box from '@mui/material/Box';

const Statistics: FC = () => {
  const { store: { logic: { fitness, progress } } } = useStoreContext();

  return useMemo(() => <Box sx={{ background: '#555', marginTop: '10px', padding: '5px' }}>
    <div>
      <Box sx={{ margin: '5px' }}>
        Progress: {sprintf('%.4f', progress)}
      </Box>
      <Box sx={{ margin: '5px' }}>
        Fitness: {sprintf('%.3f', fitness)}
      </Box>
    </div>
  </Box>, [progress]);
};

export default Statistics;
