import  { useState } from 'react';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const CustomPagination = () => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default CustomPagination;
