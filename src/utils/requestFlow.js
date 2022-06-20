import { routineStages } from './createRoutine'

export default (routine, callFn) => {
  const mockMutations = {}
  routineStages.forEach(stage => {
    mockMutations[routine[stage]] = state => state
  })
  return {
    actions: {
      [routine.TRIGGER] (context, payload) {
        context.commit(routine.TRIGGER, payload)
        return context.dispatch(routine.REQUEST, payload)
      },
      async [routine.REQUEST] (context, payload) {
        let response = null
        try {
          response = await callFn(payload)
          await context.dispatch(routine.SUCCESS, response.data)
          return response
        } catch (e) {
          context.dispatch(routine.FAILURE, e)
          throw e
        }
      },
      [routine.SUCCESS] (context, payload) {
        context.commit(routine.SUCCESS, payload)
        context.dispatch(routine.FULFILL, payload)
      },
      [routine.FAILURE] (context, payload) {
        context.commit(routine.FAILURE, payload)
        context.dispatch(routine.FULFILL, payload)
      },
      [routine.FULFILL] (context, payload) {
        context.commit(routine.FULFILL, payload)
      }
    },
    mockMutations
  }
}
