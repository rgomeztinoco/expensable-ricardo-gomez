/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const utils = css`
  /* colors */
  .white {
    color: #fff;
  }

  .bg-gray-100 {
    background-color: var(--gray-100);
  }

  .center-text {
    text-align: center;
  }

  /* Margins */
  .mb-8 {
    margin-bottom: 2rem;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }

  .mb-1 {
    margin-bottom: 0.25rem;
  }

  /* Flex & Grid */
  .flex {
    display: flex;
  }

  .wrap {
    flex-wrap: wrap;
  }

  .gap-4 {
    gap: 1rem;
  }

  .items-center {
    align-items: center;
  }
`;

export default utils;
