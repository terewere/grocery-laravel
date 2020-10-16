import TaskPolicy from './TaskPolicy';
import CommentPolicy from './CommentPolicy';

export default class Gate {
    constructor(user) {
  
        this.user = user;

        this.policies = {
            task: TaskPolicy,
            comment: CommentPolicy
        };
    }

    canAny(value) {

        if (this.before()) {
            return true;
        }

        if (this.user) {  
            return value.some(permission => this.user.permissions.includes(permission));
        }

    }

    can(value) {

        if (this.before()) {
            return true;
        }

        if (this.user) {  
            return this.user.permissions.includes(value);
        }
    }

    before() {

        if (this.user) {  
            
            return this.user.permissions.includes('do_all');
        }
        
    }

    allow(action, type, model = null) {
        if (this.before()) {
            return true;
        }


        return this.policies[type][action](this.user, model);
    }

    deny(action, type, model = null) {
        return !this.allow(action, type, model);
    }
}