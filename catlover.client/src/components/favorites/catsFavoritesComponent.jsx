import React, { Component } from "react";
import CatFavoriteComponent from "./catFavoriteComponent";
import LoadingComponent from "../loading/loadingComponent";
import ErrorComponent from "../error/errorComponent";
import PageTitleComponent from "../pageTitle/pageTitleComponent";

class CatsFavoriteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      message: String,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:10000/catsfavorites")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            message: result.message,
            items: result.data,
          });
          console.log(this.state);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, message, items } = this.state;
    if (error) {
      return (
        <div>
          <ErrorComponent errorMessage={error.message} />
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div>
          <LoadingComponent />
        </div>
      );
    } else {
      return (
        <div className="container">
          <PageTitleComponent title={message} />
          <div className="card-group m-2">
            <div className="row">
              {items.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
                  <CatFavoriteComponent
                    photoUrl={item.photoUrl}
                    breedId={item.breedId}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CatsFavoriteComponent;
