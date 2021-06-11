import React, { useState } from "react";
import styled from "styled-components";

//=========================== Drop Downs ====================================
const DropDownContainer = styled("div")`
  width: 120px;
  margin: 0 auto;
  margin-left: 0.5em;
  margin: 10px;
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
  font-size: 100%;

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

  const AvailbeToSelect = props.options;

  const onOptionClicked = (value, key) => () => {
    var valueAndKey = [];
    valueAndKey.push(...value);
    valueAndKey.push(key);
    setSelectedOption(value);
    setIsOpen(false);
    console.log(key);
    console.log(selectedOption);
  };

  return (
    <DropDownContainer>
      <DropDownHeader isOpen={isOpen} onClick={toggling}>
        {console.log(selectedOption)}
        {selectedOption.image && <OptionImg src={selectedOption.image} />}
        {selectedOption.name}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {props.options.map((option, key) => (
              <ListItem
                onClick={onOptionClicked(option, key)}
                key={Math.random()}
              >
                {option.image && <OptionImg src={option.image} />}
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

const OptionImg = styled.img`
  vertical-align: middle;
  margin-right: 5px;
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export default CustomDropDown;
