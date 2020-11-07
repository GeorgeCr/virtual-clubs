import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { FeaturedClubs } from "../FeaturedClubs";
import "./styles.css";
import { connect } from "react-redux";
import { ClubCardProps } from "../ClubCard";
import { getFeaturedClubs } from "../../redux/actions";
import { Dispatch } from "redux";

interface LandingProps {
  getFeaturedClubs: () => (dispatch: Dispatch) => Promise<void>;
  featuredClubs: ClubCardProps[];
}

class Landing extends Component<LandingProps> {
  async componentDidMount() {
    const { getFeaturedClubs } = this.props;
    getFeaturedClubs();
  }

  render() {
    const { featuredClubs } = this.props;
    return (
      <div className="landingContainer">
        <Jumbotron>
          <h1>Welcome to Virtual Clubs</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni
            animi facilis, vero dolores natus sint culpa esse earum ea!
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <div className="featuredClubsContainer">
          {featuredClubs.length ? (
            <FeaturedClubs clubsData={featuredClubs} />
          ) : (
            <Spinner animation="border" />
          )}
        </div>
        <div className="showMoreBtnContainer">
          <Button variant="info">Show more</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  featuredClubs: state.featuredClubs,
});

const mapDispatchToProps = {
  getFeaturedClubs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
