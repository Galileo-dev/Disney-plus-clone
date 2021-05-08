import React, { useState } from "react";
import styled from "styled-components";

//=========================== Drop Downs ====================================
const DropDownContainer = styled("div")`
  width: 120px;
  margin: 0 auto;
  margin-left: 0.5em;
  margin: 10px;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  display: inline-block;
  z-index: 540;
`;

const DropDownHeader = styled("div")`
  border-radius: ${(props) => (props.isOpen ? "20px 20px 0px 0px" : "30px")};
  padding: ${(props) => (props.isOpen ? "5px" : "5px")};
  text-align: left;
  background: #131313;
  border: 2px solid #e5e5e5;
  border-bottom: ${(props) => (props.isOpen ? "none" : "")};
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  width: 120px;
  padding: 0;
  margin: 0;
  background: #131313;
  border: 2px solid #e5e5e5;
  border-top: none;
  border-radius: 0px 0px 15px 15px;
`;

const ListItem = styled("li")`
  list-style: none;
  text-align: left;
  padding: 5px;

  &:hover {
    background-color: #2d2d2d;

    cursor: pointer;
  }
`;

const CustomDropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.options[0]);
  console.log(props.options[0].image);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <DropDownContainer>
      <DropDownHeader isOpen={isOpen} onClick={toggling}>
        {console.log(selectedOption)}
        {selectedOption.image && <OptionIcon src={selectedOption.image} />}
        {selectedOption.name}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {props.options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option.image && <OptionIcon src={option.image} />}
                {option.name}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

const OptionIcon = styled.img`
  height: 2em;
  vertical-align: middle;
  margin-right: 5px;
`;

export default CustomDropDown;
