import React, { useState } from "react";
import styled from "styled-components";
import { GenerateImageForm } from "../component/GenerateImageForm";
import { GenerateImageCard } from "../component/GenerateImageCard";
import { Photo } from "@mui/icons-material";
import { use } from "react";

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background:{({theme})=>theme.bg}
  padding:20px 30px ;
  padding-bottom:50px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:20px;

  @media (max-width:768px){
      padding:6px 10px ;
  }
`;
const Wrapper = styled.div`
  height: fit-content;
  max-width: 1200px;
  gap: 10%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const CreatePost = () => {
  const [post, setPost] = useState({
    author: "",
    prompt: "",
    photo: "",
  });
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);

  return (
    <Container>
      <Wrapper>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
          createPostLoading={createPostLoading}
          setCreatePostLoading={setCreatePostLoading}
        />
        <GenerateImageCard src={post?.photo} loading={generateImageLoading} />
      </Wrapper>
    </Container>
  );
};
