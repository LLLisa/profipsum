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
      <div className="container mt-4">
        <h1 className="text-center">Prof Ipsum</h1>
        <form className="form-floating mb-3">
          <div className="d-flex align-items-center justify-content-center">
            <div className="mx-auto">
              <input
                className="form-control"
                type="number"
                name="sentences"
                value={sentences}
                min="1"
                onChange={this.handleOnChange}
              ></input>
              <label htmlFor="sentences">
                number of sentences per paragraph
              </label>
            </div>
            <div className="mx-auto">
              <input
                className="form-control"
                type="number"
                name="paragraphs"
                value={paragraphs}
                min="1"
                onChange={this.handleOnChange}
              ></input>
              <label htmlFor="paragraphs">
                number of paragraphs to generate
              </label>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-11 mx-auto">
            <hr />
            {this.generateParagraphs().map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="text-center mt-4">
            <em> - Eric "Prof" Katz</em>
          </div>
        </div>
      </div>
    );
  }
}
