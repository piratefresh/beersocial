import React from "react";
import gql from "graphql-tag";
import styled from "styled-components";
import {Query} from "react-apollo";
import TextArea from "../components/form/TextArea";
import FilterTree from "../components/filter/Filter";
import {PrimaryButtonForm} from "../components/common/Button";
import StatusForm from "../components/form/StatusForm";

const FeedContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 2em;
  button {
    margin-top: 1em;
    align-self: flex-end;
  }
`;
const PostContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  .post {
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.125);
    width: 80%;
    background: #fff;
    align-items: center;
  }
`;

function Index() {
  return (
    <Query query={GET_RANDOM_BEERS_QUERY}>
      {({loading, error, data}) => {
        if (loading) return null;
        if (error) return `Error! ${error}`;

        return (
          <>
            <FilterTree />
            <FeedContainer>
              <StatusForm />

              <PostContainerBox>
                {data.getRandomBeers.map(beer => {
                  return (
                    <div className="post">
                      <img src={beer.labels.medium} />
                      <h1 key={beer.name}>
                        {beer.name} {beer.abv}
                      </h1>
                    </div>
                  );
                })}
              </PostContainerBox>
            </FeedContainer>
          </>
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

export default Index;
