import React, { useState } from "react";
import { Box, Container, Button, Input } from "@chakra-ui/react";
import PropTypes from 'prop-types';

export default function AddDate({ setDate }) {
  //getting the input object
  const dateInput = document.getElementsByClassName("pickerInput");

  const [startDate, setStartDate] = useState('');

  const handleInputChange = (e) => {
    setStartDate([dateInput[0].value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startDate && setDate(dates => [ startDate, ...dates]);
    setStartDate('');
    //console.log(startDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container
        maxW="sm"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        centerContent
      >
        <Box>
          <Input
            type="date"
            value={startDate}
            onChange={handleInputChange}
            className="pickerInput"
          />
        </Box>
        <Box marginTop="3" marginBottom="3">
          <Button type="submit" colorScheme="blue">
            Button
          </Button>
        </Box>
      </Container>
      <br />
    </form>
  );
}

AddDate.propTypes = {
  setDate : PropTypes.func.isRequired
};
