import { useEffect, useState } from "react";
import useAxiosPublick from "./useAxiosPublick";
const useGallery = () => {
    const [gallery, setGallery] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 12;
    const axiosPublick = useAxiosPublick()
    useEffect(() => {
      fetchData();
    }, [page]);
  
    const fetchData = async () => {
      try {
        const res = await axiosPublick(
          `/gallery?offset=${
            (page - 1) * itemsPerPage
          }&limit=${itemsPerPage}`
        );
        const data = await res.data;
        setGallery((prevGallery) => [...prevGallery, ...data]);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };
  
    const fetchMoreData = () => {
      setPage((prevPage) => prevPage + 1);
    };
      return {gallery,fetchMoreData}
};
export default useGallery;

