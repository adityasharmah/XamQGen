import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000; /* Set the background color to black for extra darkness */
  color: #fff;
  border-radius: 20px; /* Add border-radius for circular corners */
  padding: 20px; /* Add some padding for spacing */
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px; /* Set a maximum width for the content */
`;

const Heading = styled.h1`
  text-align: center;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the content horizontally */
  gap: 3rem;
  padding: 2rem;
`;

const InputEditorWrapper = styled.div`
  flex: 1; /* Make the input editor take up 50% of the flex container */
`;

const OutputEditorWrapper = styled.div`
  flex: 1; /* Make the output editor take up 50% of the flex container */
`;

const InputOutputContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  height: 500px;
  overflow-y: auto;
  border: 1px solid #ccc;
  outline: 2px solid #8fe1e8;
`;

const Button = styled.button`
  margin-top: 20px;
  background: #8fe1e8;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

function GetStarted() {
  const [code, setCode] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Container>
      <Wrapper>
        <Heading>Generate Question Paper</Heading>
        <FlexContainer>
          <InputEditorWrapper>
            <h3>Input:</h3>
            <AceEditor
              mode="javascript"
              theme="monokai"
              value={code}
              onChange={handleCodeChange}
              fontSize={20}
              width="100%"
              height="500px"
            />
          </InputEditorWrapper>
          <OutputEditorWrapper>
            <h3>Output:</h3>
            <InputOutputContainer>{code}</InputOutputContainer>
            <Button onClick={handleGenerate} disabled={isLoading}>
              {isLoading ? "Generating..." : "Generate"}
            </Button>
            {isLoading && <div>Loading...</div>}
          </OutputEditorWrapper>
        </FlexContainer>
      </Wrapper>
    </Container>
  );
}

export default GetStarted;
