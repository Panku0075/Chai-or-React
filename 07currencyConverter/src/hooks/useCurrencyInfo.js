import  { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((resolve) => resolve.json())
      .then((resolve) => setData(resolve[currency]));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
