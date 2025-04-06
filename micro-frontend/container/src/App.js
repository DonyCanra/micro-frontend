import React, { Suspense } from "react";

const Header = React.lazy(() => import("header/Header"));
const ProductsApp = React.lazy(() => import("products/App"));
const Products = React.lazy(() => import("products/Products"));

const App = () => (
  <div>
    <Suspense fallback={<div>Loading Header...</div>}>
      <Header />
    </Suspense>
    <Suspense fallback={<div>Loading Products...</div>}>
      <Products />
    </Suspense>
    <Suspense fallback={<div>Loading ProductsApp...</div>}>
      <ProductsApp />
    </Suspense>
  </div>
);

export default App;
