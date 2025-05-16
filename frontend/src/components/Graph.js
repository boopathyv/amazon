import * as React from 'react';
import Box from '@mui/material/Box';
import {
  randomInt,
  randomName,
  randomId,
  randomBoolean,
} from '@mui/x-data-grid-generator';
import { RichTreeViewPro } from '@mui/x-tree-view-pro/RichTreeViewPro';

const fetchData = async () => {
  const length = randomInt(2, 10);
  const rows = Array.from({ length }, () => ({
    id: randomId(),
    label: randomName({}, {}),
    ...(randomBoolean() ? { childrenCount: length } : {}),
  }));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(rows);
    }, 1000);
  });
};



export default function Graph() {
    const initialItems = [
        { id: '1', label: 'Amy Harris', childrenCount: randomInt(1, 5) },
        { id: '2', label: 'Sam Smith', childrenCount: randomInt(1, 5) },
        { id: '3', label: 'Jordan Miles', childrenCount: randomInt(1, 5) },
        { id: '4', label: 'Amalia Brown', childrenCount: randomInt(1, 5) },
      ];
      
  return (
    <Box sx={{ width: '300px' }}>
      <RichTreeViewPro
        items={initialItems}
        dataSource={{
          getChildrenCount: (item) => item?.childrenCount,
          getTreeItems: fetchData,
        }}
      />
    </Box>
  );
}
