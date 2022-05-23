exports.handler = async (event, context) => {
  
    const { PASSCODE } = process.env;
    const queryPasscode = event.queryStringParameters.queryPasscode;

    if (PASSCODE == queryPasscode) {
      return {
        status: 200,
       body: "Passcode correct!",
      };
    }   
    else {
      return { 
        status: 406,
        body: "Passcode invalid",

      }
      }
    }
