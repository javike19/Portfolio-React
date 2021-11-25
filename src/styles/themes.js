import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "linear-gradient(160deg, #e5e5e5 0%, #e0d2b9 100%)",

    introbgc: "linear-gradient(62deg, #f4a950 0%, #edb36f 100%)",
    introcolor: "#14213dff",

    titlebgc: "linear-gradient(160deg, #ad7839 0%, #987246 100%)",
    titlecolor: "#e5e5e5ff",

    btnbgc: "linear-gradient(132deg, #14213d 0%, #050911 100%)"
  };
  
  export const darkTheme = {
    body: "linear-gradient(62deg, #000000 0%, #0c1324 100%)",
    
    introbgc: "linear-gradient(132deg, #14213d 0%, #050911 100%)",
    introcolor: "#e5e5e5ff",

    titlebgc: "linear-gradient(62deg, #14213d 0%, #14213d 100%)",
    titlecolor: "#e5e5e5ff",

    btnbgc: "linear-gradient(62deg, #f4a950 0%, #edb36f 100%)"

  };
  
  export const GlobalStyles = createGlobalStyle`
      body {
          transition: 1s;
          background: ${(props) => props.theme.body};
          .utils-header{
            background: ${(props) => props.theme.titlebgc};
              color: ${(props) => props.theme.titlecolor};
          }
          .btn-darkmode{
            background: ${(props) => props.theme.btnbgc};
          }
          .intro-title{
            color: ${(props) => props.theme.introcolor};
          }
          .intro-info-pic{
              background: ${(props) => props.theme.introbgc};
              color: ${(props) => props.theme.introcolor};
          }
          .projects-main-contain{
            h3{
              background: ${(props) => props.theme.titlebgc};
              color: ${(props) => props.theme.titlecolor};
            }
            .project-contain{
              background: ${(props) => props.theme.introbgc};
            }
            color: ${(props) => props.theme.introcolor};
          }
          .tech-main h3{
            background: ${(props) => props.theme.titlebgc};
            color: ${(props) => props.theme.titlecolor};
          }
          .tech-card{
            background: ${(props) => props.theme.introbgc};
            color: ${(props) => props.theme.introcolor};
          }
          .modal-content{
            background: ${(props) => props.theme.introbgc};
            color: ${(props) => props.theme.introcolor};
          }
          .link-project{
            color: ${(props) => props.theme.introcolor};
        }
        .cv-contain h3{
          background: ${(props) => props.theme.titlebgc};
            color: ${(props) => props.theme.titlecolor};
        }
        .cv-contain a{
          color: ${(props) => props.theme.introcolor};
        }
        .work-li{
          background: ${(props) => props.theme.introbgc};
          color: ${(props) => props.theme.introcolor};
        }
        .education-li{
          background: ${(props) => props.theme.introbgc};
          color: ${(props) => props.theme.introcolor};
        }
        .year-title{
          background: ${(props) => props.theme.titlebgc};
            color: ${(props) => props.theme.titlecolor};
        }
        .footer-contain{
          background: ${(props) => props.theme.titlebgc};
            color: ${(props) => props.theme.titlecolor};
        }
      }
  `;