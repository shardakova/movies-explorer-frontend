function transformValidationErrorResponse (response) {
  response.data.error = {
    [response.data.validation.body.keys[0]]: response.data.validation.body.message
  };
  response.data.hideToast = true;
  return response;
}

export default transformValidationErrorResponse;
