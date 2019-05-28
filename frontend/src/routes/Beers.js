import React from "react";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import styled from "styled-components";
import Box from "../components/layout/Box";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1em;
  justify-items: center;
  align-items: center;
  width: 100%;
`;
const BeerBox = styled.div`
  height: 100%;
  width: 300px;
  background: #fff;
  border-radius: 20px;
  padding: 1em;
  h3 {
    text-align: center;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 175px;
  }
  .icon {
    display: flex;
    align-items: center;
    margin: 1em 0;
    span {
      margin-left: 0.5em;
    }
    img {
      width: 42px;
      height: 100%;
      object-fit: cover;
    }
  }
  .meta-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
    color: #777;
  }
  .description {
    color: #777;
  }
`;

function Beers() {
  return (
    <Query query={GET_RANDOM_BEERS_QUERY}>
      {({loading, error, data}) => {
        if (loading) return null;
        if (error) return `Error! ${error}`;

        return (
          <Container>
            {data.getRandomBeers.map((beer, index) => {
              return (
                <BeerBox>
                  <img src={beer.labels.medium} />
                  <h3 key={index}>{beer.name}</h3>
                  <div className="icon">
                    <img src={beer.breweries[0].images.icon} />
                    <span>{beer.breweries[0].name}</span>
                  </div>
                  <div className="meta-content">
                    <span>
                      <strong>ABV: </strong> {beer.abv}
                    </span>
                    <span>
                      <strong>Style: </strong>{" "}
                      {beer.style.shortName ? beer.style.shortName : ""}
                    </span>
                  </div>
                </BeerBox>
              );
            })}
          </Container>
        );
      }}
    </Query>
  );
}

const GET_RANDOM_BEERS_QUERY = gql`
  {
    getRandomBeers {
      name
      abv
      description
      style {
        shortName
      }
      labels {
        medium
      }
      breweries {
        name
        website
        images {
          icon
        }
      }
    }
  }
`;

export default Beers;
