import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ObjGridValue, Product } from "../utils/interfaces";
import { ProductCard } from "../components/product";
import { Modal } from "../components/modal";
import {
  useMediaQuery,
  Grid,
  Typography,
  Pagination,
  Box as BoxMUI,
} from "@mui/material";
import { Box } from "../style";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";

const ProductsGallery: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState<number>(12);
  const [open, setOpen] = useState<boolean>(false);
  const [productGallery, setProductGallery] = useState<string[]>([]);
  const [gridValue, setGridValue] = useState<number>(3);
  const handleClose = () => setOpen(false);
  const handleOpen = (images: string[]) => {
    setProductGallery(images);
    setOpen(true);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(products.length / recordsPerPage);

  const matchesMobile = useMediaQuery("(max-width:640px)");

  const getProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data?.products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeGrid = () => {
    const objGrid: ObjGridValue = {
      1: 12,
      2: 1,
      3: 2,
      4: 3,
      6: 4,
      12: 6,
    };
    setGridValue(objGrid[gridValue]);
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {}, [gridValue]);

  return (
    <>
      <Box onClick={handleChangeGrid}>
        <Typography mr={2}>Change view</Typography>
        <ViewWeekIcon />
      </Box>
      <Grid
        container
        spacing={2}
        p={10}
        flexDirection={matchesMobile ? "column" : "row"}
      >
        {currentRecords.map((product: Product) => (
          <Grid item xs={matchesMobile ? 12 : gridValue} key={product.id}>
            <ProductCard
              product={product}
              handleOpen={handleOpen}
              gridValue={gridValue}
            />
          </Grid>
        ))}

        <Modal open={open} handleClose={handleClose} images={productGallery} />
      </Grid>
      <BoxMUI display="flex" justifyContent="center" pb={10}>
        <Pagination count={nPages} onChange={(e, p) => setCurrentPage(p)} />
      </BoxMUI>
    </>
  );
};

export default ProductsGallery;
