const { PASSCODE } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: PASSCODE,
  };
};