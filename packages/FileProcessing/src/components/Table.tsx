import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Data from "./Data";

const GET_STATUS = gql`
  query {
    status {
      message
    }
  }
`;

export default function Table() {
  const { loading, data } = useQuery(GET_STATUS);
  return (
    <div>
      {loading ? <p>Loading</p> : <p>{JSON.stringify(data)}</p>}
      <h1>File Processing</h1>
      <Data />
    </div>
  );
}
