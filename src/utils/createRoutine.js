export const routineStages = ['TRIGGER', 'REQUEST', 'SUCCESS', 'FAILURE', 'FULFILL']

// super simple implementation of redux-saga-routines (https://github.com/afitiskin/redux-saga-routines)
export default function createRoutine (typePrefix, separator = '/') {
  const routineCreator = type => `${typePrefix}${separator}${type}`
  return routineStages.reduce((result, stage) => {
    result[stage] = routineCreator(stage)
    return result
  }, {})
}
