import React from "react";
import { queryFetch, QueryFetchParams } from "../api/common";

export default function useFetch(props: QueryFetchParams) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [res, setRes] = React.useState<any>();

  const fetch = async () => {
    try {
      setLoading(true);
      const res = await queryFetch(props);
      setLoading(false);
      setRes(res);
      return;
    } catch {
      console.error("failed to fetch");
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetch();
  }, []);

  return { res, loading };
}
