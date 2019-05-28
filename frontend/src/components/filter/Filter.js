import React from "react";
import styled from "styled-components";
import {TabSecondary} from "../common/Button";

const FilterTreeStyle = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.125);
  max-width: 100%;
  height: 100%;
  background: #fff;
  margin: 0 2em;
  .category {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1em;
    span {
      align-self: flex-start;
      font-size: 0.9em;
      margin-bottom: 0.5em;
    }
    .tab {
      margin-right: 0.5em;
    }
  }
`;

function FilterTree() {
  return (
    <FilterTreeStyle>
      <div className="category">
        <span>Serving Style</span>
        <ul>
          <TabSecondary className="tab">IPA</TabSecondary>
          <TabSecondary className="tab">IPA</TabSecondary>
          <TabSecondary className="tab">IPA</TabSecondary>
          <TabSecondary className="tab">IPA</TabSecondary>
          <TabSecondary className="tab">IPA</TabSecondary>
        </ul>
      </div>
      <div className="category">
        <span>Flavor</span>
        <ul>
          <TabSecondary className="tab">IPA</TabSecondary>
          <TabSecondary className="tab">IPA</TabSecondary>
          <TabSecondary className="tab">IPA</TabSecondary>
          <TabSecondary className="tab">IPA</TabSecondary>
          <TabSecondary className="tab">IPA</TabSecondary>
        </ul>
      </div>
      <div className="category">
        <span>Location</span>
        <ul>
          <TabSecondary className="tab">IPA</TabSecondary>
          <TabSecondary className="tab">IPA</TabSecondary>
          <TabSecondary className="tab">IPA</TabSecondary>
          <TabSecondary className="tab">IPA</TabSecondary>
          <TabSecondary className="tab">IPA</TabSecondary>
        </ul>
      </div>
    </FilterTreeStyle>
  );
}

export default FilterTree;
