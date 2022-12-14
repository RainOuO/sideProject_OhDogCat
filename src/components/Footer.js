import React from 'react';
import logobody from '../images/logo_dog-body.svg';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className=" footer_container container d-flex justify-content-center">
        <div className="footer_tittle_logo ">
          <img className="footer_dog  " src={logobody} alt="dog" />
        </div>
        <div className="footer_aside">
          <div className=" footer_Icon justify-content-end d-flex">
            <Link to="/" className="footer_Icon_fb  py-2 ">
              <AiOutlineFacebook />
            </Link>
            <Link to="/" className="footer_Icon_ig  py-2 ">
              <AiOutlineInstagram />
            </Link>
            <Link to="/" className="footer_Icon_yt  py-2 ">
              <AiFillYoutube />
            </Link>
            <Link to="/" className="footer_Icon_yt  py-2 ">
              <AiFillYoutube />
            </Link>
          </div>
          <div className="Footer_allproduct justify-content-end d-flex  ">
            <ul className=" list-unstyled d-flex flex-nowrap nowrap ">
              <Link to="/" className="footer_product mx-2">
                住宿
              </Link>
              <Link to="/" className="footer_product mx-2">
                景點&玩樂
              </Link>
              <Link to="/" className="footer_product mx-2">
                餐廳
              </Link>
              <Link to="/" className="footer_product mx-2">
                寵物商品
              </Link>
              <Link to="/" className="footer_product mx-2">
                我的行程
              </Link>
              <Link to="/" className="footer_product mx-2">
                社群分享
              </Link>
            </ul>
          </div>
          <div className="footer_Copright justify-content-end d-flex align-items-center mt-md-5 mt-4">
            Copyright©
            <br className="d-md-none d-block" />
            OhDogCat All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
