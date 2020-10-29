/* eslint-disable */
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

const Testlib = () => {
  const { handleSubmit, control } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Controller
          as={TextField}
          name="TextField"
          control={control}
          defaultValue=""
        />

        <Controller
          control={control}
          name="ReactDatepicker"
          render={({ onChange, onBlur, value }) => (
            <ReactDatePicker
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
            />
          )}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Testlib;
