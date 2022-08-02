export const mainTableStyles = {
  ".MuiTableHead-root": {
    backgroundColor: "#7890B2",
    position: "sticky",
    top: 0,
    zIndex: "3",
    ".MuiTableCell-root": {
      color: "#fff",
      zIndex: "4",
      border: "1px solid #6e86ab",
      padding: "0.5rem",
      textAlign: "center",
      whiteSpace: "pre",
    },
  },
  ".MuiTableBody-root": {
    backgroundColor: "#fff",

    ".MuiTableCell-root": {
      fontSize: "14px",
      letterSpacing: "0.15px",
      padding: "0.5rem",
      textAlign: "center",
      border: "1px solid rgb(221 226 234)",

      // "&:hover": {
      //   backgroundColor: "rgba(224, 224, 224, 1)",
      // },
    },
  },
};

const levelSameProperties = {
  fontSize: "10px",
  padding: "0.2rem 0.5rem",
  borderRadius: "4px",
  display: "inline-block",
};

export const levelStyleOne = {
  ...levelSameProperties,
  color: "#0044B4",
  border: "1px solid #0044B4",
  backgroundColor: "rgba(109, 154, 220, 0.2)",
};
export const levelStyleTwo = {
  ...levelSameProperties,
  color: "#6D9ADC",
  border: "1px solid #6D9ADC",
  backgroundColor: "rgba(109, 154, 220, 0.1)",
};
export const levelStyleThree = {
  ...levelSameProperties,
  color: "#6FCCBC",
  border: "1px solid #6FCCBC",
  backgroundColor: "rgba(141, 212, 200, 0.15)",
};

export const donePercentSameStyles = {
  borderRadius: "8px",
  padding: "2px 16px",
};
export const donePercentLess50 = {
  ...donePercentSameStyles,
  color: "#D32F2F",
  backgroundColor: "#f5eff1",
};
export const donePercent5090 = {
  ...donePercentSameStyles,
  color: "#B49700",
  backgroundColor: "#fcf9e3",
};
export const donePercent90Plus = {
  ...donePercentSameStyles,
  color: "#2E7D32",
  backgroundColor: "#eaf1f4",
};
