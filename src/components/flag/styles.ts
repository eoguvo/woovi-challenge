import { styled } from "styled-components";

export const FlagWrapper = styled.div`
  background: #133a6f;
  padding: 8px 30px 8px 10px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 10px;
  gap: 4px;
  width: 100%;

  &:after {
    content: '';
    display: block;
    background: white;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);

    position: absolute;
    top: calc(50% - 3px);
    right: -5px;
    border-radius: 0 0 0 3px;

    rotate: 45deg;
  }
`;
