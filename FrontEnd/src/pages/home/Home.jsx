import React from "react";
import "./home.css";
import Nav from "../../components/Nav";
import duckImage from "../../assets/original-7865f4de79a58ed89ca58662a76d8161-removebg-preview.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import polygon from "../../assets/65b6d9bcbd2e7d160dc57678_polygon.svg";
import stack from "../../assets/65b6d9c7b053347dc8359482_stacks.svg";
import arbitrum from "../../assets/65b6d9e2c28cd4c1943a4e62_arbitrum.svg";
import avalanche from "../../assets/65b6d9ebbe58c763edb59d95_avalanche.svg";
import tron from "../../assets/65b6d9fdcebba152b5eec2f9_tron.svg";
import solana from "../../assets/65b6d96a80c184325a4b22b5_solana.svg";
import binance from "../../assets/65b6d98313bba4915a554d94_binance.svg";
import gnosis from "../../assets/65b6dabf2253653d393581d0_gnosis.svg";
import ton from "../../assets/6613ca90d213ccdbac1c088d_ton_logo.svg";
import cosmos from "../../assets/65b6d9423228c88b676569ec_cosmos.svg";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home">
        <div className="homeMain">
          <div className="homeMainL">
            <p className="homeMainL1">
              Tap, Farm, Earn - Grow Your Wealth with Every Tap!
            </p>
            <p className="homeMainL2">
              A brilliant coinfarm system created to provide an accessible and
              engaging way for users to earn real rewards through simple and
              enjoyable gameplay
            </p>
            <div className="homeMainL3">
              <button>Launch Bot On Telegram</button>
            </div>
          </div>
          <div className="homeMainR">
            <img className="homeMainRImg" src={duckImage} alt="" />
          </div>
        </div>
        <div className="homeMainPartners">
          <p className="homeMainPartnersHead">Supported Chains</p>
          <div className="homeMainPartnersLogo">
            <img src={arbitrum} alt="" />
            <img src={polygon} alt="" />
            <img src={ton} alt="" />
            <img src={avalanche} alt="" />
            <img src={stack} alt="" />
            <img src={solana} alt="" />
            <img src={tron} alt="" />
            <img src={cosmos} alt="" />
            <img src={gnosis} alt="" />
            <img src={binance} alt="" />
          </div>
        </div>
        <div className="homeMainAbout">
          <div className="homeMainAboutL">
            <p> What is Capital Duck?</p>
          </div>
          <div className="homeMainAboutR">
            <p>
              CapitalDuck is the ultimate platform where your taps turn into
              real rewards! With Capital Duck, you can boost your earnings,
              invite friends to join the fun, and watch your wealth grow
              together.
            </p>
          </div>
        </div>
        <div className="homeMid">
          <div className="homeMidTop">
            <p className="homeMidTop1">Want To Join ?</p>
            <p className="homeMidTop2">Sign Up and Earn Your First Reward!</p>
          </div>
          <div className="homeMidMain">
            <div className="homeMidMain1">
              <p className="homeMidMain1Head">Choose Your Path</p>
              <div className="homeMidMain1Cont">
                <p>For Stakers</p>
                <small>
                  <span>Invest to Begin</span>: - Start farming by staking just
                  $1. This investment gives you a higher earning speed.
                </small>
                <p className="homeMidMain1Cont1">For Non-Stakers</p>
                <small>
                  <span>No Investment Needed</span>: - Start farming without an
                  initial stake, but at a reduced earning speed.
                </small>
              </div>
            </div>
            <div className="homeMidMain1">
              <p className="homeMidMain1Head">Farm Coins</p>
              <div className="homeMidMain1Cont">
                <p>Tap to Earn</p>
                <small>
                  Simply tap the screen to collect coins. The more you tap, the
                  more you earn!
                </small>
                <p id="homeMidMain1Cont2">Speed Boosts</p>
                <small>
                  Use boosts to increase your tap speed and maximize your coin
                  production.
                </small>
              </div>
            </div>
            <div className="homeMidMain1">
              <p className="homeMidMain1Head">Invite Friends</p>
              <div className="homeMidMain1Cont">
                <p>Earn More Together</p>
                <small>
                  Invite your friends to join Capital Duck. For every friend who
                  starts farming, you get a new tapcard.
                </small>
                <p id="homeMidMain1Cont2">Shared Success</p>
                <small>
                  As your friends earn coins, you earn a share of their rewards
                  too. Everyone benefits!
                </small>
              </div>
            </div>
            <div className="homeMidMain1">
              <p className="homeMidMain1Head">Cash Out</p>
              <div className="homeMidMain1Cont">
                <p>Convert Coins to Cash</p>
                <small>Turn your coins into real money.</small>
                <p id="homeMidMain1Cont2">Surprise Payouts</p>
                <small>
                  Look out for our announcements 5 days before payday. Exciting
                  surprises await!
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="homeBottom">
          <div className="homeBottomL">
            <img src={duckImage} />
            <p className="homeBottomL1">Join The Community</p>
            <p className="homeBottomL2">
              Become A Part Of CapitalDuck Community, Choose The Path That Best
              Suits You To Start Earning Real Rewards And Also Have A Say In Our
              Continuous Protocol Development.
            </p>
            <p className="homeBottomL3">
              ©2024 Capital Duck. All rights reserved.
            </p>
          </div>
          <div className="homeBottomR">
            <div className="iconDiv">
              <FaDiscord className="discordIcon" />
              <FaTelegramPlane className="telegramIcon" />
              <FaXTwitter className="twitterIcon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
