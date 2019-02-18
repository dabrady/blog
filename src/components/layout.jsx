import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { css } from "emotion";
import React from "react";

import { rhythm } from "../utils/typography";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        className={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link href="https://daniel13rady.com/" rel="canonical" />
        </Helmet>
        {children}
      </div>
    )}
  />
);
