import React, { Component } from "react";
import withContext from "../withContext";
import { Redirect } from "react-router-dom";
import axios from 'axios';

// export default function AddProduct() {
//   return <>הוספת מוצר</>
// }

const initState = {
  name: "",
  price: "",
  stock: "",
  owner: "",
  description: "",
  image:""
};

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  save = async (e) => {
    e.preventDefault();
    const { name, price, stock, owner, description,image } = this.state;

    if (name && price) {
      const id = Math.random().toString(36).substring(2) + Date.now().toString(36);

      await axios.post(
        'http://localhost:3000/products',
        { id, name, price, stock, owner, description,image },
      )

      this.props.context.addProduct(
        {
          name,
          price,
          owner,
          image,
          description,
          stock: stock || 0
        },
        () => this.setState(initState)
      );
      this.setState(
        { flash: { status: 'is-success', msg: 'המוצר הוכנס בהצלחה' }}
      );

    } else {
      this.setState(
        { flash: { status: 'is-danger', msg: 'נא להכניס שם ומחיר' }}
      );
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  render() {
    const { id, name, price, stock, owner, description,image } = this.state;
    const { user } = this.props.context;

    return (
      !(user && user.accessLevel < 1) ? (
        <Redirect to="/" />
      ) : 
      <>
        <div className="hero ">
          <div className="hero-body container">
            <h4 className="title">הוספת מוצר:</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.save}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">שם המוצר:  </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">מחיר:  </label>
                <input
                  className="input"
                  type="number"
                  name="price"
                  value={price}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">מלאי: </label>
                <input
                  className="input"
                  type="number"
                  name="stock"
                  value={stock}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">חקלאי: </label>
                <input
                  className="input"
                  type="text"
                  name="owner"
                  value={owner}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">תיאור: </label>
                <textarea
                  className="textarea"
                  type="text"
                  rows="2"
                  style={{ resize: "none" }}
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.flash && (
                <div className={` ${this.state.flash.status}`}>
                  {this.state.flash.msg}
                </div>
              )}
              <div className="field is-clearfix">
                <button
                  className="button  is-outlined is-pulled-right"
                  type="submit"
                  onClick={this.save}
                >
                  אישור
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default withContext(AddProduct);