import Styled from "styled-components";

export const DetailWrapper = Styled.div`
  margin-top: 32px;
  display: flex;
  padding: 32px;
  gap: 32px;
  .image-wrapper img {
    width: 400px;
    height: 400px;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .title {
    font-size: 32px;
    font-weight: 600;
  }
  .description {
    font-size: 14px;
    color: #aaa;
  }
  .price {
    font-size: 28px;
    font-weight: 600;
  }
`;
