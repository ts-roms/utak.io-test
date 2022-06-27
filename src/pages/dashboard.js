import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Stack,
  Button,
  styled,
  Paper,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";

const GridContainer = styled(Grid)(({ thene }) => ({
  padding: "10px",
}));

const PaperContainer = styled(Paper)(({ theme }) => ({
  padding: "25px",
  marginTop: "14px",
}));

const products = [
  {
    category: "Goods",
    name: "Product 1",
    sizes: "m",
    price: 11.0,
    cost: 7.5,
    inStock: 11,
  },
];

const generateProducts = (products) => {
  return products.map((product, key) => {
    return (
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={`Product name: ${product.name}`}
          secondary={`Price: ${product.price}`}
        />
      </ListItem>
    );
  });
};

const Dashboard = () => {
  const dense = true; // useState

  const handleSubmit = () => {
    alert('Submitted')
  };

  return (
    <React.Fragment>
      <Typography variant="h5" component="h1">
        Welcome to Utak.io
      </Typography>
      <PaperContainer elevation={3}>
        <GridContainer container spacing={2}>
          <Grid item md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Products
            </Typography>
            <List dense={dense}>{generateProducts(products)}</List>
          </Grid>
          <Grid item md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Product Entry Form
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mt: 2 },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Grid container spaceing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select label="Category" value={10} required>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField variant="outlined" label="Name" required />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                  <Typography variant="h6" component="label">
                        Size
                      </Typography>
                    <Stack spacing={2} direction="row">
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label="Small"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label="Medium"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label="Large"
                      />
                    </Stack>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      variant="outlined"
                      label="Price"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      type="number"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      variant="outlined"
                      label="Cost"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      type="number"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      variant="outlined"
                      label="In Stock"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      type="number"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={2} direction="row" sx={{ mt: 4 }}>
                    <Button variant="outlined" color="secondary" fullWidth>
                      Clear
                    </Button>
                    <Button variant="contained" type="submit" fullWidth>
                      Submit
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </GridContainer>
      </PaperContainer>
    </React.Fragment>
  );
};

export default Dashboard;
