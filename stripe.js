window.Stripe = () => {
  class _Element {
    mount(el) {
      if (typeof el === "string") {
        el = document.querySelector(el);
      }

      el.innerHTML = `
        <input id="stripe-cardnumber" placeholder="cardnumber" size="16" type="text">
        <input placeholder="exp-date" size="6" type="text">
        <input placeholder="cvc" size="3" type="text">
        <input placeholder="postal" size="6" type="text">
      `;
    }
  }

  return {
    elements: () => {
      return {
        create: (type, options) => new _Element()
      }
    },
    createToken: () => {
      return {}
    },
    createSource: () => {
      return {}
    },
    createPaymentMethod: () => {
      return {}
    },
    retrieveSource: () => {
      return {}
    },
    paymentRequest: () => {
      return {}
    },
    redirectToCheckout: () => {
      return {}
    },
    retrievePaymentIntent: () => {
      return {}
    },
    handleCardPayment: () => {
      return {}
    },
    handleCardAction: () => {
      return {}
    },
    confirmPaymentIntent: () => {
      return {}
    },
    handleCardSetup: () => {
      return {}
    },
    retrieveSetupIntent: () => {
      return {}
    },
    confirmSetupIntent: () => {
      return {}
    }
  }
}
