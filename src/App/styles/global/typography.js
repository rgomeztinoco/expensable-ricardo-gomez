/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const typography = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap");

  :root {
    --font-primary: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    --font-secondary: "Montserrat", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
  }

  body {
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: var(--font-primary);
    color: var(--gray-400);
  }

  .heading,
  .heading--md {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 600;
    font-family: var(--font-secondary);
  }

  .heading--xxl {
    font-size: 3.75rem;
    line-height: 3.75rem;
  }

  .heading--xl {
    font-size: 3rem;
    line-height: 3rem;
  }

  .heading--lg {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .heading--sm {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .heading--xs {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .content-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .content-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .content-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .content-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .overline {
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }
`;

export default typography;
