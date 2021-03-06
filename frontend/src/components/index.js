import React from "react";
import gql from "graphql-tag";
import {Query} from "react-apollo";

const FormBox = styled(Box)({
  boxShadow: "0 2px 4px rgba(0, 0, 0, .125)"
});

function Index() {
  return (
    <Query query={ALL_USERS_QUERY}>
      {({loading, error, data}) => {
        if (loading) return null;
        if (error) return `Error! ${error}`;

        return (
          <>
            {data.allUsers.map(user => {
              return (
                <div>
                  <h1 key={user.id}>
                    {user.email} {user.username}
                  </h1>
                </div>
              );
            })}
          </>
        );
      }}
    </Query>
  );
}

const ALL_USERS_QUERY = gql`
  {
    allUsers {
      id
      username
      email
    }
  }
`;

export default Index;
