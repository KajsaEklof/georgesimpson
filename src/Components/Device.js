// Setting sizes for Styled Components CSS media queries

const size = {
    mobile: '300px', 
    desktop: '1000px'
  };

  export const device = {
    mobile: `(min-width: ${size.mobile})`,
    desktop: `(max-width: ${size.desktop})`
  };
