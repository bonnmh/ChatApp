const createAction = (type, ...argNames) => {
  return function (...args) {
    const action = {type};

    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });

    return action;
  };
};

const createActionSet = (actionName) => ({
  REQUEST: `${actionName}_REQUEST`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAILURE: `${actionName}_FAILURE`,
});

export {createAction, createActionSet};
