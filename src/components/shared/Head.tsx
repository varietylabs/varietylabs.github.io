import React from "react";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

export const Head: React.FC<{
  title?: string;
  description?: string;
  pathName: string;
}> = ({ title, description, pathName, children }) => {
  return (
    <StaticQuery
      query={QueryHead}
      render={({
        site: {
          siteMetadata: {
            site,
            defaultTitle,
            titleTemplate,
            defaultDescription,
            language,
            siteUrl,
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          url: `${siteUrl}${pathName}`,
        };
        return (
          <Helmet
            title={seo.title}
            titleTemplate={titleTemplate}
            meta={[
              { name: "description", content: seo.description },
              { name: "title", content: seo.title },
              { name: "og:url", content: seo.url },
              { name: "og:title", content: seo.title },
              { name: "og:description", content: seo.description },
              { name: "apple-mobile-web-app-capable", content: "yes" },
              { name: "apple-mobile-web-app-title", content: site },
              {
                name: "apple-mobile-web-app-status-bar-style",
                content: "black-translucent",
              },
            ]}
          >
            <html lang={language} />
            <title>{title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
              rel="stylesheet"
            />
            {children}
          </Helmet>
        );
      }}
    />
  );
};

const QueryHead = graphql`
  query QueryHead {
    site {
      siteMetadata {
        site
        siteUrl
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        language
      }
    }
  }
`;
