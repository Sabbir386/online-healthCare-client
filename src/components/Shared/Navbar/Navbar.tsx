import { Box, Container, Stack, Typography } from "@mui/material";


const Navbar = () => {
  return (
    <Container>
      <Stack py={2} direction="row" justifyContent="space-between" alignItems="center">

        <Typography variant="h5" component={"h1"} fontWeight={600} >
          <Box component={"span"} color="primary.main">H</Box>ealtCare 
        </Typography>
      </Stack>
    </Container>
  );
};

export default Navbar;