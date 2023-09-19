import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@500;600&display=swap');
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--title-12: Poppins;
--number-bold-12: Oxanium;

/* font sizes */
--text-14-size: 14px;
--number-bold-12-size: 12px;

/* Colors */
--bg-body-bg: #f6f5f6;
--bg-body-outer-bg: #f0eff0;
--border-border-defaul: #edeced;
--color-whitesmoke-100: #ebeaeb;
--bg-block-bg-default: #fcfbfc;
--text-text-lvl-2: #838387;
--text-text-lvl-1: #141315;
--colors-primary-blue: #3b71fe;
--text-text-lvl-3: #a1a1a6;
--colors-yellow: #ffe598;
--border-border-darker: #e0dfe0;

/* Gaps */
--gap-xl: 20px;
--gap-xs: 12px;
--gap-5xl: 24px;
--gap-11xs: 2px;
--gap-5xs: 8px;
--gap-9xs: 4px;
--gap-7xs: 6px;

/* Paddings */
--padding-61xl: 80px;
--padding-xl: 20px;
--padding-5xl: 24px;
--padding-xs: 12px;
--padding-7xs: 6px;
--padding-9xs: 4px;
--padding-base: 16px;
--padding-5xs: 8px;

/* Border radiuses */
--br-5xs: 8px;
--br-7xs: 6px;
--br-xl: 20px;
--br-41xl: 60px;
--br-21xl: 40px;
--br-51xl-5: 70.5px;

}
`;
