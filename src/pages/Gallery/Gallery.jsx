import { Helmet } from "react-helmet";
import SectionTitle from "../../Sheard/SectionTitle/SectionTitle";
import useGallery from "../../Sheard/Hooks/useGallery";
import GalleryCart from "./GalleryCart";
import InfiniteScroll from "react-infinite-scroll-component";
const Gallery = () => {
    const {gallery,fetchMoreData} = useGallery()
  return (
    <>
      <Helmet>
        <title>Body Pulse | Gallery</title>
      </Helmet>
      <SectionTitle heading="Gallery" title="Gallery images" />
      <InfiniteScroll
        dataLength={gallery.length}
        next={fetchMoreData}
        hasMore={true} // To indicate whether more items can be loaded
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center", background: "red" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((item, index) => (
            <GalleryCart
              key={index}
              item={item}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Gallery;
