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
  FormGroup,
  Stack,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";

const Dashboard = () => {
  const dense = true; // useState
  const secondary = true; // useState

  return (
    <React.Fragment>
      <Typography variant="h5" component="h1">
        Welcome to Utak.io
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Products
          </Typography>
          <List dense={dense}>
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
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : "Add"}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Product Entry Form
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select label="Category" value={10}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <TextField variant="outlined" label="Name" />
          </FormControl>
          <FormControl fullWidth>
            <FormGroup>
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
            </FormGroup>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              variant="outlined"
              label="Price"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              variant="outlined"
              label="Cost"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              variant="outlined"
              label="In Stock"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </FormControl>
          <FormControl fullWidth>
            <Stack spacing={2} direction="row">
              <Button variant="outlined" color="secondary">
                Clear
              </Button>
              <Button variant="contained">Submit</Button>
            </Stack>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
