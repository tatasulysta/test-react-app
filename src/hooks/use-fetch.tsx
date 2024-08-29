import React from 'react';
import { ApiResult } from '../api/common';

interface Props<T> {
  useGet: () => Promise<ApiResult<T>>;
  onError?: () => void;
  onSuccess?: () => void;
}

export default function useFetch<T>(props: Props<T>) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [res, setRes] = React.useState<ApiResult<T>>();

  const fetch = React.useCallback(async () => {
    try {
      setLoading(true);
      const res = await props.useGet();
      setRes(res);
      setLoading(false);
      props.onSuccess?.();
      return;
    } catch {
      console.error('failed to fetch');
      props.onSuccess?.();
    } finally {
      setLoading(false);
    }
  }, [props.useGet]);

  React.useEffect(() => {
    if (!loading) {
      fetch();
    }
  }, []);

  return { res, loading, refetch: fetch };
}
