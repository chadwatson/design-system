import styled from "styled-components";

const VisiblyHiddenInput = styled.input`
  margin: -1px !important;
  padding: 0 !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  clip: rect(0, 0, 0, 0) !important;
  position: absolute !important;
`;

export default VisiblyHiddenInput;
