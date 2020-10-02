export const checkDuplicatedUsernameOrEmail = async (req, res, next) => {
    console.log("checkear usuarios duplicados");
    next();
  };
  
  export const checkRolesExisted = (req, res, next) => {
    console.log("comprobar si hay roles");
    next();
  };