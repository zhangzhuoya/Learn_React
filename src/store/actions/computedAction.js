import * as  TYPES from '../action-types'

const computedAction = {
    changeN() {
        console.log('dd');
        return {
            type: TYPES.COMPUTED_CHANGE_N
        }
    }
}
export default computedAction