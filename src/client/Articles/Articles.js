import React, { Component } from "react";
import Menus from "../Menus/Menus";
import article1 from "../images/article1.png";
import "./Articles.css";

export default class Articles extends Component {
  render() {
    return (
      <div>
        <Menus />
        <div className='article-container'>
          <div className='left-column'>
            <img src={article1} alt='article' className='article' />
            <p className='image-credit'>Image credit: KB Homes</p>
          </div>
          <div className='right-column'>
            <h3>Everything you ever wanted to know about becoming a homeowner</h3>
            <p>By AMY FONTINELLE </p>
            <p>Updated Jan 27, 2021</p>
            <h6>KEY TAKEAWAYS</h6>
            <p>
              Before you begin home-hunting, ask yourself what sort of residence best suits your needs and wants, how
              much home you can actually afford, how much financing you can get, and who will help you in your search.
              The actual homebuying process includes finding a place, securing financing, making an offer, obtaining a
              home inspection, and closing the deal. As a new homeowner, you must maintain the residence, but also to
              keep on saving money—don't rely on selling a home to fund your retirement, no matter what the housing
              market does.
            </p>
            <p>https://www.investopedia.com/homebuying-guide-4776300</p>
          </div>
        </div>
      </div>
    );
  }
}
