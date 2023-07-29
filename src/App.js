import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Adidas Falcon W",
          img: "AdidasFalconW.jpg",
          desc: "Технология поддержания стопы torsion",
          category: "addidas",
          price: "7400",
        },
        {
          id: 2,
          title: "Asics Tiger runner",
          img: "AsicsTigerrunner.jpg",
          desc: "Легкие кроссовки с верхом из сетки (текстиль)",
          category: "asics",
          price: "7000",
        },
        {
          id: 3,
          title: "Nike Court Royale2",
          img: "NikeCourtRoyale2.jpg",
          desc: "Искусственная кожа из переработанных материалов Нескользящая резиновая подошва",
          category: "nike",
          price: "9200",
        },
        {
          id: 4,
          title: "Vans NM Filmore",
          img: "VansNMFilmore.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur",
          category: "vans",
          price: "7200",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
