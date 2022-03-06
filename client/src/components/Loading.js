import { Box, CircularProgress } from '@material-ui/core'

export default function Loading() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
      <p>Loading . . .</p>
    </Box>
  );
}
