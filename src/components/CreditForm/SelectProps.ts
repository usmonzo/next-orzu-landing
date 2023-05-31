"use client";
import chroma from "chroma-js";

interface ISelectProps {
  data: boolean;
  isDisabled: boolean;
  isFocused: boolean;
  isSelected: boolean;
}
export const customSelectStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    width: "100%",
    minWidth: "250px",
    border: "1px solid #E0E0E0",
    padding: "12px 18px",
    background: "#D7DAE0",
    borderRadius: "16px",
    fontSize: "1.2rem",
    fontWeight: "800",
    zIndex: 4,
    "&:hover": {
      border: "1px solid #E0E0E0",
    },
    "@media screen and (max-width: 890px)": {
      fontSize: "1rem",
    },
  }),
  option: (styles: any, props: ISelectProps) => {
    const color = chroma("#D7DAE0");
    return {
      ...styles,
      backgroundColor: props.isSelected
        ? "#16191d"
        : props.isFocused
        ? "#e2e4e9"
        : "",
      color: props.isSelected
        ? "#ffffff"
        : props.isFocused
        ? "#090909"
        : "#8B97A7",
      fontWeight: "800",
      // cursor: isDisabled ? "not-allowed" : "default",
      height: "50px",
      zIndex: 4,
      display: "flex",
      alignItems: "center",
      borderRadius: "12px",

      "&:hover": {
        background: !props.isSelected ? "#e2e4e9" : "",
        color: !props.isSelected ? "#090909" : "",
      },
      // ":active": {
      //   ...styles[":active"],
      //   backgroundColor: !isDisabled
      //     ? isSelected
      //       ? data.color
      //       : color.alpha(0.3).css()
      //     : undefined,
      // },
    };
  },
  menuPortal: (base: any) => ({ ...base, zIndex: 3 }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: "20px",
    padding: "12px",
  }),
};
export const secondSelectStyle = {
  control: (provided: any, state: any) => ({
    ...provided,
    width: "100%",
    minWidth: "250px",
    border: "1px solid #E0E0E0",
    padding: "12px 18px",
    background: "#D7DAE0",
    borderRadius: "16px",
    fontSize: "1.2rem",
    fontWeight: "800",
    zIndex: 3,
    "&:hover": {
      border: "1px solid #E0E0E0",
    },
    "@media screen and (max-width: 890px)": {
      fontSize: "1rem",
    },
  }),
  option: (styles: any, props: ISelectProps) => {
    const color = chroma("#D7DAE0");
    return {
      ...styles,
      backgroundColor: props.isSelected
        ? "#16191d"
        : props.isFocused
        ? "#e2e4e9"
        : "",
      color: props.isSelected
        ? "#ffffff"
        : props.isFocused
        ? "#090909"
        : "#8B97A7",
      fontWeight: "800",
      // cursor: isDisabled ? "not-allowed" : "default",
      height: "50px",
      zIndex: 4,
      display: "flex",
      alignItems: "center",
      borderRadius: "12px",

      "&:hover": {
        background: !props.isSelected ? "#e2e4e9" : "",
        color: !props.isSelected ? "#090909" : "",
      },

      ":active": {
        ...styles[":active"],
        backgroundColor: "#16191d",
      },
    };
  },
  menuPortal: (base: any) => ({ ...base, zIndex: 3 }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: "20px",
    padding: "12px",
  }),
};
