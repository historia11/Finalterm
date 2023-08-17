import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import Product from "./Product";
import CommentForm from "./CommentForm";

const VideoDetail = () => {
  const [shopName, setShopName] = useState("");
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [videoDetail, setVideoDetail] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchVideoById();
    fetchProductsById();
    fetchCommentsById();
    console.log("test");
  }, []);

  useEffect(() => {
    fetchCommentsById()
  },[comments])

  const fetchVideoById = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/videos/${id}/products`
    );
    setVideoDetail(response.data);
    setProducts(response.data);
    // setShopName(response.data.shop_name);
  };

  const fetchProductsById = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/videos/${id}/products`
    );
    setProducts(response.data);
  };

  const fetchCommentsById = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/videos/${id}/comment`
    );
    setComments(response.data);
  };

  const addComment = async (comment, username) => {
    const response = await axios.post(
      `http://localhost:4000/api/videos/${id}/comment`,
      {
        video_id: id,
        username: username,
        comment: comment,
        timestamp: new Date().toISOString(),
      }
    );

    setComments([...comments, response.data]);
  };

  console.log(products);
  console.log("comments", comments);
  return (
    <div className="flex flex-col w-full h-full px-5 mx-auto space-x-2 sm:px-10 xl:px-20 xl:flex-row">
      <div className="flex flex-col py-6 mt-5 border border-gray-200 rounded-lg">
        <div className="flex flex-row flex-grow h-full overflow-x-auto xl:overflow-y-auto xl:h-0 xl:flex-col scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-200">
          {products?.data?.map((product) => {
            console.log(product);
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>

      <div className="h-full px-2 py-6 mt-5 border border-gray-200 grow rounded-xl sm:px-6 lg:pl-8 xl:pl-6">
        <div className="flex items-center justify-between pr-3 mb-5">
          <p className="font-normal text-md">{shopName}</p>
        </div>
        <div className="relative w-full overflow-hidden pt-[56.25%]">
          <iframe
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full border-none rounded-lg aspect-video"
            src={`https://www.youtube.com/embed/${id}?&autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col w-full mt-5 border border-gray-200 rounded-lg xl:w-80">
        <div className="w-full p-4 border-b border-gray-200 sm:px-6">
          <h3 className="font-semibold">Comments</h3>
        </div>
        <div className="flex-grow h-[300px] scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-200 overflow-y-auto xl:h-0">
          {comments?.data?.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
        <div className="px-4 py-4 border-t border-gray-200 sm:px-6">
          <h3 className="text-sm font-semibold">Write your Comment</h3>
          <CommentForm handleSubmit={addComment} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
