import { useState } from 'react';

export default () => {
  const [form, setValues] = useState({
    title: "",
    description: ""
  });

  return {
    form,
    updateField: event => {
      setValues({
        ...form,
        [event.target.name]: event.target.value.trim()
      });
    },
    reset: () => setValues({
      title: "",
      description: ""
    })
  };
};