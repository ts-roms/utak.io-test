import React, { useState } from "react";
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
  FormControlLabel,
  Stack,
  Button,
  styled,
  Paper,
  Box,
  Radio,
  RadioGroup,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import { useDispatch } from "react-redux";
import {
  createProduct,
  getProducts,
  removeProduct,
  updateProduct,
  removeProducts
} from "../store/actions/product.actions";

const GridContainer = styled(Grid)(({ thene }) => ({
  padding: "10px",
}));

const PaperContainer = styled(Paper)(({ theme }) => ({
  padding: "25px",
  marginTop: "14px",
}));

const StyledList = styled(List)(({ theme }) => ({
  minHeight: "45vh",
}));

const StyledListItem = styled(ListItem)(({ theme}) => ({
  cursor: 'pointer'
}))

const Dashboard = () => {
  const defaultValues = {
    category: "",
    name: "",
    size: "",
    price: 0,
    cost: 0,
    in_stock: 0,
  };

  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const [formValues, setFormValues] = useState(defaultValues);
  const [products, setProducts] = useState([]);
  const [productData, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [productId, setProductId] = useState("");

  useState(() => {
    dispatch(getProducts())
      .then((data) => setProducts(data))
      .catch((error) => console.log("ERRPR", error));
  }, [productData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProduct(formValues))
      .then((data) => {
        setData(data);
        handleResetForm();
      })
      .catch((error) => console.log("error", error));
  };

  const handleRemoveProduct = (e, productId) => {
    e.preventDefault();
    dispatch(removeProduct(productId))
      .then(() => console.log("deleted"))
      .catch((error) => console.log("error", error));
  };

  const handleResetForm = () => {
    setFormValues(defaultValues);
  };

  const handleCategoryChange = (event) => {
    const { value, name } = event.target;
    setCategory(value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleEditProduct = (event, product, productId) => {
    event.preventDefault();
    setFormValues(product);
    setProductId(productId);
    setIsUpdate(true);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateProduct(formValues, productId))
      .then(() => {
        setFormValues(defaultValues);
        setIsUpdate(false);
      })
      .catch((error) => console.log("error", error));
  };

  const generateProducts = (products) => {
    const keys = Object.keys(products);
    return Object.values(products).map((product, key) => {
      return (
        <StyledListItem
          key={key}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={(e) => handleRemoveProduct(e, keys[key])}
            >
              <DeleteIcon />
            </IconButton>
          }
          onClick={(e) => {
            handleEditProduct(e, product, keys[key]);
          }}
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
        </StyledListItem>
      );
    });
  };

  const handleRemoveAll = (event) => {
    event.preventDefault()
    console.log('CALLED')
    dispatch(removeProducts())
    .then(() => {
      setFormValues(defaultValues);
      setIsUpdate(false);
    })
    .catch((error) => console.log("error", error));
  }

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
            <StyledList>
              {generateProducts(products)}
              <Button variant="outlined" startIcon={<DeleteIcon  />} onClick={handleRemoveAll}>
                Delete All
              </Button>
            </StyledList>
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
              onSubmit={!isUpdate ? handleSubmit : handleUpdate}
            >
              <Grid container spaceing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                      label="Category"
                      value={category}
                      id="category"
                      name="category"
                      onChange={handleCategoryChange}
                      required
                    >
                      <MenuItem value={"category_1"}>Category 1</MenuItem>
                      <MenuItem value={"category_2"}>Category 2</MenuItem>
                      <MenuItem value={"category_3"}>Category 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      variant="outlined"
                      label="Name"
                      id="name"
                      name="name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <Typography variant="h6" component="label">
                      Size
                    </Typography>
                    <RadioGroup
                      name="size"
                      value={formValues.size}
                      onChange={handleInputChange}
                      row
                    >
                      <FormControlLabel
                        key="small"
                        value="small"
                        control={<Radio size="medium" />}
                        label="Small"
                      />
                      <FormControlLabel
                        key="medium"
                        value="medium"
                        control={<Radio size="medium" />}
                        label="Medium"
                      />
                      <FormControlLabel
                        key="large"
                        value="large"
                        control={<Radio size="medium" />}
                        label="Large"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      variant="outlined"
                      label="Price"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      type="number"
                      id="price"
                      name="price"
                      value={formValues.price}
                      onChange={handleInputChange}
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
                      id="cost"
                      name="cost"
                      value={formValues.cost}
                      onChange={handleInputChange}
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
                      id="in_stock"
                      name="in_stock"
                      value={formValues.in_stock}
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={2} direction="row" sx={{ mt: 4 }}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      onClick={handleResetForm}
                    >
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
