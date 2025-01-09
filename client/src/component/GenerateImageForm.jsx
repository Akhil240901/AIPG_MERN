import React from "react";
import styled from "styled-components";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import Button from "./buttons/Button";
import TextInput from "./input/InputText";
const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 28px;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
`;
const Actions = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`;
export const GenerateImageForm = ({
  post,
  setPost,
  generateImageLoading,
  setGenerateImageLoading,
  createPostLoading,
  setCreatePostLoading,
}) => {
  const generateImageFunction = () => {
    setGenerateImageLoading(true);
  };
  const createPostFunction = () => {
    setCreatePostLoading(true);
  };
  return (
    <Form>
      <Top>
        <Title>Generate Image with prompt</Title>
        <Desc>Write your prompt according to your thoght </Desc>
      </Top>
      <Body>
        <TextInput
          label="Author"
          placeholder="Enter your name ..."
          name="name"
          value={post?.author}
          handelChange={(e) => setPost({ ...post, author: e.target.value })}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Enter detailed prompt about  the image..."
          name="name"
          rows="8"
          textArea
          value={post?.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
      </Body>
      ** You can p[ost the AI Generated Image to community..]
      <Actions>
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ""}
          onClick={generateImageFunction()}
        />
        <Button
          text="Post Image"
          type="secondary"
          flex
          leftIcon={<CreateRounded />}
          isDisabled={
            post.prompt === "" || post.author === "" || post.photo === ""
          }
          onClick={() => createPostFunction()}
        />
      </Actions>
    </Form>
  );
};
