import { useState, useEffect } from "react";
const  useFetch = (url) => {
  const [data, setData] = useState({});
  const [isloading,setIsloading]=useState(false);
  useEffect(() => {
    const fetchData = async () => {
      // setIsloading(false)
      // console.log(isloading);
      const data = await fetch(url);
      const newData = await data.json();
      setData(newData);
    };
    fetchData();
  }, [url]);
  // setIsloading(true)
  // console.log(isloading);
  return [data,setData,isloading  ];
};
export default useFetch;
