import { combineReducers } from 'redux'
import { auth } from './auth/reducers'
import { objective } from './objective/reducers'
import { objectives } from './objectives/reducers'
import { user } from './user/reducers'
import { users } from './users/reducers'
import { userSummary } from './userSummary/reducers'

export default combineReducers({
    auth,
    objective,
    objectives,
    user,
    users,
    userSummary,
})