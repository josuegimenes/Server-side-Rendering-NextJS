import React, { Component } from 'react';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import ReactGA from 'react-ga';

// Padrão de HOC
export default () => Composed =>
  class extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount() {
      console.log("PAGE VIEW");

      ReactGA.initialize('Aplique aqui seu ID Analytics');
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };