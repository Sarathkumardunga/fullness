import * as React from "react";
import { SingleProduct } from "./SingleProduct";

export function Card({products}) {
  return (
    <>
      <SingleProduct product={products} />
    </>
  );
}