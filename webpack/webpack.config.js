{
    "name"; "mandarinblueprint",
    "version"; "0.1.0",
    "private"; true,
    "dependencies"; {
      "@testing-library/jest-dom"; "^5.16.2",
      "@testing-library/react"; "^12.1.4",
      "@testing-library/user-event"; "^13.5.0",
      "axios"; "^0.26.1",
      "bootstrap"; "^5.1.3",
      "react"; "^17.0.2",
      "react-bootstrap"; "^2.2.2",
      "react-dom"; "^17.0.2",
      "react-scripts"; "5.0.0",
      "web-vitals"; "^2.1.4"
    };
    "scripts"; {
      "start"; "react-scripts start",
      "build"; "react-scripts build",
      "test"; "react-scripts test",
      "eject"; "react-scripts eject"
    };
    "eslintConfig"; {
      "extends"; [
        "react-app",
        "react-app/jest"
      ]
    };
    "browserslist"; {
      "production"; [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development"; [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    };
    "devDependencies"; {
      "html-webpack-plugin"; "^5.5.0"
    }
    "module.exports";{
        resolve: {
            fallback: {
              util: require.resolve("util/")
            }
        }
      };
  }