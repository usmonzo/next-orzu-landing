"use client";
import chroma from "chroma-js";

interface ISelectProps {
  data: boolean;
  isDisabled: boolean;
  isFocused: boolean;
  isSelected: boolean;
  id?: number;
}
export const customSelectStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    cursor: "pointer",
    width: "100%",
    minWidth: "250px",
    border: "1px solid #E0E0E0",
    padding: "13px 18px",
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
    "::placeholder": {
      color: "red",
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
  menu: (base: any) => ({
    ...base,
    borderRadius: "20px",
    padding: "12px",
  }),
  menuList: (base: any) => ({
    ...base,
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "::-webkit-scrollbar": {
      display: "none",
    },
    "::-webkit-scrollbar-track": {
      background: "red",
      display: "none",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
      display: "none",
    },
    "::-webkit-scrollbar-thumb:hover": {
      display: "none",
    },
  }),
  placeholder: (defaultStyles: any) => ({
    ...defaultStyles,
    color: "#9ca3af",
  }),
};
export const secondSelectStyle = {
  control: (provided: any, state: any) => ({
    ...provided,
    cursor: "pointer",
    width: "100%",
    minWidth: "250px",
    border: "1px solid #E0E0E0",
    padding: "13px 18px",
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
      scrollbarWidth: "none",
      msOverflowStyle: "none",

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
  menuPortal: (base: any) => ({ ...base, zIndex: 4 }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: "20px",
    padding: "12px",
    zIndex: 2,
  }),
  menuList: (base: any) => ({
    ...base,
    zIndex: 2,
  }),
  placeholder: (defaultStyles: any) => ({
    ...defaultStyles,
    color: "#9ca3af",
  }),
};
