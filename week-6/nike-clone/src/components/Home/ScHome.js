import Styled from 'styled-components';

export const Container = Styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 32px;
  border-top: 1px solid #ccc;
`;

export const SubHeader = Styled.div`
  padding: 8px 32px;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right-header {
    display: flex;
    gap: 12px;
    font-size: 14px;
    font-weight: 500;
    color: #111;
    & > span:not(:last-child) {
      border-right: 1px solid #000;
      padding-right: 12px;
    }
    & > span {
      cursor: pointer;
      &:hover {
        color: #2233ee;
      }
    }
  }
`;

export const MainHeader = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  padding-left: 24px;
  .header-middle {
    display: flex;
    gap: 12px;
    font-size: 18px;
    font-weight: 600;
    & > span:hover {
      border-bottom: 1px solid #000;
    }
    .active {
      color: #2234fe;
      font-weight: 600;
    }
  }
  .right-menu {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .search-wrapper {
    position: relative;
    svg {
      position: absolute;
      top: 6px;
      left: 6px;
    }
  }
`;

export const Input = Styled.input`
  padding: 8px 12px 8px 32px;
  border-radius: 16px;
  border: 1px solid #ddd;
  background: #eee;
  &:hover {
    background: #ccc;
  }
  &:active, &:focus {
    outline: none;
  }
`;

export const ProductsWrapper = Styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  .left-menu {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-weight: 500;
    font-size: 18px;
    li {
      cursor: pointer;
      &.active {
        color: #2234fe;
      }
    }
  }
  .products {
    flex: 3;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const Title = Styled.h2`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 20px;
  svg {
    cursor: pointer;
    fill: red;
  }
`;

export const CardWrapper = Styled.div`
  max-width: 240px;
  box-shadow: 0px 2px 21px -14px rgba(0,0,0,0.75);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;

  &:hover {
    /* transform: scale(1.25); */
  }

  img {
    width: 200px;
    height: 200px;
  }
  .product-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    .title {
      max-width: 200px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-weight: 600;
    }
    .category {
      color: #aaa;
    }
    .price {
      font-weight: 600;
    }
  }

  svg {
    z-index: 12321;
  }
`;

export const Cart = Styled.div`
  position: relative;
  cursor: pointer;
  span {
    position: absolute;
    background: tomato;
    padding: 2px 4px;
    border-radius: 50%;
    color: #fff;
    font-size: 12px;
    right: -4px;
    bottom: -6px;
  }
`;
