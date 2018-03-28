import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';

import './index.css';
import App from './App';
import { createReduxStore, } from './store';
import INITIAL_STATE from './reducers/initial-state';
import registerServiceWorker from './registerServiceWorker';

export class TheUIGuy {
  constructor() {
    this.isRendered = false;
    this.reactInstance = null;
    this.isInitialized = false;
    const initialState = { ...INITIAL_STATE, };

    this.store = createReduxStore(initialState);
    this.render();
  }

  /**
   * Renders the component in the root element given via configuration
   * (config.root) if the component is not yet rendered.
   *
   * @return {TheUIGuy} instance of this component.
   * @public
   */
  render() {
    if (!this.isRendered) {
      this.reactInstance = ReactDOM.render(
        <Provider store={this.store}>
          <App/>
        </Provider>,
        document.getElementById('root'));

      registerServiceWorker();
      this.isRendered = true;
    }

    return this;
  }

  /**
   * Destroys this component.
   *
   * @public
   */
  destroy() {
    if (this.isRendered) {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      this.reactInstance = null;
      this.isRendered = false;
      this.isInitialized = false;
    }
  }
}

window.component = new TheUIGuy();

