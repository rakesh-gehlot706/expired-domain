"use client";
import DomainTable from "../../../../components/pages/tools/DomainTable";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function page() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://expired-domain-backend.onrender.com/graphql",
  });

  return (
    <ApolloProvider client={client}>
      
      <div>
        <DomainTable />
      </div>
    </ApolloProvider>
  );
}

export default page;
