import React from "react";
import { CartList, OrderSummary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const CartPage = () => {
  return (
    <ShopLayout title={"Carrito"} pageDescription={"Carrito de compras"}>
      <Typography variant="h1" component={"h1"}>
        Carrito
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          {/* Cart List */}
          <CartList editable></CartList>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Orden</Typography>
              <Divider sx={{ my: 1 }}></Divider>
              {/* order summary */}
              <OrderSummary></OrderSummary>
              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;
