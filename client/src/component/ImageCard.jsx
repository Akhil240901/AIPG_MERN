import { DownloadDone, DownloadRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import FileSaver from "file-saver";

const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 80};
    scale: 1.05;
  }
  &:nth-child(7n + 1) {
    grid-column: auto/Span 2;
    grid-row: auto/Span 2;
  }
`;
const HoverOverlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.white};
  transition: opacity 0.3s ease;
  border-radius: 6px;
  justify-content: end;
  padding: 16px;

  ${Card}:hover & {
    opacity: 1;
  }
`;
const Prompt = styled.div`
  font-weight: 400px;
  font-size: 15px;
  color: ${({ theme }) => theme.white};
`;
const Author = styled.div`
  font-weight: 600px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.white};
`;
const ImageCard = ({ item }) => {
  return (
    <Card>
      <LazyLoadImage
        alt={item?.prompt}
        style={{ borderRadius: "16px" }}
        width="100%"
        src={item?.photo}
      />
      <HoverOverlay>
        <Prompt>{item?.prompt}</Prompt>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Author>
            <Avatar style={{ width: "30px", height: "30px" }}>
              {item?.author[0]}
            </Avatar>
            {item?.author}
          </Author>
          <DownloadRounded
            onClick={() => FileSaver.saveAs(item?.photo, "download.png")}
          />
        </div>
      </HoverOverlay>
    </Card>
  );
};

export default ImageCard;
