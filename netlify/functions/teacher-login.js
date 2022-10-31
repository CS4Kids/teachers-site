exports.handler = async (event, context) => {
  
    const { TEACHER_PASSCODE } = process.env;
    const queryPasscode = event.queryStringParameters.queryPasscode;
    
    if (TEACHER_PASSCODE == queryPasscode) {
      return {
        statusCode: 200,
       body: "Passcode correct!",
      };
      localStorage.setItem("logged-in", true);
    }   
    else {
      return { 
        statusCode: 200,
        body: "Passcode invalid",
      }
      localStorage.setItem("logged-in", false);
      }
    }
