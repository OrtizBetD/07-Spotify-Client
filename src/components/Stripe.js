import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";

class Stripe extends React.Component {
  state = {
    message: {
      content: "",
      type: ""
    }
  };
  pay = () => {
    this.props.stripe.createToken({}).then(res => {
      //  console.log(res.token);
      if (res.token) {
        axios
          .post(`${process.env.REACT_APP_API}/pay`, { token: res.token.id })
          .then(res =>
            this.setState({
              message: {
                content: "pay sucessfull thank you",
                type: "sucess"
              }
            })
          );
        //setTimeout(() => this.props.closePaywall(), 2000);
        setTimeout(() => {
          this.props.closePaywall();
          let element = document.querySelector(".StripeElement > div");
          console.log(element);
          //  element.clear();
        }, 2000);
      } else {
        this.setState({
          message: {
            content: "payment failed, please try again",
            type: "error"
          }
        });
      }
    });
  };
  getMessageClass = () => {
    if (!this.state.message.type) {
      return "";
    } else if (this.state.message.type === "success") {
      return "success";
    } else {
      return "error";
    }
  };
  render() {
    return (
      <>
        <CardElement />
        {this.state.message.type == "sucess" ? (
          <div
            className={this.getMessageClass()}
            style={{ backgroundColor: "lightgreen" }}
          >
            {this.state.message.content}
          </div>
        ) : (
          ""
        )}
        {this.state.message.type == "error" ? (
          <div
            className={this.getMessageClass()}
            style={{ backgroundColor: "red" }}
          >
            {this.state.message.content}
          </div>
        ) : (
          ""
        )}
        <button className="submit" onClick={this.pay}>
          Pay
        </button>
      </>
    );
  }
}

export default injectStripe(Stripe);
