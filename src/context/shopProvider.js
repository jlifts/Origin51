import React, { Component } from "react";
import client from "../config/shopifyClient";

const ShopContext = React.createContext();

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    quantity: 1,
  };

  componentDidMount() {
    // this.createCheckout();

    if (localStorage.checkout) {
      this.fetchCheckout(localStorage.checkout);
    } else {
      this.createCheckout();
    }
  }

  //data query
  getVariants = (handle) => {
    const qtyQuery = client.graphQLClient.query((root) => {
      root.add(
        "productByHandle",
        { args: { handle: `${handle}` } },
        (product) => {
          product.add("title");
          product.add("handle");
          product.add("id");
          product.addConnection(
            "variants",
            { args: { first: 99 } },
            (variant) => {
              variant.add("id");
              variant.add("title");
              variant.add("availableForSale");
              variant.add("quantityAvailable");
              variant.add("currentlyNotInStock");
              variant.add("price");
              variant.add("selectedOptions", (opts) => {
                opts.add("name");
                opts.add("value");
              });
            }
          );
        }
      );
    });

    return client.graphQLClient
      .send(qtyQuery)
      .then((res) => {
        return JSON.parse(JSON.stringify(res.model.productByHandle));
      })
      .catch(() => null);
  };

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout", checkout.id);
    await this.setState({ checkout: checkout });
  };

  fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout: checkout });
      })
      .catch((err) => console.log(err));
  };

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductWithId = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({ product: product });
    console.log(JSON.stringify(product));

    return product;
  };
  //add to checkout
  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout: checkout });
    console.log(checkout);

    this.openCart();
  };
  //remove line item
  removeLineItems = async (variantId) => {
    const lineItemsToRemove = [variantId];
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemsToRemove
    );
    this.setState({ checkout: checkout });
    console.log(checkout);
  };
  //cart sidebar handler
  closeCart = () => {
    this.setState({ isCartOpen: false });
  };
  openCart = () => {
    this.setState({ isCartOpen: true });
  };
  //variants
  getSelectedVariant = async (product, options) =>
    await client.product.helpers.variantForOptions(product, options);

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithId: this.fetchProductWithId,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItems: this.removeLineItems,
          getVariants: this.getVariants,
          getSelectedVariant: this.getSelectedVariant,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
