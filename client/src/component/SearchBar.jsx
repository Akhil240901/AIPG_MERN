import { SearchOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  max-width: 550px;
  gap: 6px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text_primary + 90};
  color: ${({ theme }) => theme.text_primar};
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  width: 90%;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchOutlined />
      <input
        placeholder="Search with prompt or name...."
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          color: "inherit",
          fontSize: "16px",
          background: "transparent",
        }}
      />
    </SearchBarContainer>
  );
};
