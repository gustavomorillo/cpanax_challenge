import { FC } from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { Card, CardMedia, CardContent } from ".";
import { Product } from "../../utils/interfaces";

interface Props {
  product: Product;
  handleOpen: (e: string[]) => void;
  gridValue: number;
}

export const ProductCard: FC<Props> = ({
  product,
  handleOpen,
  gridValue,
}: Props) => {
  const matchesMobile = useMediaQuery("(max-width:640px)");
  return (
    <>
      <Card onClick={() => handleOpen(product.images)}>
        <CardMedia
          gridvalue={gridValue}
          matchesmobile={matchesMobile}
          image={product.images[0]}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="#000">
            {product.brand}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
