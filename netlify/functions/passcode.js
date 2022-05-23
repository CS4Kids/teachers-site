exports.handler = async (event, context) => {
  
    const { PASSCODE } = process.env;
    const queryPasscode = event.queryStringParameters.queryPasscode;

    if (PASSCODE == queryPasscode) {
      return {
        statusCode: 200,
        statusText: "Passcode correct!",
       body: JSON.stringify({ message: "Passcode correct!" }),
      };
    }   
    else {
      return { 
        statusCode: 200,
        statusText: "Passcode invalid",
        body: JSON.stringify({ message: "Passcode invalid" }),

      }
      }
    }
