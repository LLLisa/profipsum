import React from 'react';
import loremGen from '../data';

export default class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      sentences: 1,
      paragraphs: 1,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  generateParagraphs() {
    const { sentences, paragraphs } = this.state;
    const result = [];
    for (let n = 0; n < paragraphs; n++) {
      result.push(loremGen(sentences));
    }
    return result;
  }

  render() {
    const { sentences, paragraphs } = this.state;
    return (
      <div className="container">
        <h1>Prof Ipsum</h1>
        <form className="container-flush">
          <input
            type="number"
            name="sentences"
            value={sentences}
            min="1"
            onChange={this.handleOnChange}
          ></input>
          <label htmlFor="sentences">number of sentences per paragraph</label>

          <input
            type="number"
            name="paragraphs"
            value={paragraphs}
            min="1"
            onChange={this.handleOnChange}
          ></input>
          <label htmlFor="paragraphs">number of paragraphs</label>
        </form>
        <div className="mt-3">results below:</div>
        <hr />
        {this.generateParagraphs().map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    );
  }
}
