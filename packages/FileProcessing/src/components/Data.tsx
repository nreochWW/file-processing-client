import * as React from "react";
import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";

const NEW_STATUS = gql`
  subscription {
    newStatus {
      _id
      text
    }
  }
`;

export default function Data() {
  const { data, error, loading } = useSubscription(NEW_STATUS, {
    onSubscriptionData: ({ client, subscriptionData }) => {
      console.log("subscriptionData", subscriptionData);
    }
  });
  return <div>{loading ? <p>Loading</p> : <p>{JSON.stringify(data)}</p>}</div>;
}
