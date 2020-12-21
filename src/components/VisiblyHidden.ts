import styled, { css } from "styled-components";

export const visiblyHiddenCss = css`
  margin: -1px !important;
  padding: 0 !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  clip: rect(0, 0, 0, 0) !important;
  position: absolute !important;
`;

const VisiblyHidden = styled.div`
  ${visiblyHiddenCss};
`;

export default VisiblyHidden;
